# 7 Preparing to analyse data

No statistical technique will ever yield 'good' results from data of dubious quality.

Buyse (1984)


## 7.1 INTRODUCTION

Before analysing a set of data it is important to check as far as possible that the data seem correct. Errors can be made when measurements are taken, when the data are originally recorded, when they are transcribed from the original source (such as from hospital notes), or when being typed into a computer. We cannot usually know what is correct, so we restrict our attention to making sure that the recorded values are plausible. This process is called data checking (or data cleaning). We cannot expect to spot all transcription and data entry errors, but we hope to find the major errors. As we will see, it is the large errors that can influence statistical analyses. If the data are being analysed on a computer, then checking should take place after the data have been entered into the computer. For very large surveys or clinical trials cleaning the data may be a lengthy process.

It is also important to screen the data to identify features that may cause difficulties during the analysis. Three specific aspects are considered in this chapter - missing data, outlying values, and the possible need for data transformation. Aspects of checking and screening are similar and in practice they can be carried out at the same time.

The ideas in this chapter are particularly aimed at studies with many variables or subjects or both, but the general principles apply to any study. It is important to examine the data carefully before proceeding to the substantive analysis.


## 7.2 DATA CHECKING

Errors in recorded data are common. For example the recorded values may be wrong because of confusion over the correct units of measurement.

digits may be transposed when data are transcribed, or data may be mistyped when being entered onto a computer. Data checking aims to identify and, if possible, rectify errors in the data. Clearly errors in the original data cannot usually be rectified, but errors introduced at a later stage can be put right if the original record is consulted.

As noted in section 6.6, an important first step is to check that the data have been typed into the computer file correctly. For large files double entry is best, whereby the data are retyped and compared with the first version, preferably using a computer program designed for this purpose. For small data sets the simplest way is for one person to read aloud the data from the computer with another person checking against the original data.

Checking the data is likely to reveal some observations that, while plausible, are distant from the main body of the data. It is also likely to reveal that a number of intended observations are missing. These problems are discussed in sections 7.3 and 7.4.


### 7.2.1 Categorical data

For categorical variables it is simple to check that all recorded data values are plausible because there is a fixed number of pre- specified values. For example, if we have four codes for blood group, as follows

$$
\begin{array}{l}1 = \mathbf{A} \\ 2 = \mathbf{B} \\ 3 = \mathbf{O} \\ 4 = \mathbf{AB} \end{array}
$$

then we expect to find only values 1, 2, 3 or 4 in the data, except for any subjects with missing information. If missing values are coded as 9, as recommended in Chapter 6, then we know that any blood group coded as 0, 5, 6, 7, or 8 is clearly wrong.

Values of 0 obtained from computer analysis may indicate that the blood group was left blank - most computer programs do not distinguish blanks and zeros. In this example it is possible that O might be coded as 0 rather than 3. Erroneous values should be checked as far as is possible (if necessary, back to the original source of the information). If a mistake is found the value should be changed to one of the valid codes, here 1, 2, 3, or 4; if not, the missing value code should be used.


### 7.2.2 Continuous data

For continuous measurements we cannot usually identify precisely which

values are plausible and which are not, and it is not important to do so. It should, however, always be possible to specify lower and upper limits on what is reasonable for the variable concerned. For example, in a study of pregnancy we might put limits of 14 and 45 on maternal age, or in a study of adult males we may use limits of 70 and  $250 \mathrm{mmHg}$  for systolic blood pressure. We then need to identify values outside the limits, a procedure known as range checking. Unlike the categorical data case, however, these values are not necessarily wrong. Suspicious values should be checked and any errors found should be corrected. Values remaining outside the prespecified range must either be left as they are, or recorded as 'missing' if they are felt to be impossible rather than just unlikely. It may, therefore, be advisable to have two sets of limits for each variable, denoting suspicious (or unlikely) values and impossible values. Defining what is impossible may be extremely difficult. What values of maternal age or systolic blood pressure are impossible? And at what point is 'impossible' reached?

A common cause of error is misplacing the decimal point, perhaps because of confusion over the right units of measurement to use or a transcription error. Often an error by a factor of ten will give an impossible value, but if the recorded value is plausible a misplaced decimal point may well go undetected. Plausible but unlikely values should be corrected only if there is evidence of a mistake.


### 7.2.3 Logical checks

Checking the data is more complicated when the values of a variable that are reasonable depend on the value of some other variable. We call these logical checks. Firstly, it is common for some information to be sought only in certain cases. For example, in a study of survival after a kidney transplant, information on number of previous pregnancies is relevant only for women, and so for men should be set to missing or to a different code indicating 'not applicable'. (Some computer programs allow for different types of missing information.)

If there were restrictions on who should be in the study (for example, entry criteria in a clinical trial - see Chapter 15), then the data should be checked as far as possible to see that everyone really was eligible. A common example is in studies of anti- hypertensive agents, in which there is a range of blood pressures for which subjects can be entered in the study. Many studies have restrictions on the age of participants.

A different problem occurs when two variables are used to construct another variable. The value of the new variable may be impossible even though the values of the original variable were both reasonable. For example, a common measure of body size (a crude measure of fatness) is

