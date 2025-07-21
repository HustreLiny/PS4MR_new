# 13 Analysis of survival times

## 13.1 INTRODUCTION

In most studies the data are a mixture of measurements and attributes. The preceding four chapters have presented methods for the analysis of both quantitative and qualitative data for various study designs. Another type of data arises when interest is focused on the time taken for some event to occur. One of the most common sources of such data is when we record the time from some fixed starting point, such as surgery, to the death of the subject. For this reason we usually refer to survival times or survival data and the statistical treatment of survival times is known as survival analysis. As we shall see, similar data arise in other situations, but it is customary to stick to the same terminology.

In clinical studies survival times often refer to the time to death, to development of a particular symptom, or to relapse after remission of disease. Although there is usually a clear definition of the end of the time period of interest, the start may be less well defined. It is, for example, rarely possible to know how long somebody has had a disease, so the date of diagnosis is often the best alternative. For some diseases these two dates can be very different.

There is one inherent feature of survival times that makes them unsuitable for analysis by any of the methods described in the preceding chapters, which is that we almost never observe the event of interest in all subjects. For example, in a study to compare the survival of patients having different types of surgery for breast cancer, although the patients will be followed up for several years there will be many who are still alive at the end of the study. For these patients we do not know when they will die, only that they are still alive at the end of the study. Nor, therefore, do we know their survival time from surgery, only that it will be longer than their time in the study. We call such survival times censored, to indicate that the period of observation was cut off before the event of interest occurred. Note that as the event of interest is usually something that is undesirable, such as death, the 'interest' is scientific, not clinical.

If all subjects were followed for exactly the same length of time it would perhaps be possible to use the rank methods introduced in Chapter 9 for analysing survival times, giving all censored times the equal highest rank.

However, patients are nearly always followed for varying lengths of time. In any case patients may leave the study before the end, perhaps moving to a different area. Withdrawals thus lead to censored observations of a different type.

Figure 13.1 illustrates the different ways in which patients can proceed through a study. It shows a six month period during which patients are recruited to the study, and a further 12 months of observation. The patients are thus observed for between 12 and 18 months, the most recently accrued patients being observed for the shortest time. Figure 13.1 shows that four patients died and four were still alive at the end of the study. Two other patients withdrew from the study before the end. We thus have four firm survival times and six censored times, as shown in Table 13.1, where the asterisk denotes a censored survival time. We ignore the different starting times when analysing survival data, and it helps to order the observations by survival time. Figure 13.2 shows the effect of these changes.

With data of this type we often wish to estimate the probability of an individual surviving for a given time period such as one year. With two or more groups we will also be interested in comparing their survival experience. This chapter introduces methods to answer these and other questions relating to survival data. For convenience, I shall assume that the data have already been sorted into ascending order of survival times. (Computer programs may require this.)

The analysis of medical survival data has become widespread since the

![](../images/13_Analysis_of_survival_times/img1.jpg)  
Figure 13.1 Diagram showing patients entering a study at different times and the observation of known  $(\bullet)$  and censored  $(\circ)$  survival times.

Table 13.1 Survival times for patients shown in Figure 13.1  

<table><tr><td>Patient</td><td>Time at entry (m)</td><td>Time at death or censoring (m)</td><td>Dead or censored</td><td>Survival time</td></tr><tr><td>1</td><td>0.0</td><td>11.8</td><td>D</td><td>11.8</td></tr><tr><td>2</td><td>0.0</td><td>12.5</td><td>C</td><td>12.5*</td></tr><tr><td>3</td><td>0.4</td><td>18.0</td><td>C</td><td>17.6*</td></tr><tr><td>4</td><td>1.2</td><td>4.4</td><td>C</td><td>3.2*</td></tr><tr><td>5</td><td>1.2</td><td>6.6</td><td>D</td><td>5.4</td></tr><tr><td>6</td><td>3.0</td><td>18.0</td><td>C</td><td>15.0*</td></tr><tr><td>7</td><td>3.4</td><td>4.9</td><td>D</td><td>1.5</td></tr><tr><td>8</td><td>4.7</td><td>18.0</td><td>C</td><td>13.3*</td></tr><tr><td>9</td><td>5.0</td><td>18.0</td><td>C</td><td>13.0*</td></tr><tr><td>10</td><td>5.8</td><td>10.1</td><td>D</td><td>4.3</td></tr></table>

*censored observation

![](../images/13_Analysis_of_survival_times/img2.jpg)  
Figure 13.2 Figure 13.1 reorganized to correspond to method of analysis.

early 1970s when new methods were developed. Most of the methods described in this chapter are discussed in much more detail in two excellent papers by Peto et al. (1976 and 1977), especially in the second paper. These papers also contain a wealth of practical advice about the design and execution of studies of survival times.


## 13.2 SURVIVAL PROBABILITIES

From a set of observed survival times (including censored times) from a sample of individuals we can estimate the proportion of the population of

such people who would survive a given length of time in the same circumstances. For example, we can use data from a study of patients having liver transplants to estimate the probability of new patients surviving a given length of time after transplantation (with the usual proviso about the representativeness of the original sample). The method is clever in that it not only makes proper allowances for those observations that are censored, but also makes use of the information from these subjects up to the time when they are censored. The method yields a graph or a table, which goes under various names: life table, survival curve, Kaplan- Meier curve.


### 13.2.1 Kaplan-Meier survival curve

The probability of surviving a given length of time can be calculated by considering time in many small intervals. For example, the probability of a patient surviving two days after a liver transplant can be considered to be the probability of surviving one day, multiplied by the probability of surviving the second day given that the patient survived the first day. This second probability is known as a conditional probability. If we write  $p_{100}$  as the probability of surviving the hundredth day conditional on having already survived the first 99 days, then the overall probability of surviving 100 days after a liver transplant is given by

$$
p_{1}\times p_{2}\times p_{3}\times \ldots p_{99}\times p_{100}
$$

The probability of surviving the 100th day is estimated simply as the proportion of the sample surviving that day of those still known to be alive after 99 days. The probability  $p$  is thus 1 on days when nobody dies, so the calculations are simplified by the fact that it is only necessary to calculate the probabilities for days on which at least one person dies.

The survival curve calculations will be illustrated on a small data set arising from a research programme aimed at the prediction of motion sickness at sea (Burns, 1984). Subjects were placed in a cubical cabin mounted on a hydraulic piston and subjected to vertical motion (known as 'heave'!) for two hours. The endpoint of interest was the time when the subject first vomited (known as 'frank emesis'). Some subjects requested an early stop to the experiment although they had not vomited, yielding censored observations, while others successfully survived two hours. Twenty- one subjects were studied with a frequency of  $0.167 \mathrm{~Hz}$  and acceleration of  $0.111 \mathrm{~G}$ , 14 of whom survived two hours without vomiting. The survival times (in minutes) of the other seven subjects were

where the two observations marked * were censored. The other 14 observations were censored at 120 minutes.

Table 13.2 Life table for motion sickness data from an experiment with vertical movement at a frequency of  $0.167\mathrm{Hz}$  and acceleration 0.111 G (Burns, 1984) (Experiment 1)  

<table><tr><td>Subject number</td><td>Survival time (min)</td><td>Survival proportion</td><td>Standard error</td></tr><tr><td>1</td><td>30</td><td>0.952</td><td>0.045</td></tr><tr><td>2</td><td>50</td><td>0.905</td><td>0.062</td></tr><tr><td>3</td><td>50*</td><td></td><td></td></tr><tr><td>4</td><td>51</td><td>0.855</td><td>0.077</td></tr><tr><td>5</td><td>66*</td><td></td><td></td></tr><tr><td>6</td><td>82</td><td>0.801</td><td>0.089</td></tr><tr><td>7</td><td>92</td><td>0.748</td><td>0.097</td></tr><tr><td>8</td><td>120*</td><td></td><td></td></tr><tr><td>9</td><td>120*</td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table>

\* censored observation

Table 13.2 shows the life table for these data, giving the survival proportion at each uncensored survival time. Because only five subjects vomited there are only five estimated survival probabilities. Note that the survival probability remains 1 up to the time of the first event (30 minutes), and we cannot estimate survival beyond the last observation of 120 minutes. It is usual to present survival probabilities as a graph, as shown in Figure 13.3.

From the survival curve we can calculate the survival time corresponding to any proportion of the sample. For example, the time when the curve crosses the probability of 0.5 corresponds to the estimated median survival time. In this example, however, we cannot estimate the median as the curve does not fall to 0.5.

The survival curve is drawn as a 'step function': the proportion surviving remains unchanged between events, even if there are some intermediate censored observations. It is incorrect to join the calculated points by sloping lines. The times of censored observations are sometimes indicated by ticks on the survival curve, which shows at a glance the survival times of the surviving subjects.

We can calculate a confidence interval for the survival proportion. If there are no censored values we can use standard methods for deriving a confidence interval for a proportion (see section 10.2), but in general we

![](../images/13_Analysis_of_survival_times/img3.jpg)  
Figure 13.3 Survival curve corresponding to the motion sickness data in Table 13.2.

will need to make a modification to allow for the censoring. Section 13.4.1 gives a method for calculating the standard error; Table 13.2 shows standard errors for the motion sickness data. Some computer programs will provide standard errors, although these may have been produced by a more complex method than is given in section 13.4.1.

From the standard error we can calculate a confidence interval, assuming a Normal sampling distribution for the survival proportion in large samples. For example, the proportion surviving 90 minutes without vomiting was 0.801 with a standard error of 0.089. The  $95\%$  confidence interval is thus

$$
0.801 - 1.96\times 0.089\qquad \mathrm{to}\qquad 0.801 + 1.96\times 0.089
$$

or 0.63 to 0.98. As usual, with a small sample the confidence interval is wide. Note that when the proportion surviving is near 1 or 0 the calculated confidence interval may include impossible values above 1 or less than 0. If this happens we can take 1 as the upper limit or 0 as the lower limit. However, this occurrence indicates that the Normal approximation is not really appropriate and some other method may be preferable. Better methods exist for calculating standard errors, but they are also more complicated.

The data used in this example are from an experiment of fixed duration, so that most of the censored observations are at the same time. In observational studies, such as the study of liver transplant patients, it is customary to stop the period of observation on a specific day. Because subjects enter on different days (as shown in Figure 13.1) survivors have widely varying periods of follow up and thus survival times censored at

different points. All of the methods described in this chapter apply equally in both circumstances.


### 13.2.2 Life table analysis

Although the Kaplan- Meier survival curve is often called a life table, the term life table is also frequently used to describe data where the results are grouped into time intervals, often of equal length. This method is often described as actuarial. The method of calculation is similar in principle to the Kaplan- Meier method, but differences arise because of the lack of precision of recording of times. Details are given by Armitage and Berry (1987, p. 424).

Life tables are also used in demography to estimate the survival curve for a cohort of people from birth using current age and sex specific mortality rates. These cohort life tables are calculated somewhat differently (Armitage and Berry, 1987, p. 422; Bland, 1987, p. 302).


## 13.3 COMPARING SURVIVAL CURVES IN TWO GROUPS

For studies in which the aim is to compare the survival experience of two groups of subjects we can calculate the Kaplan- Meier curves separately for each group. The standard error of the difference in the proportions surviving at any time can be calculated, and a confidence interval obtained. The weakness of this approach is that it does not provide a comparison of the total survival experience of the two groups, but rather gives a comparison at some arbitrary time point(s). The choice of the time point to make a comparison should really be made in advance of the analysis, not after inspection of the survival curves: the comparison of proportions thus chosen is invalid. The use of multiple time points creates further problems of interpretation, especially if the curves are significantly different at some points but not at others. Comparing survival probabilities can be useful as an adjunct to other analyses, however, and is described later. First I shall consider methods for comparing the complete survival curves for two or more independent sets of observations.

The most common method of comparing independent groups of survival times is the logrank test. As its name indicates, the logrank test is a hypothesis test - the null hypothesis is that the groups come from the same population. There is no similarly widely used method of estimation, but some possibilities are considered later in this chapter.


### 13.3.1 The logrank test

The logrank test is a non- parametric method for testing the null hypothesis that the groups being compared are samples from the same population as

regards survival experience. The method is based on a simple idea which avoids the arbitrary decisions referred to above.

Table 13.3 shows the data (and the life table) from a second motion sickness experiment using different subjects in which both the frequency and acceleration were doubled in comparison with the first experiment. The logrank test can be used to compare the data from the two experiments.

The principle of the logrank test is to divide the survival time scale into intervals according to the distinct observed survival times, ignoring censored survival times. There were five definite events (vomiting) in the first experiment at 30, 50, 51, 82 and 92 minutes. In the second experiment there were 14 events, one each at 5, 13, 24, 63, 65, 79, 102 and 115 minutes, and 2 each at 11, 69 and 82 minutes. For the two experiments combined there were 15 distinct recorded survival times. Figure 13.4 shows the time scale divided into 15 time intervals, each of which includes the

Table 13.3 Life table for motion sickness data from an experiment with vertical movement at a frequency of  $0.333\mathrm{Hz}$  and acceleration  $0.222\mathrm{G}$  (Burns, 1984) (Experiment 2)  

<table><tr><td>Subject number</td><td>Survival time (min)</td><td>Survival proportion</td><td>Standard error</td></tr><tr><td>1</td><td>5</td><td>0.964</td><td>0.034</td></tr><tr><td>2</td><td>6*</td><td></td><td></td></tr><tr><td>3</td><td>11</td><td></td><td></td></tr><tr><td>4</td><td>11</td><td>0.890</td><td>0.058</td></tr><tr><td>5</td><td>13</td><td>0.853</td><td>0.067</td></tr><tr><td>6</td><td>24</td><td>0.816</td><td>0.073</td></tr><tr><td>7</td><td>63</td><td>0.779</td><td>0.078</td></tr><tr><td>8</td><td>65</td><td>0.742</td><td>0.082</td></tr><tr><td>9</td><td>69</td><td></td><td></td></tr><tr><td>10</td><td>69</td><td>0.668</td><td>0.086</td></tr><tr><td>11</td><td>79</td><td>0.631</td><td>0.090</td></tr><tr><td>12</td><td>82</td><td></td><td></td></tr><tr><td>13</td><td>82</td><td>0.556</td><td>0.090</td></tr><tr><td>14</td><td>102</td><td>0.519</td><td>0.093</td></tr><tr><td>15</td><td>115</td><td>0.482</td><td>0.093</td></tr><tr><td>16</td><td>120*</td><td></td><td></td></tr><tr><td>17</td><td>120*</td><td></td><td></td></tr><tr><td>.</td><td>.</td><td></td><td></td></tr><tr><td>28</td><td>120*</td><td></td><td></td></tr></table>

\* censored observation

![](../images/13_Analysis_of_survival_times/img4.jpg)  
Figure 13.4 Times of events  $(\bullet)$  and censoring  $(\circ)$  for two different motion sickness experiments, showing the time intervals used for calculating the logrank test. Experiment 1 was described in Table 13.2 and Experiment 2 in Table 13.3.

time of an event at the upper limit. The first interval is from 0 to 5 minutes, the second is from 6 to 11 minutes, and so on. For each time period we compare the observed data with what we would expect if the null hypothesis that there is no real difference between the experiments is true.

The logrank test to compare  $k$  groups produces for each group an observed  $(O)$  and an expected  $(E)$  number of events. These are compared in a familiar way by calculating the sum of  $(O - E)^{2} / E$ , called  $X^{2}$ , comparing the result to a  $\chi^{2}$  distribution with  $k - 1$  degrees of freedom.

The motion sickness data give

$$
O_{1} = 5, E_{1} = 8.8607, O_{2} = 14 \text{and} E_{2} = 10.1393
$$

so that the logrank statistic is

$$
X^{2} = \frac{(5 - 8.8607)^{2}}{8.8607} + \frac{(14 - 10.1393)^{2}}{10.1393} = 3.152.
$$