the 'body mass index' or 'Quetelet's index', defined as Weight/Height². If such derived variables are especially important they should be checked along with recorded variables before beginning the main analysis.

More generally, there may be subjects who have a combination of values of two variables that is very unlikely even though each is within acceptable limits. If we have two closely related variables, such as systolic and diastolic blood pressure, we do not expect a subject at the 5th centile of the distribution of systolic pressure to be at the 95th centile for diastolic pressure. In a large study it is impracticable to consider all pairs of variables in this way, but those of major importance, such as blood pressure in anti- hypertensive drug trials, should be studied closely, most simply by examining scatter diagrams.

Lastly in this section, there is the case where the same variable is measured several times on each subject. It is valuable to plot each person's sequence of recorded values to ensure that they behave reasonably. Sometimes we will expect each measurement to be larger than the previous one, such as annual height measurements of children, and this is easily verified. Unfortunately it may be difficult to produce such plots using statistical software, as few programs can cope with serial data on each subject.


### 7.2.4 Dates

Recorded dates are important when they are used to calculate the time between two events. For example, we can calculate a subject's age at some event, such as surgery or death, from the date of the event and the subject's date of birth. Other common calculations are the time between an event and the patient's death (their survival time) or the time between the first symptom and the diagnosis of the disease. As recommended in Chapter 6, it is preferable to record all the relevant dates, as mental calculation of time intervals is extremely unreliable. However, recording dates also causes problems as they are especially prone to transcription errors.

Dates should be checked as follows:

1. Check that all dates are within a reasonable time span. Dates of birth may relate to the age range for inclusion in a study. Note that studies including elderly people may include dates of birth before 1900. Dates of other events, such as surgery or death, will probably lie within the time span of the study.

2. Check that all dates are valid. The day of month should lie in the range 1 to 31, and so on, but dates such as 30 February are impossible. Some computer programs have routines for checking the validity of dates.

3. Check that dates are correctly sequenced. Often dates of different events should fall in a certain sequence, such as dates of birth, surgery, and death.

4. Check derived ages and time intervals. After checks (1) and (2) the dates should be used to calculate ages and time intervals of interest, such as age at surgery or time between surgery and death. These should then be range checked as described earlier.


## 7.3 OUTLIERS

Checking the data for continuous variables may reveal some outlying values that are incompatible with the rest of the data. Typically there may be one or two outliers for a few variables, although for most variables there will not be any.

As already discussed, suspicious values should be carefully checked. If there is no evidence of a mistake, and the value is plausible, then it should not be altered. An exception to this rule is where the value is correct but investigation reveals that there is something special about that individual, such as a concurrent illness. Here it may be reasonable to exclude the observation. In contrast, it is especially dangerous to remove values simply because they are largest or smallest. Also, there is no justification behind automated procedures such as removing all values more than three standard deviations away from the mean. Statistical techniques can be used to detect suspicious values, but should not be used to determine what happens to them.

Outliers are particularly important because they can have a considerable influence on the results of a statistical analysis. Because by definition they are extreme values, their inclusion or exclusion can have a marked effect on the results of an analysis. To take a simple example, Table 7.1 shows numbers of  $\mathbf{T_{4}}$  cells per  $\mathbf{mm}^{3}$  in blood samples from 20 patients in remission from Hodgkin's disease. The mean of the values is 823.2 and the standard deviation is 566.4. If we consider that the highest value of 2415 is an outlier and discard it, the mean of the remaining 19 values is 739.4 and the standard deviation is 436.4 - both must fall when the largest value is omitted. The effect of excluding a single observation can, as here, be quite marked, which is why decisions about which data are to be analysed should be made before the full analysis starts.

A histogram of the  $\mathbf{T_{4}}$  data shows that the distribution is skewed (Figure 7.1a), whereas that for the logarithm of the cell counts is symmetric (Figure 7.1b). Further, the apparent outlier is seen in the log scale to be very reasonable. Transformations are considered in section 7.6.

Outliers can be influential in regression analysis, a technique described in Chapter 11 for finding the best straight line describing the relation

Table 7.1 Numbers of  $\mathbf{T_{4}}$  cells  $/\mathrm{mm}^{3}$  in blood samples from 20 patients in remission from Hodgkin's disease and 20 patients in remission from disseminated malignancies (nonHodgkin's) (Shapiro et al., 1986)  

<table><tr><td></td><td>Hodgkin&#x27;s</td><td>non-Hodgkin&#x27;s</td></tr><tr><td>171</td><td>116</td><td></td></tr><tr><td>257</td><td>151</td><td></td></tr><tr><td>288</td><td>192</td><td></td></tr><tr><td>295</td><td>208</td><td></td></tr><tr><td>396</td><td>315</td><td></td></tr><tr><td>397</td><td>375</td><td></td></tr><tr><td>431</td><td>375</td><td></td></tr><tr><td>435</td><td>377</td><td></td></tr><tr><td>554</td><td>410</td><td></td></tr><tr><td>568</td><td>426</td><td></td></tr><tr><td>795</td><td>440</td><td></td></tr><tr><td>902</td><td>503</td><td></td></tr><tr><td>958</td><td>675</td><td></td></tr><tr><td>1004</td><td>688</td><td></td></tr><tr><td>1104</td><td>700</td><td></td></tr><tr><td>1212</td><td>736</td><td></td></tr><tr><td>1283</td><td>752</td><td></td></tr><tr><td>1378</td><td>771</td><td></td></tr><tr><td>1621</td><td>979</td><td></td></tr><tr><td>2415</td><td>1252</td><td></td></tr><tr><td>Mean</td><td>823.2</td><td>522.1</td></tr><tr><td>SD</td><td>566.4</td><td>293.0</td></tr></table>