Comparing this value to a  $\chi^{2}$  distribution with one degree of freedom gives  $\mathbf{P} = 0.08$ , so there is some evidence to suggest a difference between the results of the two experiments. Figure 13.5 shows that the survival without vomiting was better in experiment 1.

Note that the sum of the observed and expected numbers is the same: it is important to check this when performing the calculation by hand. Note too that the quantity  $E$  is better thought of as a measure of the extent of exposure of the subjects rather than the expected number of events. The reason is that under some unusual circumstances  $E$  can be larger than the sample size.

The logrank test can be used to compare several groups of subjects.

![](../images/13_Analysis_of_survival_times/img5.jpg)  
Figure 13.5 Survival curves for data shown in Table 13.2 and Table 13.3.

Often, however, the categories defining those groups will have a natural ordering, and we should examine the more specific possibility of a trend in survival across the groups. We might, for example, wish to compare survival in several age groups, or in relation to stage of disease, or in relation to amount of exposure of some suspected environmental hazard (such as smoking). The method is a simple extension of the standard logrank test.

![](../images/13_Analysis_of_survival_times/img6.jpg)  
Figure 13.6 Kaplan-Meier curves for patients with breast cancer with none  $(n = 102)$ , 1-3  $(n = 58)$ , or more than 3  $(n = 35)$  positive nodes (data from Barnes et al., 1988).

Figure 13.6 shows survival curves for three groups of women operated on for breast cancer, classified by the number of positive nodes found. An ordinary logrank test gives  $X^{2} = 5.59$  on 2 degrees of freedom  $(\mathbf{P} = 0.06)$ . Because the groups are ordered, however, the trend test should be used, which gives  $X_{t r e n d}^{2} = 5.26$  on 1 degree of freedom  $(\mathbf{P} = 0.02)$ . There is thus a significant (negative) association between survival and number of positive nodes.

The logrank test can also be extended to allow an adjustment to be made for other variables. For example, in a randomized trial to compare survival in groups of breast cancer patients given different types of surgery we may wish to allow for the stage of breast cancer in the analysis, or for some other prognostic variable. In this stratified analysis, the subjects are divided into subgroups according to the prognostic variable (stage of cancer) and the values of  $O$  and  $E$  calculated for each treatment group within each stratum (subgroup). For each treatment group the values of  $O$  and  $E$  from each stratum are added up and then these sums are compared using the usual logrank formula to get  $X^{2}$ . If, by chance, one treatment group includes more subjects with a poor prognosis this stratified analysis will adjust for the imbalance. The same method can be used to combine data from different centres in a multicentre study. There is further discussion of the need to make adjusted comparisons in Chapter 15. The method for performing the logrank test is shown in detail in section 13.4, which also gives a rather more accurate formula for the logrank statistic  $X^{2}$ . The test for trend and stratified analysis are also described. Several computer programs can perform the logrank analysis, which is tedious by hand except for very small data sets, but they do not all give enough information in their output of results (see section 13.8). Peto et al. (1977) give detailed discussion of all the methods discussed in this section, and much else besides - their paper is essential reading.


### 13.3.2 The hazard ratio

The logrank test is very widely used for comparing survival in two or more groups, but it is solely a hypothesis test. It provides no direct information of how different the groups were.

One way to measure the relative survival in two groups is to compare the observed number of events with the expected numbers. The ratio  $O_{1} / E_{1}$  gives the observed event rate in the first group as a proportion of that expected if the null hypothesis were true, and so the ratio

$$
R = \frac{O_{1} / E_{1}}{O_{2} / E_{2}}
$$

gives an estimate of the relative event rates in the two groups. This ratio is also called the hazard ratio. For the motion sickness data we have

$$
R = \frac{5 / 8.8607}{14 / 10.1393} = 0.4087
$$

so that the estimated relative risk or hazard of vomiting under the conditions of experiment 1 is 0.41  $(41\%)$  of that for experiment 2.

We can calculate an approximate confidence interval for  $R$  , as described in section 13.4.5. In this case the  $95\%$  confidence interval is from 0.18 to 1.08, and thus includes the value of 1 corresponding to equal hazards. As we should expect from this small sample, the confidence interval is very wide. Sample size and power are discussed in section 13.7.

The calculation of the relative hazard in the two groups is based on the complete period studied. It is not necessarily true that the relative hazard stays much the same in the two groups throughout that period. Indeed it is quite likely that it will vary, in which case the hazard ratio will not apply throughout the period studied. The plot of survival curves will give a visual impression of the consistency of the effect and is an essential component of the analysis of survival data. With large samples we can calculate the hazards in each group, and thus the hazard ratio, for each of several time periods, and examine the consistency of the hazard ratio over time.


### 13.3.3 Comparison of survival probabilities

Just as we can obtain a confidence interval for a survival probability calculated from a single group of individuals, so we can calculate a confidence interval for the difference between the survival probabilities calculated from two groups of individuals. The method for calculating such a confidence interval is given in section 13.4.6.

For example, we can calculate the confidence interval for the difference between the estimated probabilities of surviving 60 minutes without being sick for the two experiments already described. The two survival probabilities, as shown in Tables 13.2 and 13.3, are 0.855 and 0.816. The difference is  $0.855 - 0.816 = 0.039$  , and the  $95\%$  confidence interval is from  $- 0.17$  to 0.25.

The main disadvantage of this method is that the confidence interval applies only to one time point. To be valid, that time point must be chosen in advance of seeing the data - it is wrong to choose the time from an inspection of the survival curves. It is possible to calculate confidence intervals for several (or even all) times, but there is no easy way to interpret the results. Unless there is a prior reason for comparing survival proportions at a particular time point it is probably better to use the hazard ratio to derive an estimate of the difference in survival between two groups. In any case, the hazard ratio is a more natural way of comparing survival. Another option is to calculate the ratio of the median survival times; this method is described in section 13.4.7.


## 13.4 MATHEMATICAL CALCULATIONS AND WORKED EXAMPLE

(This section can be omitted without loss of continuity.)

Most statistical computer programs do not include methods for analysing survival times. Further, those that do cannot perform all of the calculations described in sections 13.2 and 13.3, especially those needed to produce confidence intervals. The methods are not mathematically complex, but they can be somewhat fiddly.


### 13.4.1 Survival curve (Kaplan-Meier)

The principle behind the calculation of survival probabilities was outlined in section 13.2. The proportion surviving a given length of time, say 100 days, is calculated by multiplying the probabilities of surviving each day up to that time. We need only consider days on which there is an event or 'failure' (e.g. death). If there is a death at 100 days, then we estimate the proportion surviving 100 days as the proportion surviving 99 days multiplied by the proportion of those surviving 99 days who also survive 100 days. If  $p_{k}$  is the probability of surviving  $k$  days,  $r_{k}$  is the number of subjects still at risk (i.e. still being followed up) immediately before the  $k$ th day, and  $f_{k}$  is the number of observed failures on day  $k$ , then we have

$$
p_{k} = p_{k - 1} \times \frac{r_{k} - f_{k}}{r_{k}}.
$$

This is a mathematical representation of the statement in the previous sentence.

For the data in Table 13.2 the time unit is minutes, and a 'failure' was vomiting. The proportion surviving without vomiting is 1 up to 29 minutes. We therefore have  $p_{29} = 1$ , and  $r_{30} = 21$  because all subjects are still at risk at 30 minutes. There was one failure at 30 minutes, so  $f_{30} = 1$  and we can calculate the proportion surviving 30 minutes as

$$
p_{30} = p_{29} \times \frac{(21 - 1)}{21} = 0.952
$$

as shown in Table 13.2. The estimated proportion surviving stays the same until the next failure time, which is 50 minutes. We assume that subject 3 who was censored at the same minute was still at risk at the time when subject 2 'failed', so we have

$$
p_{50} = p_{30} \times \frac{(20 - 1)}{20} = 0.905
$$

because there were only 20 subjects still at risk at 50 minutes. One subject withdrew at 50 minutes so their time was censored, and the number at risk

Table 13.4 Calculation of survival probabilities (Kaplan-Meier survival curve) for data in Table 13.2  