between two continuous variables. Figure 7.2 shows the change in plasma protein levels after haemodialysis in 12 patients with chronic renal failure, in which the youngest patient is a possible outlier. Also shown are the fitted regression lines for all the data and with that patient excluded. They illustrate that the regression line gets 'pulled' towards outlying values, regardless of the distribution of the rest of the data, especially in small samples. A single outlying point can have a considerable effect on the visual impression. If we cover the suspicious value it is clear that there is no apparent relation in the rest of the data. In Chapter 11 I suggest that a scatter diagram should always accompany regression analyses.

Outliers can affect many types of statistical analysis, often by inflating the variance of a set of observations and so obscuring the effect of interest. Awareness of any outliers is a highly beneficial spin- off from checking the data.

![](../images/07_Preparing_to_analyse_data/img1.jpg)

![](../images/07_Preparing_to_analyse_data/img2.jpg)

![](../images/07_Preparing_to_analyse_data/img3.jpg)

![](../images/07_Preparing_to_analyse_data/img4.jpg)  
Non-Hodgkin's disease  Figure 7.1 Histograms of  $\mathbf{T_{4}}$  cell counts  $/\mathbf{m}\mathbf{m}^{3}$  in patients with and without Hodgkin's disease shown in Table 7.1 (a) raw data; (b) after  $\log_{2}$  transformation.

![](../images/07_Preparing_to_analyse_data/img5.jpg)  
Figure 7.2 Data showing the relation between change in plasma protein  $(g / l)$  after haemodialysis and age in 12 patients with chronic renal failure, showing regression lines for all data (—) and excluding the youngest patient (- - - - - -). Data from Toulon et al. (1987).

A useful strategy to adopt when analysing data is to carry out the analysis both including and excluding the suspicious value(s), as in Figure 7.2. If there is little difference in the results obtained then the outlier(s) had minimal effect, but if excluding them does have an effect it may be better to find an alternative method of analysis. Rank methods, introduced in Chapter 8, may be a good approach here. This is an area where expert statistical advice is valuable.


## 7.4 MISSING DATA

Another by- product of checking your data is that any missing observations will be identified. As noted in Chapter 6, the most common device is to use codes such as 9, 99, 999, or 99.9, according to the nature of the variable, although some computer programs (unfortunately few) allow * or some other symbol to indicate a missing observation. If a numeric value is used it is essential to identify the value as a missing value to the statistical software before analysing the data. It is very easy to forget that one or two values are missing, perhaps coded as 999, when carrying out an analysis. The effect on the analysis can be severe, as was illustrated in section 6.3.

The advantage of using  $\clubsuit$  is that there is no danger that subsequent analysis will treat the missing value code as a real observation.

For categorical variables missing is just an additional category and so these individuals can be included in any cross- tabulations. However, it is still important that the code (say 9) is identified as missing in a computer program when performing a statistical analysis. For continuous variables it is essential that missing data are identified.

It is important to remember the possibility of missing value codes when creating a new 'derived' variable. For example, if we use height and weight to derive the body mass index (BMI) (described in section 7.2.3), and either or both variables are missing we can get very misleading answers if we have not identified the codes as missing:

<table><tr><td>Height (m)</td><td>Weight (kg)</td><td>BMI (Wt/Ht²)</td></tr><tr><td>1.62</td><td>68.2</td><td>26.0</td></tr><tr><td>1.62</td><td>999.9</td><td>381.0</td></tr><tr><td>9.99</td><td>68.2</td><td>0.7</td></tr><tr><td>9.99</td><td>999.9</td><td>10.0</td></tr></table>

In this case the derived values if either variable is missing are impossible, but this will not always be the case. Missing value codes should be identified before derived variables are constructed. Good computer programs will set the value of a derived variable to missing if any of its components is missing.

Dates are sometimes only partially recorded. If the day is missing it can be set to 15 (halfway through an average month), and a missing month can be set to 6 or 7 (halfway through the year) to minimize the possible error. Substitutions like these are reasonable if the effect is very small compared with the time span being investigated. However, care should be taken that this substitution does not result in a reversal of the sequence of two dates. For example, if date of surgery is given as 08- 89, with the day missing, and date of death is 13- 08- 89, then setting the day of surgery to 15 will make the patient's survival time - 2 days.


### 7.4.1 Why are data missing?

It is worth thinking about why the data are missing; in particular we ought to know if there is a reason related to the nature of the study. As with impossible values, it may be possible to check with the original source of