<table><tr><td>Subject number (k)</td><td>Survival time (min)</td><td>Number at risk (rk)</td><td>Observed failures (fk)</td><td>rk - fk/rk</td><td>Survival proportion (pk)</td></tr><tr><td>1</td><td>30</td><td>21</td><td>1</td><td>0.9524</td><td>0.9524</td></tr><tr><td>2</td><td>50</td><td>20</td><td>1</td><td>0.9500</td><td>0.9048</td></tr><tr><td>3</td><td>50*</td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td>51</td><td>18</td><td>1</td><td>0.9444</td><td>0.8545</td></tr><tr><td>5</td><td>66*</td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>82</td><td>16</td><td>1</td><td>0.9375</td><td>0.8011</td></tr><tr><td>7</td><td>92</td><td>15</td><td>1</td><td>0.9333</td><td>0.7476</td></tr><tr><td>8</td><td>120*</td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td>120*</td><td></td><td></td><td></td><td></td></tr><tr><td>.</td><td>.</td><td></td><td></td><td></td><td></td></tr><tr><td>.</td><td>.</td><td></td><td></td><td></td><td></td></tr><tr><td>21</td><td>120*</td><td></td><td></td><td></td><td></td></tr></table>

\* censored observation

at 51 minutes was thus only 18. The calculations for the complete set of data are shown in Table 13.4. The column of interest, the survival proportion, is simply the product of all the entries from the top of the table in the previous column. Note that the only effect of the censored observations is to alter the number at risk at the next uncensored survival time.

The standard error of the survival proportion can be calculated in various ways, although the different formulae give very similar results. A simple formula is

$$
S E(p_{k}) = p_{k}\sqrt{(1 - p_{k}) / r_{k}}
$$

where  $p_{k}$  is the estimated proportion surviving at time  $k$ . The standard errors in Tables 13.2 and 13.3 were calculated using this formula. On the assumption that  $p_{k}$  will have an approximately Normal sampling distribution we can calculate a  $95\%$  confidence interval for  $p_{k}$  as

$$
p_{k} - 1.96SE(p_{k}) \qquad \text{to} \qquad p_{k} + 1.96SE(p_{k}).
$$

This is not a good approximation for small sample sizes or for very large or small probabilities, say outside the range 0.2 to 0.8, under which circumstances the confidence interval can go outside the range 0 to 1. While the confidence interval can be curtailed at the limit (e.g. change the range

'0.75 to 1.10' to '0.75 to 1.0') this is an indication of an inadequate amount of data. There are many alternative formulae for the standard error of an estimated survival probability, the best known being due to Greenwood:

$$
S E(p_{k}) = p_{k}\sqrt{\sum_{j = 1}^{k}\left[\frac{f_{j}}{r_{j}(r_{j} - f_{j})}\right]}.
$$

Computer programs are likely to use a more accurate formulae than the one used in the example. Tables 13.2 and 13.3 show how the standard errors for the motion sickness data increase as the number still at risk falls, as we would expect in general.


### 13.4.2 The logrank test

The logrank test of the null hypothesis of the same survival experience in two or more groups of subjects involves calculating the observed and expected numbers of failures in separate time intervals, and summing these. The method is illustrated using the two groups of observations shown in Table 13.2 and 13.3.

As shown in Figure 13.4, the time span of the study is divided into time intervals ending with one or more failures, although this is equivalent to considering only the minutes of failures, as for the calculation of survival probabilities. For each minute with a failure we calculate the numbers at risk in each group  $(r_{1}$  and  $r_{2}$  ) and the numbers of observed failures  $(f_{1}$  and  $f_{2})$  . From these we calculate the expected number of failures assuming the null hypothesis is true. At each time we have a  $2\times 2$  table as follows:

<table><tr><td></td><td>Group 1</td><td>Group 2</td><td>Total</td></tr><tr><td>Failures</td><td>f1</td><td>f2</td><td>f</td></tr><tr><td>Not failures</td><td>r1 - f1</td><td>r2 - f2</td><td>r - f</td></tr><tr><td>Total</td><td>r1</td><td>r2</td><td>r</td></tr></table>

We calculate expected numbers of failures as in Chapter 10, so that  $e_{1} = r_{1}f / r$  and  $e_{2} = r_{2}f / r$  . We then sum the observed and expected values for the whole table to get  $O_{1} = \Sigma f_{1}$  ,  $E_{1} = \Sigma e_{1}$  , etc. Note that  $O_{1} + O_{2} = E_{1} + E_{2}$  , an equivalence that should be verified for hand calculations. The simplest way to calculate the logrank test statistic is by

$$
X^{2} = \frac{(O_{1} - E_{1})^{2}}{E_{1}} +\frac{(O_{2} - E_{2})^{2}}{E_{2}}.
$$

However, a slightly better answer can be obtained by calculating the variance of  $f_{1} - e_{1}$  at each time as

$$
v = \frac{r_{1}r_{2}f(r - f)}{r^{2}(r - 1)}
$$

and summing these values overall to get  $V = \Sigma v$ . The alternative form of the test statistic is given by

$$
X^{2} = \frac{(O_{1} - E_{1})^{2}}{V}.
$$

In practice the two methods usually give similar answers.

The calculations for the motion sickness data are shown in Table 13.5. There were two failures at 11 and 69 minutes and three at 82 minutes, so we will not get the same answer using the two versions of the logrank test. The first method gives

$$
X^{2} = \frac{(-3.8607)^{2}}{8.8607} +\frac{(3.8607)^{2}}{10.1393} = 3.152
$$

Table 13.5 Calculating the logrank test statistic for the motion sickness data. The subscripts refer to Experiments 1 and 2  

<table><tr><td>Time (mins)</td><td>r1</td><td>r2</td><td>r</td><td>f1</td><td>f2</td><td>f</td><td>e1 = r1f/r</td><td>f1 - e1</td><td>v = r1r2f(r - f)/r2(r - 1)</td></tr><tr><td>5</td><td>21</td><td>28</td><td>49</td><td>0</td><td>1</td><td>1</td><td>0.4286</td><td>-0.4286</td><td>0.2449</td></tr><tr><td>6*</td><td>21</td><td>27</td><td>48</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td>21</td><td>26</td><td>47</td><td>0</td><td>2</td><td>2</td><td>0.8936</td><td>-0.8936</td><td>0.4836</td></tr><tr><td>13</td><td>21</td><td>24</td><td>45</td><td>0</td><td>1</td><td>1</td><td>0.4667</td><td>-0.4667</td><td>0.2489</td></tr><tr><td>24</td><td>21</td><td>23</td><td>44</td><td>0</td><td>1</td><td>1</td><td>0.4773</td><td>-0.4773</td><td>0.2495</td></tr><tr><td>30</td><td>21</td><td>22</td><td>43</td><td>1</td><td>0</td><td>1</td><td>0.4884</td><td>0.5116</td><td>0.2499</td></tr><tr><td>50</td><td>20</td><td>22</td><td>42</td><td>1</td><td>0</td><td>1</td><td>0.4762</td><td>0.5238</td><td>0.2494</td></tr><tr><td>50*</td><td>19</td><td>22</td><td>41</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>51</td><td>18</td><td>22</td><td>40</td><td>1</td><td>0</td><td>1</td><td>0.4500</td><td>0.5500</td><td>0.2475</td></tr><tr><td>63</td><td>17</td><td>22</td><td>39</td><td>0</td><td>1</td><td>1</td><td>0.4359</td><td>-0.4359</td><td>0.2459</td></tr><tr><td>65</td><td>17</td><td>21</td><td>38</td><td>0</td><td>1</td><td>1</td><td>0.4474</td><td>-0.4474</td><td>0.2472</td></tr><tr><td>66*</td><td>16</td><td>21</td><td>37</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>69</td><td>16</td><td>20</td><td>36</td><td>0</td><td>2</td><td>2</td><td>0.8889</td><td>-0.8889</td><td>0.4797</td></tr><tr><td>79</td><td>16</td><td>18</td><td>34</td><td>0</td><td>1</td><td>1</td><td>0.4706</td><td>-0.4706</td><td>0.2491</td></tr><tr><td>82</td><td>16</td><td>17</td><td>33</td><td>1</td><td>2</td><td>3</td><td>1.4545</td><td>-0.4545</td><td>0.7025</td></tr><tr><td>92</td><td>15</td><td>15</td><td>30</td><td>1</td><td>0</td><td>1</td><td>0.5000</td><td>0.5000</td><td>0.2500</td></tr><tr><td>102</td><td>14</td><td>15</td><td>29</td><td>0</td><td>1</td><td>1</td><td>0.4828</td><td>-0.4828</td><td>0.2497</td></tr><tr><td>115</td><td>14</td><td>14</td><td>28</td><td>0</td><td>1</td><td>1</td><td>0.5000</td><td>-0.5000</td><td>0.2500</td></tr><tr><td>Total</td><td></td><td></td><td></td><td>5</td><td>14</td><td>19</td><td>8.8607</td><td>-3.8607</td><td>4.6478</td></tr><tr><td></td><td></td><td></td><td></td><td>O1</td><td>O2</td><td></td><td>E1</td><td>O1 - E1</td><td>V</td></tr></table>

NB:  $E_{2} = O_{1} + O_{2} - E_{1} = 10.1393$

while the second, more precise, method gives

$$
X^{2} = \frac{(-3.8607)^{2}}{4.6478} = 3.207.
$$

There is clearly a negligible difference here, and in general the first formula for the statistic  $X^{2}$  will be satisfactory. It has the advantage of not requiring the calculation of the rather complicated variances.

Under the null hypothesis the statistic  $X^{2}$  has a  $x^{2}$  distribution with  $m - 1$  degrees of freedom when there are  $m$  groups of observations. Thus for the example we should compare the calculated value of  $X^{2}$  with a  $x^{2}$  distribution with 1 degree of freedom, which gives  $P = 0.07$

The logrank test can be carried out with more than two sets of data. The statistic  $X^{2}$  is calculated using an extension of the first equation above with a term for each group. If we have  $m$  groups we have

$$
X^{2} = \sum_{i = 1}^{m}\frac{(O_{i} - E_{i})^{2}}{E_{i}}.
$$

The value of  $X^{2}$  is compared with a  $x^{2}$  distribution with  $m - 1$  degrees of freedom. If there is a natural ordering of the groups, however, then a test for trend should be performed, as described below.


### 13.4.3 The logrank test for trend

With three or more ordered groups, a more appropriate test is to consider the possibility that there is a trend in survival across the groups. We may, for example, wish to compare age groups, or patients with different stages of cancer. This test is also appropriate for studying the possible effect of continuous variables which have been separated into three or more groups. The analysis is similar in principle to the Chi squared test for trend for a  $2\times k$  frequency table, described in section 10.8.2.

Using the method given in the previous section, we can obtain  $O_{g}$  and  $E_{g}$  for each group where  $g$  denotes the group's number  $(g = 1,2,\ldots ,m)$  If we give a code  $h_{g}$  to each group (not necessarily equally spaced), then we can calculate for each group

$$
A_{g} = h_{g}(O_{g} - E_{g});\qquad B_{g} = h_{g}E_{g};\qquad C_{g} = h_{g}^{2}E_{g}.
$$

The test statistic for trend is obtained as

$$
X_{t r e n d}^{2} = \left(\sum A_{g}\right)^{2} / V_{T}
$$

where

$$
V_{T} = \sum C_{g} - \left(\sum B_{g}\right)^{2} / \sum E_{g}.
$$

The test statistic  $X_{t r e n d}^{2}$  is compared with the  $x^{2}$  distribution with one degree of freedom, however many groups are being analysed. Note that the statistic  $X_{t r e n d}^{2}$  must lie between zero and the usual logrank statistic  $X^{2}$  which is used to evaluate general heterogeneity among the groups. Again the method is purely a hypothesis test.

An example is given by the survival data from 195 women with breast cancer shown in Figure 13.6. Women were divided into three groups according to whether they had no positive nodes, a few (1- 3) or many (more than 3). The values of  $o$  and  $E$  for each group were as follows:

<table><tr><td>Positive nodes</td><td>Number of women</td><td>Number of deaths (Og)</td><td>Expected (Eg)</td><td>Og - Eg</td></tr><tr><td>none</td><td>102</td><td>38</td><td>46.41</td><td>-8.41</td></tr><tr><td>few (1-3)</td><td>58</td><td>26</td><td>25.21</td><td>0.79</td></tr><tr><td>many (&amp;gt; 3)</td><td>35</td><td>22</td><td>14.38</td><td>7.62</td></tr></table>

The usual logrank test on these data yields  $X^{2} = 5.59$  on 2 degrees of freedom  $(\mathbf{P} = \mathbf{0.06})$  . However, the groups are ordered so the logrank test for trend should be used. If we give the groups codes of  $- 1, 0$  and  $1$ , we get the following:

<table><tr><td>Positive nodes</td><td>Ag</td><td>Bg</td><td>Cg</td></tr><tr><td>none</td><td>8.41</td><td>-46.41</td><td>46.41</td></tr><tr><td>few</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>many</td><td>7.62</td><td>14.38</td><td>14.38</td></tr><tr><td>Total</td><td>16.03</td><td>-32.03</td><td>60.77</td></tr></table>

(Note how the above choice of codes simplifies the arithmetic.)

From these values we can calculate  $V_{T} = 60.77 - (- 32.03)^{2} / 86 = 48.84$  and  $X_{t r e n d}^{2} = 5.26$  . Thus almost all of the variation among the groups can be attributed to a trend; the statistic  $X_{t r e n d}^{2}$  is compared with the Chi squared distribution with one degree of freedom, giving  $\mathbf{P} = 0.02$


### 13.4.4 Stratified logrank test

We can combine data for subsets of subjects to get a more sensitive comparison of the groups of main interest. For example, if we are interested in comparing two groups given different treatments we may wish to stratify by age or some other prognostic variable, especially if the

numbers of high risk subjects differ between the groups. The effect of stratification here is much the same as adjusting for other variables in a multiple regression analysis (see section 12.4). The same method can be used to combine data from independent trials of the same treatments. In either case the stratified analysis will be more reliable than an analysis simply pooling all the data.

The stratified logrank test is very simple. If we have two groups of subjects, then for each subgroup (stratum) of interest we calculate  $O_{1}, E_{1}, O_{2}$  and  $E_{2}$ . These are then summed over all strata and the logrank statistic calculated as

$$
X^{2} = \frac{(\Sigma O_{1} - \Sigma E_{1})^{2}}{\Sigma E_{1}} +\frac{(\Sigma O_{2} - \Sigma E_{2})^{2}}{\Sigma E_{2}}.
$$

If the null hypothesis is true the statistic  $X^{2}$  has a  $\chi^{2}$  distribution with  $m - 1$  degrees of freedom, where there are  $m$  groups.


### 13.4.5 The hazard ratio

As noted in section 13.3.2, the relative survival experience of two groups can be expressed as

$$
R = \frac{O_{1} / E_{1}}{O_{2} / E_{2}}
$$

which is termed the hazard ratio. We can calculate an approximate confidence interval for  $\log_{e}R$  and so obtain a confidence interval for  $R$  (Simon, 1986). We use the variance derived from the second formula given in section 13.4.2 and calculate

$$
K = \frac{O_{1} - E_{1}}{V}
$$

which is an estimate of the log hazard ratio (and will be similar to the log of the observed hazard ratio). The standard error of this estimate is approximately  $1 / \sqrt{V}$ , so a  $95\%$  confidence interval for  $\log_{e}R$  is given by  $K - 1.96 / \sqrt{V}$  to  $K + 1.96 / \sqrt{V}$ . A  $95\%$  confidence interval for  $R$  is thus obtained easily by antilogging these values.

For the motion sickness data we had

$O_{1} = 5, E_{1} = 8.8607, O_{2} = 14, E_{2} = 10.1393$  and  $V = 4.6478$

so we have