the information that missing observations are really missing. Frequently values are missing essentially at random, for reasons not related to the study. For example, some patients may not have been asked a particular question, or a blood sample may have been lost or destroyed. Most large studies will have some missing data for reasons like these. The lack of information may, however, be informative. In a study in which information about a patient is collected on several occasions, lack of information for the later times may be because the patient was withdrawn from the study due to side- effects, or even because they died. Another possibility is that they may have been withdrawn from the study because the variable of interest responded inappropriately. For example, it is common in studies in hypertension to withdraw patients if their blood pressure rises above a pre- selected level, which must compromise an analysis of change in blood pressure. There is further discussion of this type of data in section 14.6.

For information that is coded as 'yes' or 'no', such as the presence of a particular symptom, it may be tempting to consider replacing missing values by 'no', on the grounds that the information would have been recorded if the symptom had been present. This assumption is usually unwarranted, and should not be made lightly. This problem is most likely in retrospective studies, for example when data are obtained from patients' hospital notes.


## 7.5 DATA SCREENING

So far in this chapter I have considered various aspects of checking, as far as possible, that the data are correct. The other important aspect of preliminary data examination is to see how suitable the data are for the type of analysis that is intended, a process sometimes called data screening. As already indicated, the presence of one or more outliers can markedly affect, and perhaps invalidate, an analysis. Data screening is concerned largely with the distribution of continuous data, outliers being just one of the aspects considered in this section.


### 7.5.1 The distribution of observations

As subsequent chapters will show, many types of statistical analysis of continuous data are based on the assumption that the data are a sample from a population with a Normal distribution. Alternative methods based on ranks are usually available that do not make that assumption, but they have certain disadvantages. It is important to know the distribution of the data before embarking on an analysis based on the assumption of Normality. Data that are not compatible with a Normal distribution can often be

transformed to make them acceptably near to Normal, as described in section 7.6.

For each continuous variable the mean and standard deviation (SD) should be calculated. If possible a histogram should be produced to see the shape of the distribution. If this is not possible then quantiles of the distribution (for example, the 10th, 50th and 90th centiles) can be examined to see if the distribution appears symmetric.

For small samples especially it may be difficult to judge the degree of Normality of a set of data. As Figure 4.7 showed, even samples of size 50 from a Normal distribution may look non- Normal. The graphical technique called a Normal plot, described below, gives a much better idea of Normality.

A good way of checking many variables visually is to produce a 'matrix' of scatter plots of all pairs of variables. An example is given in Figure 12.2.


### 7.5.2 The Normal plot

The Normal plot is based on two ideas. First, the cumulative frequency distribution gives a better idea of the shape of the data than does the frequency distribution. It is much less affected by the small fluctuations that were seen in Figure 4.7. The cumulative frequency distribution for data that are Normally distributed has an S shape, as shown in Figure 4.6. It is, however, difficult to judge Normality from the cumulative frequency distribution, which is where the second idea comes in. Because all Normal distributions are precisely the same shape (Figure 4.4) we can stretch the vertical scale to make the cumulative distribution function a straight line if the data are Normal. Departures of the sample data from Normality are thus easily seen as departures from a straight line.

Suppose we have a variable whose values in the population have a Normal distribution with a mean of 34.46 and a standard deviation of 5.84. Figure 7.3 shows (a) the frequency distribution, (b) the cumulative frequency distribution, and (c) the Normal plot. The horizontal axis of the Normal plot shows the numerical value of the observation, and the vertical axis gives the relative frequency in terms of the number of standard deviations from the mean. The values labelled on the vertical axis of the Normal plot correspond to cumulative percentages of  $0.1\%$ ,  $2.3\%$ ,  $16\%$ ,  $50\%$ ,  $84\%$ ,  $97.7\%$  and  $99.9\%$  (see section 4.5.1). The calculation of the plotting coordinates is explained below. Figure 7.3 shows what happens in theory, and Figure 7.4 shows the same process for a sample of size 216 chosen at random from the same population. The top panel shows a histogram of the data, which exhibits some irregularities. The second shows the cumulative frequency distribution and the last the Normal plot. The data are close to a straight line in the Normal plot.

![](../images/07_Preparing_to_analyse_data/img6.jpg)

![](../images/07_Preparing_to_analyse_data/img7.jpg)

Now that we know what sort of picture to expect when the data really do come from a Normal distribution, we have some basis for judging some real data. Figure 7.5 gives a Normal plot for the serum albumin values from the study of 216 patients with primary biliary cirrhosis previously discussed. These data had a mean of  $34.46 \mathrm{g} / \mathrm{l}$  and the standard deviation was  $5.84 \mathrm{g} / \mathrm{l}$ . Figures 7.3, 7.4 and 7.5 are thus directly comparable. When we produce a Normal plot for some data this is the comparison that is implicitly being made. The Normal plot in Figure 7.5(c) is very near to a straight line, indicating that the distribution of serum albumin values in these patients is near to a Normal distribution, in agreement with Figure 4.5. I shall consider below how we can quantify the nearness.

By contrast, the distribution of serum bilirubin values in the same patients was shown in Figure 4.8 to be highly skewed and not near to a Normal distribution. The markedly curved Normal plot of the data in Figure 7.6(a) confirms this finding. However, as described in Chapter 4, after log transformation the data have a nearly Normal distribution, as shown by the Normal plot in Figure 7.6(b). The reasons why we might wish to transform a set of data to get an approximately Normal distribution are discussed in section 7.6.