$$
\begin{array}{l}{{R=\frac{5/8.8607}{14/10.1393}=0.41;}}\\ {{K=\frac{5-8.8607}{4.6478}=-0.8307;}}\end{array}
$$

$$
\begin{array}{l}{{K-1.96/\sqrt{4.6478}=-1.7398;}}\\ {{K+1.96/\sqrt{4.6478}=0.0785.}}\end{array}
$$

The  $95\%$  confidence interval for the hazard ratio  $R$  is thus from  $e^{- 1.7398}$  to  $e^{0.0785}$ , that is from 0.18 to 1.08.


### 13.4.6 Comparison of survival probabilities

Using the method given in section 13.4.1 we can estimate the survival probability and its standard error at some time point separately for two independent groups of individuals, say  $p_{1}$ ,  $SE(p_{1})$ ,  $p_{2}$  and  $SE(p_{2})$ . The standard error of  $p_{1} - p_{2}$  is, as usual, given by

$$
SE(p_{1} - p_{2}) = \sqrt{SE(p_{1})^{2} + SE(p_{2})^{2}}.
$$

A  $95\%$  confidence interval for the difference in survival proportions is thus given by

$$
(p_{1} - p_{2}) - 1.96SE(p_{1} - p_{2}) \qquad \text{to} \qquad (p_{1} - p_{2}) + 1.96SE(p_{1} - p_{2}).
$$

For example, we can compare the survival proportion at 60 minutes in the two motion sickness experiments. We have

$$
p_{1} = 0.855, SE(p_{1}) = 0.078, p_{2} = 0.816 \text{and} SE(p_{2}) = 0.074
$$

SO

$$
p_{1} - p_{2} = 0.855 - 0.816 = 0.039
$$

and

$$
SE(p_{1} - p_{2}) = \sqrt{0.078^{2} + 0.074^{2}} = 0.1075,
$$

and thus the  $95\%$  confidence interval for  $p_{1} - p_{2}$  at 60 minutes is

$$
0.039 - 1.96 \times 0.1075 \qquad \text{to} \qquad 0.039 + 1.96 \times 0.1075,
$$

that is, from  $- 0.17$  to 0.25. There is little apparent difference between the two sets of data at 60 minutes, although the logrank test showed some evidence of a difference overall.


### 13.4.7 Comparing median survival times

As I observed earlier, it is easy to derive an estimate of the median survival time from the Kaplan- Meier survival curve. Simon (1986) gives a method for calculating a confidence interval for the median survival time.

Simon also gives the following simple method for calculating an approximate confidence interval for the ratio of two independent estimated median survival times.

If  $m_{1}$  and  $m_{2}$  are the median survival times of two independent samples.

the approximate  $95\%$  confidence interval is

$$
\frac{m_{1}}{m_{2}} -\mathbf{e}^{-1.96s}\qquad \mathrm{to}\qquad \frac{m_{1}}{m_{2}} +\mathbf{e}^{-1.96s}
$$

where

$$
s = \sqrt{\frac{1}{O_{1}} + \frac{1}{O_{2}}}.
$$

The method assumes that the failure times have an exponential distribution; a quick check of this assumption is to see if each calculated median is similar to that expected if the assumption is true, namely the sum of the survival times (whether censored or not) divided by  $\sqrt{2}$  times the number of events. For example, the observed median for the data in Table 13.3 is 115 minutes whereas the expected value if the distribution was exponential is  $2356 / (14\sqrt{2}) = 119$  minutes. We cannot compare the medians for the two motion sickness experiments, however, as we have no estimated median for the data in Table 13.2.


### 13.4.8 Comment

The most important part of survival analysis is to produce a plot of the survival curves for each group of interest, but assessment of possible differences should be based on statistical analysis. The logrank test is the most common form of statistical analysis, but it is a hypothesis test and yields no estimate of relative survival. None of the estimates proposed is without problems, but the hazard ratio is the most appealing as long as the curves suggest that the relative survival rates do not vary greatly over time. This would not be so, for example, for survival curves that crossed. The hazard ratio also gives a link with the more complex regression approach to the analysis of survival data, described in section 13.6, where an important assumption is that the hazard ratio is constant over time.

An assumption of all survival analyses is that there is no information in the times of censored observation. In the motion sickness example, we may question whether those individuals who requested an early stop to the experiments would have been near to being sick. There is a case here for regarding an early stop as a failure rather than as a censored observation.


## 13.5 INCORRECT ANALYSES

Peto et al. (1977) describe several incorrect approaches to the analysis of survival data, some of which are discussed below. Some others relate to clinical trials in general and are discussed in Chapter 15. I also explain why it is invalid to compare the survival of those who do or do not respond to treatment.


### 13.5.1 Summarizing survival

A common error is to summarize survival by the proportion of subjects still alive (or whatever) at some suitable time after the start of the study. For example, in a study of a beta- blocking drug given to men who had suffered a myocardial infarction (MI) (heart attack) we could calculate the proportion who had had another MI within a year of being on the drug. Apart from the arbitrary choice of one year, such an analysis ignores information about exactly how long the subjects survived without another attack and it will give a biased answer if, as is likely, not all subjects were followed up for a year. An even worse approach is to calculate the mean survival time, as this cannot provide a sensible answer when some of the survival times are censored.

The calculation of the median survival time is sensible, but it must be derived from the Kaplan- Meier curve, and not from the raw data unless there are no censored observations. The median survival time can easily be read from the plotted survival curve, being the time corresponding to a survival proportion of 0.5. Unfortunately, the sample median cannot be calculated unless the survival curve drops below 0.5, and even if it does it is an imprecise estimate of the median survival time in the population except in large samples.


### 13.5.2 Survival curves

The survival curve should be drawn as a 'step function' as in Figures 13.3 to 13.6; it is incorrect simply to join the estimated survival probabilities at each time of death with sloping lines.

Mistaken interpretation of survival curves often involves over- interpretation of the right- hand part of the curve. It is common for survival curves to flatten out after a while, as events become less frequent. It is unwise to interpret this flattening as meaningful unless there are many subjects still at risk. In contrast, if the last death occurs after the last censored time, not a rare occurrence, the survival curve will plunge to zero. We should not take this as an indication that nobody will survive beyond that time. When two survival curves are compared there is frequently a larger gap between the curves at the end of the period under study than at the beginning. This should not of itself be taken as an indication that the curves diverge. All of these situations often occur simply because the tail of the curve is very unstable due to small numbers at risk. There are two simple remedies: always show the numbers at risk at regular time intervals (e.g. every month or year, as appropriate) and curtail the survival curve when there are, say. only five subjects still at risk. The comparison of two survival curves should be based upon the methods already described, especially the logrank test using all the data, not upon visual impression.

This is an appropriate place to repeat the earlier warning about not comparing the proportions surviving a certain period when the time point for the comparison is chosen by inspecting the survival curves. The comparison is only valid if the time was chosen in advance of collecting the data.


### 13.5.3 Comparing responders and non-responders

In many clinical studies it is possible to categorize patients according to whether or not there is some observed response to treatment. For example, in cancer drug trials it is usual to see if the tumour has responded (shrunk) following treatment. It is then natural to wish to compare the survival of responders and non- responders. Unfortunately, this analysis is not valid (Oye and Shapiro, 1984) because the groups are defined by a factor not known at the start of treatment. The analysis is biased because the responders must have survived for a certain period in order to achieve a response. Also, the patients who respond may have been more likely to survive longer even if not treated. The fact that responders survive longer does not mean that the treatment is useful. Some cancer journals have specifically banned this type of analysis.

A better approach is to compare the survival of non- responders from the start of treatment with that of responders from the time of response. This analysis too may give misleading results, however (Simon and Makuch, 1984). Expert statistical advice is strongly recommended if this type of analysis is contemplated.


### 13.5.4 Multiple comparisons

As with other simple analyses (such as the  $t$  test and correlation) the logrank test should be used with care when we wish to explore the relation of numerous variables to survival. While it is useful to see which variables seem to be associated with a better prognosis, these variables are likely to be correlated with each other too. Also, one variable in 20 will be significant and thus appear important just by chance. A better approach, therefore, is one that is analogous to multiple regression analysis; such an approach is described in the next section.


## 13.6 MODELLING SURVIVAL - THE COX REGRESSION MODEL

(This section is more complex than the others in the book.)

The logrank test is a non- parametric method for comparing the survival experience of two or more groups. It cannot be used to explore the effects of several variables on survival. The regression method introduced by Cox

(1972) is used widely when it is desired to investigate several variables at the same time. It is also known as proportional hazards regression analysis.

Cox's method is a 'semi- parametric' approach - no particular type of distribution is assumed for the survival times, but a strong assumption is made that the effects of the different variables on survival are constant over time and are additive in a particular scale. The actual method is too complex for detailed discussion in this book; this section is intended to give an introduction to the ideas of the method, which should help when reading the results of such analyses. There are many potential difficulties when performing Cox regression, and I do not recommend that the method is used by non- statisticians.

The hazard function is closely related to the survival curve, representing the risk of dying in a very short time interval after a given time, assuming survival thus far. It can therefore be interpreted as the risk of dying at time  $t$ . Cox's method is equivalent in its capability to multiple regression analysis as described in section 12.4, except that the regression model defines the hazard at a given time. If we have several independent variables of interest, say  $X_{1}$  to  $X_{p}$ , we can express the hazard at time  $t$ ,  $h(t)$ , as

$$
h(t) = h_{0}(t) \times \exp (b_{1}X_{1} + b_{2}X_{2} + \ldots + b_{p}X_{p}).
$$

The quantity  $h_{0}(t)$  in the equation is estimated from the data, and clearly corresponds to the hazard when all the variables are zero (because  $e^{0} = 1$ ). It is called the baseline or underlying hazard function. The regression coefficients,  $b_{1}$  to  $b_{p}$ , also have to be estimated. If we have just one variable of interest, such as age, then we have

$$
h(t) = h_{0}(t) \times \exp (b_{age} \times age).
$$

Under this model a proportional change in age, such as a  $50\%$  increase from 40 to 60 years, results in a proportional change in the log of the hazard. In practice the proportional hazards regression model is often found very suitable for modelling survival data, but the assumption of proportional hazards can and should be tested.

The hazard gives the risk of dying at time  $t$ , so we can add all the hazards up to time  $t$  to get the risk of dying between time 0 and time  $t$ . This is called the cumulative hazard,  $H(t)$ . It is defined as

$$
H(t) = H_{0}(t) \times \exp (b_{1}X_{1} + b_{2}X_{2} + \ldots + b_{p}X_{p})
$$

where  $H_{0}(t)$  is the cumulative underlying hazard function. Because of the way  $H(t)$  is calculated it can be shown that the probability of surviving to time  $t$ ,  $S(t)$ , can be estimated by  $\exp [- H(t)]$ . We can thus estimate the survival probability for any individual with specific values of the variables in the model.


### 13.6.1 Interpretation

The Cox model must be fitted using an appropriate computer program. Some allow for stepwise selection of variables. The final model from a Cox regression analysis will yield an equation for the hazard as a function of several covariates. How can we interpret the results?

The selection of variables for inclusion in the model follows exactly the same lines as described in section 12.4. I shall thus assume that we have obtained a model and wish to interpret it, especially in relation to the prognosis of a new patient with certain values of the variables in the model (often called covariates).

Cox regression analysis was performed on the data from a long randomized trial comparing azathioprine and placebo in the treatment of patients with primary biliary cirrhosis (PBC). The chosen model included the six variables shown in Table 13.6, each of which was statistically significant at the  $5\%$  level at least. The model is shown in Table 13.7. An approximate

Table 13.6 Variables included in Cox regression model fitted to data from a clinical trial comparing the effects of azathioprine and placebo on the survival of 216 patients with primary biliary cirrhosis (Christensen et al., 1985). The second column shows the scoring of the variables used in the regression analysis  

<table><tr><td>Variable</td><td>Scoring</td></tr><tr><td>Serum bilirubin</td><td>log10(value in μmol/l)</td></tr><tr><td>Age</td><td>exp[(age in yrs - 20)/10]</td></tr><tr><td>Cirrhosis</td><td>0 = No; 1 = Yes</td></tr><tr><td>Serum albumin</td><td>value in g/l</td></tr><tr><td>Central cholestasis</td><td>0 = No; 1 = Yes</td></tr><tr><td>Therapy</td><td>0 = Azathioprine; 1 = Placebo</td></tr></table>

Table 13.7 Cox regression model fitted to data from PBC trial of azathioprine versus placebo  $(n = 216)$  

<table><tr><td>Variable</td><td>Regression coefficient (b)</td><td>SE(b)</td><td>e^b</td></tr><tr><td>Serum bilirubin</td><td>2.510</td><td>0.316</td><td>12.31</td></tr><tr><td>Age</td><td>0.00690</td><td>0.00162</td><td>1.01</td></tr><tr><td>Cirrhosis</td><td>0.879</td><td>0.216</td><td>2.41</td></tr><tr><td>Serum albumin</td><td>-0.0504</td><td>0.0181</td><td>0.95</td></tr><tr><td>Central cholestasis</td><td>0.679</td><td>0.275</td><td>1.97</td></tr><tr><td>Therapy</td><td>0.520</td><td>0.207</td><td>1.68</td></tr></table>

test of significance for each variable is obtained by dividing the regression estimate by its standard error and comparing the result with the standard Normal distribution.

The first feature to note in such a table is the sign of the regression coefficients. A positive sign means that the hazard is higher, and thus the prognosis worse, for subjects with higher values of that variable. Thus, from Table 13.7 higher serum bilirubin and age are associated with poorer survival, but higher values of serum albumin are beneficial. The three binary (0- 1) variables show better prognosis for subjects without cirrhosis (not necessarily present in PBC) and without central cholestasis, and also for subjects treated with azathioprine rather than placebo.

An individual regression coefficient is interpreted quite easily. The ratio of the estimated hazards for two different values of a covariate  $X$  , say  $x_{1}$  and  $x_{2}$  , with regression coefficient  $^b$  , is given by

$$
\frac{h_{1}(t)}{h_{2}(t)} = \frac{h_{0}(t) \times \exp(b x_{1})}{h_{0}(t) \times \exp(b x_{2})} = \exp (b x_{1} - b x_{2}) = \exp [b(x_{1} - x_{2})].
$$

Note that because of the assumption in the model this result is not dependent upon the choice of time t. Notice too that we do not need to know the value of the baseline hazard function,  $h_{0}(t)$  . In the special case where we have a binary variable coded 0 or 1 the hazard ratio is equal to  $\exp (b)$  (see Table 13.7). Thus the estimated hazard with placebo is  $\exp (0.52) = 1.68$  (or  $168\%$  ) of that with azathioprine. Equivalently, the effect of azathioprine is to reduce the hazard to  $\exp (- 0.52) = 0.59$  (or  $59\%$  ) of that with placebo. The effect on the survival probability, however, cannot be described simply as it depends on the patient's values of the other variables in the model, as described below. For continuous covariates the regression coefficient refers to the increase in log hazard for an increase of 1 in the value of the covariate. Because of the assumption of a linear effect this means that the estimated change in hazard of albumin increasing from 30 to  $31 \mathrm{g} / \mathrm{l}$  is the same as a change from 40 to  $41 \mathrm{g} / \mathrm{l}$  , and is equal to  $\exp (- 0.050) = 0.95$  , i.e. a reduction of  $5\%$  . For serum bilirubin the value of  $\exp (2.51)$  corresponds to the change in hazard for an increase of 1 in the log scale. Thus the estimated hazard increases 12.3 times if bilirubin is higher by a factor of 10. Notice that the estimated hazard ratio  $\exp (b)$  is analogous to that described in section 13.3.2. The difference is that this hazard ratio is adjusted for the effects of the other variables in the model.

As with ordinary multiple linear regression and logistic regression (both discussed in Chapter 12), the combination of regression coefficients and values of variables can be used as a prognostic index. The part of the equation for the hazard function within brackets gives a prognostic index (PI) as