While the Normal plot is a very useful graphical device for judging the Normality of a set of data, it only allows for a subjective assessment. Because of sampling variation we know that samples from Normal distributions will not be exactly Normal (see Figure 4.7) especially if the sample is small. Where it is important for the data to be close to Normal it is useful to have a method for quantifying the deviations from Normality.


### 7.5.3 Evaluating departures from a Normal distribution

One way of measuring non- Normality is to calculate what are called 'higher moments' of the distribution of data. The first two moments have already been described - they are the mean and variance. However, these values give no information about the shape of the distribution. We can measure shape by means of quantities based on

$$
\sum \frac{(x_{i} - \bar{x})^{3}}{n - 1} \qquad \text{and} \qquad \sum \frac{(x_{i} - \bar{x})^{4}}{n - 1}
$$

which are obvious extensions to the formula for the variance. From these we can derive quantities called skewness, which is a measure of asymmetry. and kurtosis, which is a measure of flatness or peakedness. These values can then be compared with the theoretical values for a Normal distribution. I do not recommend this approach, however, as it is preferable to have a single assessment of Normality rather than two.

Situations in which we may wish to assess the Normality of a set of data

![](../images/07_Preparing_to_analyse_data/img8.jpg)  
Figure 7.5 Serum albumin values of 216 patients with primary biliary cirrhosis expressed as (a) frequency histogram; (b) cumulative frequency distribution; (c) Normal plot.

![](../images/07_Preparing_to_analyse_data/img9.jpg)

![](../images/07_Preparing_to_analyse_data/img10.jpg)

arise in subsequent chapters. For many purposes it is not necessary to do more than check the Normal plot by eye, but if something more is required then a more useful approach is based on measuring the straightness of the Normal plot. We can then calculate the probability that such a value would be obtained in a sample if the population had a Normal distribution, and if this probability is large enough, say greater than 0.05 (1 in 20), we conclude that the data are reasonably near to a Normal distribution. This procedure is an example of a standard statistical approach to inference which is introduced properly and discussed in detail in the next chapter.

The Shapiro- Wilk W test for Normality is available in several statistical computer programs. However, if it is unavailable the closely related Shapiro- Francia  $W^{\prime}$  can be calculated fairly easily. It is, however, not described until section 11.6 as it requires a method of analysis introduced in that chapter. For the albumin data shown in Figure 7.5 the Shapiro- Wilk W test yields a large probability of 0.76, while the bilirubin data in Figure 7.6 yield a very small probability (Table 7.2). Clearly the serum albumin data are compatible with a Normal distribution, while the raw serum bilirubin values are not. The Normal plot of the log serum bilirubin values (Figure 7.6b) is straight except for a few values at the lower end, but the W test shows that the data are not at all compatible with a Normal distribution (Table 7.2). This illustrates the fact that in large samples the test is able to detect small amounts of non- Normality, that in most circumstances would be unimportant. As Figure 4.9 showed, the log bilirubin data are very similar to a Normal distribution. Thus some judgement is required in assessing the Normal plot and the W test.

Table 7.2 Shapiro and Wilk's W test applied to 216 values of serum albumin, serum bilirubin and log serum bilirubin (from the study by Christensen et al., 1985)  

<table><tr><td>Variable</td><td>W</td><td>Probability (P)</td></tr><tr><td>Serum albumin</td><td>0.986</td><td>0.76</td></tr><tr><td>Serum bilirubin</td><td>0.668</td><td>&amp;lt; 0.0001</td></tr><tr><td>Log serum bilirubin</td><td>0.956</td><td>&amp;lt; 0.0001</td></tr></table>

Non- Normality is usually most marked in the tails of the distribution. Outliers will show up in a Normal plot as one or more points lying away from the general linear trend of the rest of the data. Even one outlier can make the data fail the Shapiro- Wilk test. Systematic curvature, as seen in Figure 7.6(a), indicates skewness (to the right), while an S shaped plot will indicate either too many or too few values in both tails of the distribution in comparison with a Normal distribution, as shown in Figures 7.7 and 7.8

![](../images/07_Preparing_to_analyse_data/img11.jpg)

![](../images/07_Preparing_to_analyse_data/img12.jpg)

![](../images/07_Preparing_to_analyse_data/img13.jpg)

![](../images/07_Preparing_to_analyse_data/img14.jpg)  
Figure 7.8 Data with too few values in the tails of the distribution  $(n = 400$ , mean  $= 80$ , SD  $= 9.7)$  (a) histogram; (b) Normal plot.

respectively. Normal plots can also reveal a mixture of two distributions in the data. Figure 7.9 shows a Normal plot of birth weights of one litter of piglets, suggesting a normally grown group and a group of three 'runt' piglets with lower weights (Royston et al., 1982). The different slopes indicate different standard deviations in the two putative groups.


### 7.5.4 Constructing a Normal plot

(This section is more technical and can be omitted without loss of continuity.)

The scale of the  $Y$  axis in the Normal plots such as Figure 7.7 is linear in multiples of the standard deviation of the observations. The Normal plot is constructed by sorting the observations into ascending order and then plotting the data against the corresponding Normal scores. The Normal score is the number of standard deviations below or above the mean that we expect to find the observation with a given rank from a sample from a Normal distribution of a given size. Many statistical programs can calculate Normal scores for plotting against the data, and some can produce Normal plots easily. For drawing a Normal plot by hand there is special Normal probability paper with divisions corresponding to the percentage points of the Normal distribution. The observations are sorted and then the ith

![](../images/07_Preparing_to_analyse_data/img15.jpg)  
Figure 7.9 Normal plot of piglet birth weights (Royston et al., 1982).

observation is plotted against the Normal score corresponding to the percentage  $P_{i}$ , given by

$$
P_{i} = \frac{i - 3 / 8}{n + 1 / 4} \times 100.
$$


## 7.6 WHY TRANSFORM DATA?


### 7.6.1 Transforming to Normality

As will be seen in the next few chapters, most statistical methods (parametric methods) for analysing continuous data incorporate assumptions about the data in the population from which the sample was drawn. In particular they include an assumption that the data come from a population where the values are Normally distributed. Thus we expect the data to be consistent with that assumption, which is why we need the test of Normality described in section 7.5. We often find that a transformation of the data will yield a distribution that is much nearer to a Normal distribution. By far the most common is the logarithmic or log transformation. The Lognormal distribution was introduced in section 4.6, as the distribution that can be transformed to a Normal distribution by taking logs. The serum bilirubin data shown in Figure 7.6 are an example, as are the  $\mathbf{T_{4}}$  cell counts in Figure 7.1.

For some methods the distributional assumption is not too critical, especially if the sample size is large. There are other reasons, however, for wishing data to be near to a Normal distribution. Another important assumption of many parametric methods is that different groups of observations have the same standard deviations. It is often the case that variation in standard deviations accompanies non- Normal data, and both requirements can be met more closely after transforming the data. For example, the  $\mathbf{T_{4}}$  data in Table 7.1 for Hodgkin's and non- Hodgkin's disease patients have rather different standard deviations of 566.4 and 397.9, but the standard deviations of  $\log_{e} \mathbf{T_{4}}$  are much more similar, being 0.708 and 0.632, and the distributions are much nearer to Normal (Figure 7.1). The log transformation is likely to work well if the ratio of the standard deviation to the mean is similar among several groups of observations. This calculation has meaning only for the raw data, and may not be very helpful with just two groups. For the  $\mathbf{T_{4}}$  data the ratios are 0.69 and 0.56, which are reasonably similar.

Other transformations sometimes used are the square root and reciprocal transformations. Figure 7.10 shows histograms of the serum bilirubin data before and after different transformations. The square root transformation (Figure 7.10c) is less dramatic than taking logs. It is particularly used when the variable is a count (frequency) and thus would be expected to follow a

![](../images/07_Preparing_to_analyse_data/img16.jpg)

Poisson distribution. The reciprocal transformation (Figure 7.10d) has a much more drastic effect than taking logs (note that it reverses the order of the observations), and may be useful if the observed data have an extremely skewed distribution. The use of the reciprocal transformation for plasma creatinine values of kidney transplant patients and the square root transformation for tumour size measurements were described by Gore (1982). Their use is not common, however, and there are certain reasons for using the log transformation in preference to any other as long as it yields satisfactory results (see section 9.7). Sometimes there may be a strong logical reason for using a particular transformation. For example, the cube root may be appropriate for data that are volumes and the reciprocal of a recorded time to walk a certain distance will yield the speed.

Another reason for transforming to Normality is to reduce the influence of outlying (and thus atypical) values on the results of analysis, a problem illustrated in Figure 7.2. The overall picture has been well summarized by Armitage and Berry (1987, p. 368): 'It is usually convenient if continuous variables do not depart too drastically from Normal'. When this cannot be achieved we can use rank (non- parametric) methods of analysis (described in subsequent chapters), but these are in general less satisfactory than parametric methods.

Transforming the data is sometimes felt to be a trick used by statisticians, a belief that is based on the idea that the natural scale of measurement is in some way sacrosanct. This is not really the case, and indeed some measurements, such as  $\mathbf{pH}$  values and titres, are effectively already log transformed values. It is, however, always best to present results in the original scale of measurement. In later chapters I show how this is done.


### 7.6.2 Transforming proportions

The other main use of transformations is in the analysis of proportions. Observed proportions in the range 0.2 to 0.8 have similar uncertainty but very small or large proportions have smaller uncertainty as they are somewhat constrained towards the ends of the scale (zero and one). For statistical analyses we often wish to have equal uncertainty attached to all proportions, and we can achieve this by the logit transformation, which is defined by

$$
\mathrm{logit}(p) = \mathrm{log}_{\mathrm{e}}\left(\frac{p}{1 - p}\right).
$$

The logit transformation stretches out proportions in the same way as the percentiles of the Normal distribution are stretched out in the Normal plot,

as Table 7.3 shows. The logit transformation is mainly used in regression analysis involving proportions, discussed in Chapter 12, and with the use of odds ratios to compare risks in different groups, described in Chapter 10.

Table 7.3 Effect of logit transformation of a proportion  $\pmb{p}$  