$$
\mathbf{PI} = b_{1}X_{1} + b_{2}X_{2} + \ldots +b_{p}X_{p}.
$$

The hazard and the estimated survival probability at any time depend only upon PI, not upon the values of the individual variables. Because the survival probability at time  $t$  is  $S(t) = \exp [- H(t)]$  we have

$$
S(t) = \exp [-H_{0}(t)\times \exp (\mathrm{PI})].
$$

The cumulative underlying hazard function,  $H_{0}(t)$ , is a step function over time, and should be given in the output of the computer program. We can thus express  $S(t)$  as a step function too. Some programs may instead give the survival function corresponding to  $H_{0}(t)$ , i.e.  $S_{0}(t) = \exp [- H_{0}(t)]$ . The survival function for any set of covariates is given by

$$
S(t) = S_{0}(t)^{\exp (\mathrm{PI})}.
$$

Figure 13.7 shows estimated survival curves for patients given azathioprine and placebo, based on the model shown in Table 13.7 and setting all other variables to their mean values. The relation between survival probability and prognosis can be examined by fixing  $t$  in the last equation, perhaps at a few values of interest. Figure 13.8 shows estimated 2, 5 and 8 year survival probability as a function of PI derived from the PBC trial. For any new patient it is easy to estimate the probability of surviving a given time. Unfortunately, it is difficult to calculate a confidence interval for the estimated survival probability.

![](../images/13_Analysis_of_survival_times/img7.jpg)  
Figure 13.7 Estimated survival curves for patients treated with azathioprine or placebo based on the Cox model in Table 13.7 (from Christensen et al., 1985).

![](../images/13_Analysis_of_survival_times/img8.jpg)  
Figure 13.8 Estimated 2, 5 and 8 year survival probability as a function of the prognostic index (PI) in the trial of azathioprine versus placebo. Note that the therapy given is incorporated in PI (from Christensen et al., 1985).


### 13.6.2 Technical note

With ordinary multiple regression (section 12.4) the assumption of a linear relation between the outcome and predictor variables is easily examined by scatter diagrams. Because of the censoring of some survival times we cannot use the same approach here, nor can we calculate residuals in the usual way. A general discussion of assessing the goodness- of- fit of the Cox model is beyond the scope of this chapter. However, some brief comments can be made regarding the possible transformation of predictor variables (covariates). There are ways to examine the linearity of effect on the hazard function. The transformations of age and bilirubin seen in Table 13.7 were based on such considerations. Where linearity of effect is in doubt it may be preferable to divide the ordered values into three or more equally sized groups. The variable can then be entered into the model as two or more dummy variables or the group codes can be used to test for trend.

Also, if a variable has a highly skewed distribution the extreme values will exert an undue influence on the choice of model. We might therefore wish to take logarithms to reduce the effect of extreme values. The bilirubin data from the PBC trial were shown in Figure 4.10 to have a highly skewed Lognormal distribution. In this study log transformation was indicated for the bilirubin data on both counts.


### 13.6.3 Comment

13.6.3 CommentNon- technical discussion of Cox regression is given by Elashoff (1983) and Tibshirani (1982). A more detailed but fairly non- mathematical explanation is given by Christensen (1987), who also considers the more complicated model in which the values of the covariates may themselves vary over time. Expert statistical advice should be sought for carrying out Cox regression on survival data.


## 13.7 DESIGN OF SURVIVAL STUDIES

When the main outcome of interest is survival time, planning of a study should include some special considerations. It is most important to realize that the power of a test to compare survival in two or more groups is related not to the total sample size but to the number of events of interest such as deaths. When there is a small risk of the event of interest a vast study may be needed. One way to increase the power of a study is therefore to consider taking a more common event as the end- point of the study, such as using either recurrence of the original condition or death rather than death alone. (Many reports of studies of cancer patients give separate analyses relating to both time to recurrence and time to death.) Other ways to increase power are to increase the total sample size and to extend the length of follow- up of each subject. For example, the PBC trial just discussed had a six year period during which patients were recruited to the trial, and a further six years' follow- up. Thus patients were potentially followed for between 6 and 12 years. Even then it was only possible to get adequate numbers by recruiting patients in several countries. Of the 216 patients included in the final analysis only 105 had died, which is not a large number when the power of the study is considered.

Because of the various effects described, it is not simple to calculate the appropriate sample size for survival time studies. Machin and Campbell (1987) give tables and Schoenfeld and Richter (1982) give a nomogram for calculating sample size.

Apart from these considerations the design of studies with survival time as the end- point are subject to the same considerations as other studies. Chapters 5 and 15 discuss design, and Peto et al. (1976) is a valuable paper to read in conjunction with their description of the analysis of such studies (Peto et al., 1977).


## 13.8 PRESENTATION OF RESULTS

13.8 PRESENTATION OF RESULTSStudies of survival require special consideration with respect to the presentation of the results. Graphical display is especially important for survival data. The suggestions below are in addition to those that may

apply more generally, for example for clinical trials, described in other chapters.


### 13.8.1 Numerical presentation

The distribution of the length of follow- up of subjects should be given; the range will probably suffice. It may mislead to quote only the maximum follow- up period. It is also useful to indicate the numbers of failures of each type of interest (e.g. deaths and recurrences of disease), separately for different groups of subjects if this is relevant.

The results of logrank tests should be given as the observed  $(O)$  and expected  $(E)$  numbers of failures as well as the test statistic  $(X^{2})$  and  $\mathbf{P}$  .


### 13.8.2 Graphical display

Graphs of survival curves are enormously valuable. These should be based on the Kaplan- Meier method, or perhaps the life table method for data grouped by time interval. Kaplan- Meier survival curves should be drawn as step functions, as in this chapter. It is helpful to use different line types (e.g., solid, dashed) for different groups of subjects. For small studies it is possible to mark the times of censored observations by ticks on the survival curve. More generally, it is useful to show the numbers still at risk at regular intervals, for example every month or year, as appropriate. These can be shown beneath the time scale or along the top of the graph.

To avoid misinterpretation of the unreliable right- hand part of the survival curve it is advisable to terminate the curves when the number of subjects still at risk is small, say five. This also has the benefit of expanding the left- hand part of the curve which contains the important information.

## EXERCISES

13.1 In view of the comment in section 13.4.8, carry out a logrank test to compare the motion sickness data in Tables 13.2 and 13.3, taking an event (failure) as either vomiting or stopping before 120 minutes. Compare the results with those given in section 13.3.1.

13.2 Exercise 11.1 included survival times of 29 patients with lactic acidosis, together with some possibly prognostic variables.

(a) What problem is there with these data regarding a Kaplan-Meier plot of survival? 
(b) How could logrank tests be used to assess the possible relation between the three variables and survival time? Perform such tests. 
(c) Compare  the  results  of  Cox  regression  analyses  using  these

variables as they are or each divided into three roughly equal groups.

13.3 Exercise 12.3 showed data relating various factors to the occurrence of acute graft- versus- host disease (GvHD) in 37 patients having a bone marrow transplant. Backward stepwise Cox regression analysis using diagnosis, recipient's age and sex, donor's age and sex, whether the donor had been pregnant, MECLR/MLR index and GvHD to predict survival yields the following model:

<table><tr><td>Variable</td><td>Regression coefficient</td><td>Standard error</td></tr><tr><td>GvHD (0 = No, 1 = Yes)</td><td>2.306</td><td>0.5898</td></tr><tr><td>CML (0 = No, 1 = Yes)</td><td>-2.508</td><td>0.8095</td></tr></table>

(a) What is the interpretation of the opposite signs for the regression coefficients?

(b) Calculate the relative risks of dying (hazard ratio) for the following patients relative to non-GvHD non-CML patients:

(i) with GvHD but not CML,

(ii) CML but without GvHD,

(iii) CML and GvHD.

(c) Calculate the  $95\%$  confidence interval for the hazard ratio associated with GvHD

(d) Comment on the reliability of the Cox regression model in view of the sample size (37) and number of deaths (18).