<table><tr><td>p</td><td>logit(p)</td></tr><tr><td>0.01</td><td>-4.60</td></tr><tr><td>0.05</td><td>-2.94</td></tr><tr><td>0.10</td><td>-2.20</td></tr><tr><td>0.25</td><td>-1.10</td></tr><tr><td>0.50</td><td>0.00</td></tr><tr><td>0.75</td><td>1.10</td></tr><tr><td>0.90</td><td>2.20</td></tr><tr><td>0.95</td><td>2.94</td></tr><tr><td>0.99</td><td>4.60</td></tr></table>


## 7.7 OTHER FEATURES OF THE DATA

The previous sections of this chapter have discussed the main features to look for when screening data before analysis. This section considers two less obvious aspects of data examination that can shed light on a study.


### 7.7.1 Digit preference

When people measure something they may not do so accurately. The harder the quantity is to measure the greater will be the within- observer variability and also the possibility of subconscious biases. Digit preference is the name given to the way individuals can impose their personal (subconscious) prejudice on the way they record observations. We see digit preference in the final recorded digit of a measurement. For example, height is usually measured in whole centimetres, and blood pressure to the nearest  $2 \mathrm{mmHg}$ . In a large series of observations we would expect to see equal numbers of height measurements with each terminating digit from 0 to 9, and equal numbers of blood pressure measurements ending in 0, 2, 4, 6 or 8. In practice we often see marked deviations from the expected Uniform distribution. Sometimes this is because the observer does not make the measurements to the precision specified in the study protocol. For example, he or she might measure blood pressure to the nearest  $5 \mathrm{mmHg}$ . Often, however, the distribution varies from expected for no definable reason - it is simply that the person seems to have a preference

for numbers ending in, say, 3 or 7. The most common forms of digit preference lead to an excess of

1. zeros 
2. zeros and fives 
3. even digits.

For (1) there will be a consequent shortage of ones and nines.

Several of these features can be seen in the data in Table 7.4, which shows terminal digits from three sets of blood pressure readings from a case- control study. The cases were measured twice while the controls were measured only once. Two of the three sets of digits show closely similar patterns, indicating that they were made by the same person. However, the third set shows a different pattern, showing that they must have been made by a different person. (I subsequently verified with the study organizer that this had happened.) Notice that both observers had an excess of zeros, but that they were clearly recording blood pressure to different accuracy.

Table 7.4 Final digits of recorded blood pressures in a case-control study  

<table><tr><td>Final digit</td><td>First exam</td><td>Cases 
Second exam</td><td>Controls</td></tr><tr><td>0</td><td>71</td><td>23</td><td>23</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>2</td><td>0</td><td>15</td><td>17</td></tr><tr><td>3</td><td>0</td><td>0</td><td>0</td></tr><tr><td>4</td><td>0</td><td>18</td><td>14</td></tr><tr><td>5</td><td>21</td><td>1</td><td>9</td></tr><tr><td>6</td><td>0</td><td>10</td><td>9</td></tr><tr><td>7</td><td>0</td><td>1</td><td>0</td></tr><tr><td>8</td><td>0</td><td>24</td><td>28</td></tr><tr><td>9</td><td>0</td><td>0</td><td>2</td></tr><tr><td>Total</td><td>92</td><td>92</td><td>102</td></tr></table>

The case of blood pressure is particularly interesting. Blood pressure is a very difficult measurement to take as it involves listening for a change in sound while observing a rapidly falling column of mercury. Because digit preference was such a problem with blood pressure several special machines were designed to get round the problem. The best known is the

'random- zero sphygmomanometer' which incorporates a second, hidden column of mercury of random height which is adjusted before each measurement. The recorded blood pressure is then the sum of the heights of the observed column of mercury and the subsequently measured hidden column. However, even the use of this machine may not remove the strong effect of digit preference (Silman, 1985).

Another example of digit preference is seen in the albumin data in Figure 7.5. The steps in the second and third plots are due to many values having been recorded as a whole number (in  $\mathbf{g} / \mathbf{l}$ ) rather than to one decimal place.

A curious feature of digit preference is that even if you know about the phenomenon it is still likely to be present in your measurements. Digit preference will rarely have an important influence on the data analysis, but it is another useful product of data screening that you may see how the measurements were made.


### 7.7.2 Hidden time effects

Many studies are carried out over a period of time. It is usually implicitly assumed that the data collected at different times are comparable, but this will not always be the case. Two main types of hidden time effect may exist. The better known effect is that of seasonal or circadian (24 hour) changes. For example, incidence rates of many diseases are strongly seasonal, and the levels of many hormone levels display a circadian 'rhythm'. Many effects of this nature are well- known, and it is not difficult to design studies to avoid problems. For example, it is advisable to take repeat measurements of blood pressure from the same subject at the same time of day because blood pressure has a strong circadian rhythm, being highest in the morning. There is further discussion of this type of data in section 14.7.

There is a second type of possible hidden time effect that is not widely recognized. In a study in which subjects are recruited over some months or years it is possible that there may be changes in the characteristics of the subjects or in the measurements made on them. For example, in the study of primary biliary cirrhosis previously discussed (Christensen et al., 1985) it was found that the serum bilirubin values of patients entering the trial steadily declined over the 7 years of patient recruitment (Altman and Royston, 1988). Serum bilirubin is a good indicator of liver function, so patients joining the study towards the end of the trial were rather less ill than those joining at the beginning. As this was a randomized trial, with patients given azathioprine or placebo at random throughout the period, the time trend in patient characteristics was not important. (It indicates however, one of the reasons for using concurrent controls in clinical trials - see Chapter 15. )

If the date of observations is known (and I recommend that it is recorded) then it is simple to plot the data against time to see if there are any trends. Altman and Royston (1988) discuss this issue further and give other examples.


## 7.8 CONCLUDING REMARKS

This chapter has dealt with ways of checking the consistency and, where possible, the accuracy of a set of data, and of screening the data prior to analysis. These procedures are important for any study, although perhaps particularly relevant to large data sets. They are not terribly practical without a computer, but a computer will also be needed to analyse the data, so it is a relatively simple extension to use the computer first to produce the descriptive tabulations and graphs described above. The possible exception is the Normal plot, which cannot be performed by all statistical programs. Further discussion of these matters, together with other aspects of quality control in large studies, is given by Buyse (1984).

For clarity the various aspects of data checking and screening have been considered separately. In practice, however, it is possible to perform range checks, look for outliers and missing values, and examine the shape of the distribution of a set of data in a single analysis.

Although not always discussed as part of statistical methodology the methods described in this chapter are an essential part of statistical analysis, allowing you to check the correctness of your data. Time spent at the beginning checking the data is time well spent; errors in the data that are not detected until the main analysis is under way will require everything to be redone. Screening the data also allows you to get a feel for the data. This last idea is rather nebulous, but by familiarizing yourself with the data you should be much better equipped to choose appropriate and valid methods of analysis.


## EXERCISES  <!-- 非数字开头标题 -->

7.1 The table overleaf shows data from a study of 20 patients with chronic congestive heart failure (Caruana et al., 1988). Two measurements are shown - ejection fraction, which is a measure of left ventricular dysfunction, and pulmonary arterial wedge pressure:

<table><tr><td>Patient</td><td>Ejection fraction (%)</td><td>Wedge pressure (mm Hg)</td></tr><tr><td>1</td><td>28</td><td>15</td></tr><tr><td>2</td><td>26</td><td>14</td></tr><tr><td>3</td><td>42</td><td>15</td></tr><tr><td>4</td><td>29</td><td>12</td></tr><tr><td>5</td><td>16</td><td>37</td></tr><tr><td>6</td><td>21</td><td>30</td></tr><tr><td>7</td><td>25</td><td>7</td></tr><tr><td>8</td><td>35</td><td>14</td></tr><tr><td>9</td><td>30</td><td>28</td></tr><tr><td>10</td><td>36</td><td>13</td></tr><tr><td>11</td><td>37</td><td>5</td></tr><tr><td>12</td><td>41</td><td>13</td></tr><tr><td>13</td><td>20</td><td>24</td></tr><tr><td>14</td><td>26</td><td>8</td></tr><tr><td>15</td><td>38</td><td>13</td></tr><tr><td>16</td><td>26</td><td>17</td></tr><tr><td>17</td><td>10</td><td>27</td></tr><tr><td>18</td><td>18</td><td>29</td></tr><tr><td>19</td><td>10</td><td>8</td></tr><tr><td>20</td><td>31</td><td>5</td></tr></table>

One value has been mistranscribed from the paper. Which patient's data is most likely to be wrong?

7.2 Use the method described in section 7.5.4 to construct a Normal plot of the  $\log_{e}T_{4}$  cell counts for 20 Hodgkin's disease patients given in the first column of Table 7.1.

7.3 Comment on the terminal digits of the three variables shown in the table in Exercise 3.1.

7.4 Investigate the possibility of digit preference in the final digits of the following serum progesterone data (also shown as Group 2 in Table 14.13).

<table><tr><td rowspan="2">Time</td><td colspan="6">Patient</td></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>0</td><td>1.0</td><td>1.0</td><td>1.0</td><td>3.0</td><td>8.3</td><td>6.2</td></tr><tr><td>1</td><td>1.5</td><td>1.0</td><td>1.0</td><td>2.5</td><td>7.5</td><td>5.9</td></tr><tr><td>3</td><td>5.0</td><td>6.5</td><td>7.3</td><td>2.0</td><td>9.6</td><td>6.8</td></tr><tr><td>5</td><td>11.0</td><td>20.0</td><td>7.5</td><td>2.7</td><td>11.0</td><td>7.7</td></tr><tr><td>10</td><td>16.0</td><td>22.5</td><td>18.0</td><td>3.4</td><td>11.5</td><td>9.0</td></tr><tr><td>15</td><td>23.0</td><td>27.8</td><td>20.0</td><td>3.6</td><td>15.7</td><td>9.3</td></tr><tr><td>30</td><td>15.0</td><td>19.0</td><td>18.9</td><td>14.0</td><td>15.2</td><td>12.1</td></tr><tr><td>45</td><td>9.0</td><td>9.0</td><td>12.8</td><td>7.3</td><td>15.8</td><td>12.2</td></tr><tr><td>60</td><td>6.0</td><td>8.2</td><td>6.3</td><td>7.7</td><td>14.0</td><td>11.0</td></tr><tr><td>120</td><td>5.0</td><td>8.0</td><td>4.8</td><td>4.7</td><td>11.5</td><td>9.0</td></tr></table>