# 9 Comparing groups - continuous data

Good answers come from good questions not from esoteric analysis. Schoolman et al., (1968)


## 9.1 INTRODUCTION

We can now build on the ideas of the previous chapters to consider the main methods of data analysis. In particular we will use the ideas introduced in the previous chapter - estimation and hypothesis testing. Other important ideas are the relation between the analysis and the research design (Chapter 5) and the nature of the observations (Chapter 2).

This chapter deals with comparing groups of observations with respect to continuous data, starting with the simplest case where we wish to compare a single group of observations with some prespecified value, and moving through to the case where we have several sets of observations on each of a group of individuals. Both parametric and non- parametric approaches to analysis are introduced. Chapter 10 considers the same situations when the data are categorical.


## 9.2 CHOOSING AN APPROPRIATE METHOD OF ANALYSIS

When choosing an appropriate method of analysis there are several aspects of the data that we must consider, relating to the design of the study, the nature of the data, and the purpose of the analysis.


### 9.2.1 The number of groups of observations

Although methods of dealing with several groups of observations can be used for just one or two groups it is convenient to consider the one and two group cases separately, as the methods can be simplified, and there are fewer problems of interpretation. The two group case is the most common type of statistical analysis.


### 9.2.2 Independent or dependent groups of observations

When there are two or more sets of observations there are two types of design that must be distinguished:

1. The observations relate to independent groups of individuals. For example, we may have birthweights of boys and girls or groups of patients with different diseases. The sample size may vary from group to group.

2. Each set of observations is made on the same group of individuals. For example, we may have antenatal and postnatal blood pressure measurements from one group of women. We call such data paired to indicate that the observations are on the same individuals rather than from independent samples. Clearly we must have the same number of observations in each set of data.

Sometimes two different groups of subjects are studied where each person is individually matched with a member of the other group. Here the data are clearly linked and should be treated as if they are paired observations on one group.


### 9.2.3 The type of data

The distinction between continuous and categorical data was discussed in Chapter 2. There are several types of continuous data, however, and the nature of the observations has implications for statistical analysis. Specifically, parametric methods are based on calculating means and standard deviations, so they are inappropriate for ordered categorical data such as the Apgar score described in Chapter 2.


### 9.2.4 The distribution of data

For independent groups, parametric methods require the observations within each group to have an approximately Normal distribution, and the standard deviations in each group should be similar. If the raw data do not satisfy these conditions, a transformation may be successful (see Chapter 7). Otherwise a non- parametric method should be used.

For paired data relating to two or more observations on the same people there is no assumption that each set of observations should be Normally distributed, but there is a different assumption of Normality, discussed below.


### 9.2.5 The objective of the analysis

Both estimation and hypothesis testing are considered throughout this chapter. However, with three or more groups of data there are several

possible comparisons between groups. The choice of which to investigate should follow directly from the objectives of the study.


## 9.3 THE  $t$  DISTRIBUTION

In the previous chapter I showed how to calculate confidence intervals and perform hypothesis tests based on the assumption that the estimates of interest, either means or proportions, had a Normal distribution. Because of the central limit theorem we know that this is a reasonable assumption for large samples, but not all samples are large (more than 100, say). In the analysis of continuous data the calculation of means plays a prominent part, and so we need to consider the distribution of the mean for smaller samples.

Early in this century it was shown by W. S. Gossett, writing under the name of 'Student', that the mean of a sample from a Normal distribution with unknown variance has a distribution that is similar to, but not quite the same as, a Normal distribution. He called it the  $t$  distribution, and we still refer to it as Student's  $t$  distribution. As the sample size increases the sampling distribution of the mean becomes closer to the Normal distribution. We use the  $t$  distribution for estimation and hypothesis testing relating to the means of one or two samples. Although we can use the Normal distribution for large samples there is little point in doing so, since for large samples the methods give virtually identical answers and it is simpler to use the same method regardless of the sample size.

The  $t$  distribution has one parameter, a quantity called the degrees of freedom. The concept of degrees of freedom is one of the more elusive statistical ideas. In general the degrees of freedom are calculated as the sample size minus the number of estimated parameters. The degrees of freedom for the  $t$  distribution relate to the estimated standard deviation, which is calculated as variation around the estimated mean. Hence for a single sample of  $n$  observations we have  $n - 1$  degrees of freedom.

Figure 9.1 shows the  $t$  distributions with 5 and 25 degrees of freedom, together with the Normal distribution. The latter is close to the Normal distribution, and as the sample size increases the  $t$  distribution becomes ever more Normal. The difference is most marked in the tails of the distributions, which is usually the part that we are interested in.

Nearly all the parametric methods introduced in this chapter, and most that follow, make use of the  $t$  distribution. In Chapter 8 I showed how we calculate a test statistic using the Normal distribution by taking the ratio of the quantity of interest to its standard error. We use the same method of calculation when using the  $t$  distribution. The only difference is that we look up the result in a table of the  $t$  distribution (Table B4) rather than the Normal distribution. Likewise, we use the  $t$  distribution to calculate confidence intervals.

![](../images/09_Comparing_groups_continuous_data/img1.jpg)  
Figure 9.1 Student's  $t$  distribution with (a) five, and (b) 25 degrees of freedom. together with the standard Normal distribution.

This chapter deals first with three situations where we use the distribution - for one sample, paired samples, and two independent samples. Lastly, for the case with more than two samples we need the method called analysis of variance, for which we use the  $F$  distribution (introduced later) rather than the  $t$  distribution. All these parametric methods make assumptions about Normality. Section 9.7 describes the analysis of skewed data by taking logarithms. Alternatively, non- parametric methods are available for all the problems discussed in this chapter, and are introduced within each section.


## 9.4 ONE GROUP OF OBSERVATIONS

The simplest case to consider is when we wish to compare the mean of a single group of observations with a specific value. Comparisons like this are not very common, but the methodology for this simple case gives a good introduction to the main methods of statistical inference. Sections 9.4.1 and 9.4.2 describe parametric methods, with the equivalent non- parametric methods described in sections 9.4.3 to 9.4.5.

As an example, suppose we wish to compare the mean dietary intake of a particular group of individuals with the recommended daily intake. Table 9.1 shows the average daily energy intake over ten days in 11 healthy women aged 22- 30. Their mean daily intake was  $6753.6\mathrm{kJ}$ . The small sample of observations shows no obvious skewness and may reasonably be taken as approximately Normal. Notice that each observation is itself an average value over several days. It is sometimes a good idea to take several values of a highly variable quantity. What can we say about the energy intake of these women in relation to a recommended daily intake of  $7725\mathrm{kJ}$ ?

Table 9.1 Average daily energy intake (kJ) over 10 days of 11 healthy women (Manocha et al.,1986)  

<table><tr><td>Subject</td><td>Average daily energy intake (kJ)</td></tr><tr><td>1</td><td>5260</td></tr><tr><td>2</td><td>5470</td></tr><tr><td>3</td><td>5640</td></tr><tr><td>4</td><td>6180</td></tr><tr><td>5</td><td>6390</td></tr><tr><td>6</td><td>6515</td></tr><tr><td>7</td><td>6805</td></tr><tr><td>8</td><td>7515</td></tr><tr><td>9</td><td>7515</td></tr><tr><td>10</td><td>8230</td></tr><tr><td>11</td><td>8770</td></tr><tr><td>Mean</td><td>6753.6</td></tr><tr><td>SD</td><td>1142.1</td></tr></table>


### 9.4.1 Confidence interval for the mean

On average the 11 women had a daily energy intake below the recommended level of  $7725\mathrm{kJ}$ , the average deficit being  $7725 - 6753.6 = 971.4\mathrm{kJ}$ .

The standard deviation of the eleven daily intakes was  $1142.1 \mathrm{kJ}$ , so the standard error of the mean intake is  $1142.1 / \sqrt{11} = 344.4 \mathrm{kJ}$ . We use the  $t$  distribution to calculate a confidence interval for the mean daily intake, following the principles outlined in section 8.4.5. For a  $95\%$  confidence interval we need the value of  $t$  corresponding to a tail area of 0.05, denoted  $t_{0.975}$ , with  $11 - 1 = 10$  degrees of freedom. From Table B4 the value of  $t$  we need is 2.228. The  $95\%$  confidence interval for the mean intake is thus

$$
6753.6 - 2.228 \times 344.4 \qquad \text{to} \qquad 6753.6 + 2.228 \times 344.4
$$

or 5986 to  $7521 \mathrm{kJ}$ .

This range does not include the recommended level of  $7725 \mathrm{kJ}$ . If we assume that the women are a representative sample, then we can infer that for all women of this age average daily energy consumption is less than is recommended. The interpretation would, however, be unwise on the basis of such a small sample, especially without knowledge of how the sample was selected.

Similarly we can calculate a confidence interval for the energy deficit. The mean energy deficit was  $971.4 \mathrm{kJ}$ . The standard error of the mean deficit is the same as the standard error of the mean intake because subtracting a constant from each value of a distribution or set of observations does not affect the standard deviation. The  $95\%$  confidence interval for the energy deficit is thus obtained by subtracting 7725 from the confidence interval for the mean daily intake. Ignoring the negative sign, we get the  $95\%$  confidence interval for the energy deficit as 204 to  $1739 \mathrm{kJ}$ .


### 9.4.2 One sample  $t$  test

We can also carry out a test of the null hypothesis that our data are a sample from a population with a specific 'hypothesized' mean. The test is called the one sample  $t$  test, and the value of  $t$  is calculated as

$$
t = \frac{\text{sample mean} - \text{hypothesized mean}}{\text{standard error of sample mean}}
$$

following the common form of hypothesis tests described in section 8.5. If the hypothetical population mean is some value  $k$ , we can rewrite the formula as

$$
t = \frac{\bar{x} - k}{s / \sqrt{n}}
$$

or

$$
t = \frac{(\bar{x} - k) \sqrt{n}}{s}
$$

where  $\bar{x}$  and  $s$  are the mean and standard deviation of the sample of size  $n$ . The magnitude of  $t$  is thus the average discrepancy of the sample values from the hypothetical mean, divided by the standard error of the sample mean.

The mean and standard deviation of the dietary intake data were 6753.6 and  $1142.1 \mathrm{kJ}$ , and the hypothetical value of interest was the recommended intake of  $7725 \mathrm{kJ}$ . We can thus calculate the value of  $t$  as

$$
t = \frac{6753.6 - 7725}{1142.1 / \sqrt{11}} = -2.821.
$$

We use Table B4 to find the  $\mathbf{P}$  value associated with an observed value of  $t$ . We can ignore the sign of  $t$  for a two- sided test, and look for the largest tabulated value of  $t$  below our observed value, using 10 degrees of freedom. From Table B4 we get  $\mathbf{P} < 0.02$ , so that the dietary intake of these women was significantly less than the recommended level using the usual criterion of  $\mathbf{P} < 0.05$ . Notice that statistical significance gives no information about the magnitude of the energy deficit, nor the uncertainty of that estimate.

Note that we use  $t$  to indicate the observed value of the test statistic and also a particular value from the theoretical  $t$  distribution. For clarity I always use a subscript in the latter case. For many other statistical methods we use slightly different notation for these two purposes.


### 9.4.3 Confidence interval for the median

The methods using the  $t$  distribution to calculate a confidence interval or perform a  $t$  test require the data to be approximately Normally distributed. If the data are skewed or have some other non- Normal distribution we can base our inference on the median rather than the mean. The median energy intake in the 11 women was the 6th highest intake, which Table 9.1 shows was  $6515 \mathrm{kJ}$ . We can calculate a confidence interval for a sample median without making any assumptions about the distribution of the data. The data are ranked in ascending order, and the ranks of the values defining the confidence interval are found from a table such as that given in Table B11. From that table the  $95\%$  confidence interval for the median is given by the data values with ranks 2 and 10; that is, from 5470 to  $8230 \mathrm{kJ}$ .

For small samples the confidence interval for the median is rather wide, here being nearly twice as wide as the confidence interval for the mean given earlier. For larger samples of data that have a Normal distribution the mean and median will be very similar as will their confidence intervals (although that for the median will tend to be wider). It is preferable to use the median if the data are not near to Normal.

I shall describe two methods for carrying out a non- parametric hypothesis test for a single sample, the sign test and the Wilcoxon signed rank sum test.


### 9.4.4 Sign test

If there were no difference on average between the sample values and the hypothesized specific value we would expect an equal number of observations above and below the specific value. We can thus see how likely it would be to have observed our data when the null hypothesis is true by calculating the probability of our observed frequencies above and below the specific value. This is precisely the same type of problem as, for example, calculating the probability of observing given numbers of people in a sample who are in blood group B. We thus use the Binomial distribution, or the Normal approximation to it, to evaluate the probability of the observed frequencies when the true probability of exceeding the expected intake,  $p$ , is  $\frac{1}{2}$ .In our example the hypothesized intake of interest was  $7725 \mathrm{kJ}$ . Two women had daily intakes above 7725 and nine were below. We use the general formula for a test statistic given in section 8.5:

In our example the hypothesized intake of interest was  $7725\mathrm{kJ}$  .Two women had daily intakes above 7725 and nine were below. We use the general formula for a test statistic given in section 8.5:

Here we are interested in the Binomial distribution with  $\begin{array}{r}{p = \frac{1}{2}} \end{array}$  and  $n = 11$  Our observed count is either  $r = 2$  or  $r = 9$  - it does not matter which we use because of the symmetry of the distribution when  $\begin{array}{r}{p = \frac{1}{2}} \end{array}$  . The expected count, assuming the null hypothesis is true, is  $n p = 11\times {\textstyle{\frac{1}{2}}} = 5.5$  . From section 4.9, the standard error of  $r$  is

$$
{\sqrt{n p(1-p)}}={\sqrt{11\times{\frac{1}{2}}\times{\frac{1}{2}}}}=1.658.
$$

We could use the exact Binomial distribution, but the Normal approximation to the Binomial is reasonable when  $p = \frac{1}{2}$  even for small samples, and is simpler to use. We calculate the test statistic,  $z$  ,as

$$
{\begin{array}{r l}&{z={\frac{r-n p}{\sqrt{n p(1-p)}}}}\\ &{\quad={\frac{9-5.5}{1.658}}}\\ &{\quad=2.11.}\end{array}}
$$

From Table B2 the two- sided tail area of the Normal distribution corresponding to  $z = 2.11$  is  $\mathbf{P} = 0.035$  . If we had used  $r = 2$  ,we would have arrived at  $z = - 2.11$  , which would give the same two- sided  $\mathbf{P}$  value. Thus the difference between the observed data and the recommended

value is statistically significant at about the  $3\%$  level, and we infer that the average daily intake of these women really is lower than the recommended level.

Two further comments are needed in relation to the sign test. Firstly, it is preferable to incorporate a continuity correction into the test. We use the continuity correction in several circumstances when a continuous distribution is used as an approximation to non- continuous data, as is the case here. The adjustment involves reducing the difference between the observed count  $r$  and the hypothesized value  $np$  by  $\frac{1}{2}$ . We write this as  $\left|r - np\right| - \frac{1}{2}$ , where the vertical bars indicate that we take the absolute value of  $r - np$ ; that is we ignore the sign if  $r - np$  is negative. Recalculating our test statistic with the continuity correction gives

$$
\begin{array}{l}{{z=\frac{\left|r-n p\right|-\frac{1}{2}}{\sqrt{n p(1-p)}}}}\\ {{=\frac{\left|9-5.5\right|-0.5}{1.658}}}\\ {{=1.81.}}\end{array}
$$

Inevitably the use of the continuity correction will reduce  $z$  and increase  $\mathbf{P}$ , but without the correction the calculations are a little too 'optimistic' in favour of rejecting the null hypothesis. Because we have a small sample the corrected value of  $z$  is quite a lot smaller, but in large samples the effect is minimal. From Table B2 a  $z$  value of 1.81 corresponds to a two- sided  $\mathbf{P}$  value of 0.07, so that this more correct version of the test gives a result that is not quite significant at the  $5\%$  level. The continuity correction should always be used for small samples and can be incorporated routinely.

Secondly, if any of the observations is exactly the same as the hypothesized value then we ignore that observation in the calculation. Thus the sample size for the sign test is the number of observations that differ from the hypothesized value.

The sign test is one of the most basic of hypothesis tests, and occurs in different guises as the solution to other problems, most notably as the McNemar test for comparing paired proportions (section 10.7.5).


### 9.4.5 The Wilcoxon signed rank sum test

The sign test considers only whether each observation is above or below the chosen value of interest. It is preferable to take some account of the magnitude of the observations and we can do this by using the Wilcoxon signed rank sum test. The method has three steps:

1. calculate the difference between each observation and the value of interest;

2. ignoring the signs of the differences, rank them in order of magnitude; 
3. calculate the sum of the ranks of all the negative (or positive) ranks, corresponding to the observations below (or above) the chosen hypothetical value.

Although this method makes no assumptions about the particular form of the distribution of the observations, it does assume that they come from a population with a symmetric distribution. This is not an important consideration for a single sample test (but see section 9.7.2).

For small samples (up to 25) P values can be obtained from Table B9. For larger samples the test statistic has an approximately Normal distribution, with mean  $n(n + 1) / 4$  and variance  $n(n + 1)(2n + 1) / 24$  . As with the sign test, zero differences are omitted from the calculations, so in this formula  $\pmb{n}$  is the number of non- zero differences, and so may be less than the sample size.

Table 9.2 shows the dietary intakes of 11 women from Table 9.1 together with the differences from the recommended intake. Also shown are the ranks of the differences, ignoring their signs. The sum of the ranks of the two observed intakes above the recommended  $7725\mathrm{~kJ}$  is  $3 + 5 = 8$  , so from Table B9 we get  $\mathbf{P}< 0.05$  . We could equally well have used the sum of the ranks  of  the  intakes  below  the  recommended  intake,  which  is  $1.5 + 1.5 + 4 + 6 + 7 + 8 + 9 + 10 + 11 = 58$  ,  which  from  Table B9  also gives  $\mathbf{P}< 0.05$  .  It  is  always  worth  checking  that  the  ranks  have  been

Table 9.2 Daily energy intake of 11 healthy women with rank order of differences (ignoring their signs) from the recommended intake of  

<table><tr><td>Subject</td><td>Daily energy intake (kJ)</td><td>Difference from 7725 kJ</td><td>Ranks of differences</td></tr><tr><td>1</td><td>5260</td><td>2465</td><td>11</td></tr><tr><td>2</td><td>5470</td><td>2255</td><td>10</td></tr><tr><td>3</td><td>5640</td><td>2085</td><td>9</td></tr><tr><td>4</td><td>6180</td><td>1545</td><td>8</td></tr><tr><td>5</td><td>6390</td><td>1335</td><td>7</td></tr><tr><td>6</td><td>6515</td><td>1210</td><td>6</td></tr><tr><td>7</td><td>6805</td><td>920</td><td>4</td></tr><tr><td>8</td><td>7515</td><td>210</td><td>1.5</td></tr><tr><td>9</td><td>7515</td><td>210</td><td>1.5</td></tr><tr><td>10</td><td>8230</td><td>-505</td><td>3</td></tr><tr><td>11</td><td>8770</td><td>-1045</td><td>5</td></tr></table>

calculated correctly, which is easy because the sum of all the ranks is  $n(n + 1) / 2$ . Here we have  $11 \times 12 / 2 = 66$  and also  $8 + 58 = 66$ .

An important general point is that we do not expect different tests to give the same answer when applied to the same data. They do not make the same assumptions and use different aspects of the observations. In general, however, two valid methods will lead to similar answers. In small samples, however, non- parametric methods are rather lacking in power and so, as in the above example, will tend to give a less significant (larger) P value than the equivalent parametric test.

In practice we usually perform only one analysis of a set of data, choosing between parametric or non- parametric alternatives. We usually use a parametric method unless there is some clear indication that it is not valid, that is if the underlying assumptions are not met.


## 9.5 TWO GROUPS OF PAIRED OBSERVATIONS

When we have more than one group of observations it is vital to distinguish the case where the data are paired from that where the groups are independent. Paired data arise when the same individuals are studied more than once, usually in different circumstances. Also, when we have two different groups of subjects who have been individually matched, for example in a matched pair case- control study, then we should treat the data as paired.

The dietary intake data analysed in the previous section come from a study in which the 11 women recorded their dietary intake for 60 consecutive days. They were unaware that the purpose of the study was to compare intake on the pre- and post- menstrual days of the menstrual cycle. The data in Table 9.1 already analysed were pre- menstrual dietary intakes. Table 9.3 shows both the pre- menstrual and post- menstrual dietary intakes for one cycle for the same women, from which we see that each woman's post- menstrual average daily intake was lower than her pre- menstrual intake.

With paired data we are interested in the average difference between the observations for each individual and the variability of these differences. We are thus interested in the variability of the within- subject differences rather than between- subject variation. In general we are not particularly interested in variation between subjects, and indeed such variability may obscure the effects that we are interested in. The strength of the paired design is that we can remove between- subject variability by looking only at within- subject differences, and these thus form the basis for the method of analysis to be described. By looking at differences we effectively reduce the analysis to a one sample problem, so that we can use very similar methods to those discussed in the previous section. Because we treat the within- subject differences as a single sample, it is these differences which

Table 9.3 Mean daily dietary intake over 10 pre-menstrual and 10 post-menstrual days (Manocha et al., 1986)  

<table><tr><td rowspan="2">Subject</td><td colspan="3">Dietary intake (kJ)</td></tr><tr><td>Pre-menstrual</td><td>Post-menstrual</td><td>Difference</td></tr><tr><td>1</td><td>5260</td><td>3910</td><td>1350</td></tr><tr><td>2</td><td>5470</td><td>4220</td><td>1250</td></tr><tr><td>3</td><td>5640</td><td>3885</td><td>1755</td></tr><tr><td>4</td><td>6180</td><td>5160</td><td>1020</td></tr><tr><td>5</td><td>6390</td><td>5645</td><td>745</td></tr><tr><td>6</td><td>6515</td><td>4680</td><td>1835</td></tr><tr><td>7</td><td>6805</td><td>5265</td><td>1540</td></tr><tr><td>8</td><td>7515</td><td>5975</td><td>1540</td></tr><tr><td>9</td><td>7515</td><td>6790</td><td>725</td></tr><tr><td>10</td><td>8230</td><td>6900</td><td>1330</td></tr><tr><td>11</td><td>8770</td><td>7335</td><td>1435</td></tr><tr><td>Mean</td><td>6753.6</td><td>5433.2</td><td>1320.5</td></tr><tr><td>SD</td><td>1142.1</td><td>1216.8</td><td>366.7</td></tr></table>

we require to have an approximately Normal distribution. There is no requirement for each set of data to be Normally distributed.


### 9.5.1 Confidence interval for the difference between means

Table 9.3 shows the difference in dietary intake between the pre- and post- menstrual days for each woman, and the mean and standard deviation of the differences. We can treat the differences as if they were a single sample of observations and use the methods introduced in section 9.4 for estimation and hypothesis testing.

Thus, we use the same  $t$  value corresponding to a tail area of 0.05 with 10 degrees of freedom, which is  $t_{0.975} = 2.228$  . The standard deviation of the differences between the pre- and post- menstrual days is 366.7, so the standard error of the mean difference is  $366.7 / \sqrt{11} = 110.6 \mathrm{kJ}$  . The  $95\%$  confidence interval for the mean difference is thus

$$
1320.5 - 2.228\times 110.6\qquad \mathrm{to}\qquad 1320.5 + 2.228\times 110.6
$$

or 1074.2 to  $1566.8 \mathrm{kJ}$  . The whole confidence interval is much greater than zero, indicating that we can be reasonably sure that, in general, dietary intake is much lower in the post- menstrual period. Note that this confidence interval is considerably narrower than that for the mean pre- menstrual intake (5986 to  $7521 \mathrm{kJ}$  ) because we have removed between- subject variability.


### 9.5.2 Paired t test

We can use the one sample  $t$  test to calculate a  $\mathbf{P}$  value for the comparison of means. Here we wish to compare the observed mean difference  $(\vec{d})$  of  $1320.5\mathrm{kJ}$  with a hypothetical value of zero, i.e. the null hypothesis is that pre- and post- menstrual dietary intake is the same. The  $t$  value is then given by

$$
\begin{array}{c}{{t=\frac{\vec{d}-0}{s e(\vec{d})}}}\\ {{=1320.5/110.6}}\\ {{=11.94}}\end{array}
$$

on 10 degrees of freedom. From Table B4 we can see that 11.94 is much larger than the  $\mathbf{P} = \mathbf{0.001}$  value of the  $t$  distribution, so that  $\mathbf{P}$  is considerably less than 0.001. It will usually suffice to write  $\mathbf{P}< 0.001$  . (The actual  $\mathbf{P}$  value is in fact 0.0000003. )


### 9.5.3 Non-parametric methods

We can also apply the one sample sign test to the differences between paired observations. For the data in Table 9.3 all 11 differences have the same sign, so the test statistic, with the continuity correction, is

$$
\frac{|11 - 5.5| - 0.5}{\sqrt{11\times0.5\times0.5}} = 5 / 1.658 = 3.02
$$

which, from Table B2, corresponds to  $\mathbf{P} = 0.003$

We can also apply a Wilcoxon test to paired data, again by working directly on the differences for each individual. In this form the test is called the Wilcoxon matched pairs signed rank sum test. Rather than illustrate the test on the same dietary data, for which the result is clear cut, I shall look at the method on some new data in section 9.7.2, where a drawback of the Wilcoxon test is illustrated.


## 9.6 TWO INDEPENDENT GROUPS OF OBSERVATIONS

The most common statistical analyses are probably those used for comparing two independent groups of observations. Most clinical trials yield data of this type, as do observational studies comparing different groups of subjects. For continuous data we can again use either parametric or non- parametric methods, and these will be described in turn.

With paired data we treated the differences between paired observations

as a single sample. The standard error of the mean difference, which was used for both the confidence interval and paired  $t$  test, was based on the differences within each subject, and was thus unaffected by the variability between subjects.

With independent groups of observations we are again interested in the mean difference between the groups, but the variability between subjects becomes important. Both the confidence interval and the two sample  $t$  tests are based on the assumption that each set of observations is sampled from a population with a Normal distribution, and that the variances of the two populations are the same. The assumption of Normality is familiar, and is dealt with in the same way as previously. The assumption of equal variances has not been met before. I shall show later how to examine this assumption formally, and discuss what to do when the sample variances are not similar.


### 9.6.1 Confidence interval for difference between means

The standard error of the mean of one group of observations is derived from the standard deviation of the data and hence from the variance. With two samples we are interested in the variance of the difference between the two means. It can be shown that the standard error we need is based on the average of the two variances, but giving more weight to the larger sample.

The required standard error is obtained from a more complicated formula than for the one sample case, but it involves only the mean, variance and sample size for each group. First we calculate the pooled variance,  $s^{2}$  , as

$$
s^{2} = \frac{(n_{1} - 1)s_{1}^{2} + (n_{2} - 1)s_{2}^{2}}{n_{1} + n_{2} - 2}
$$

where  $\pmb{s}_{1}$  and  $\pmb{s}_{2}$  are the standard deviations of the two groups of sizes  $\pmb{n}_{1}$  and  $\pmb{n}_{2}$  . Using  $\bar{x}_{1}$  and  $\bar{x}_{2}$  to denote the means of the two samples, and  $\pmb{s}$  as the pooled standard deviation, we have

$$
s e(\bar{x}_{1} - \bar{x}_{2}) = s \times \sqrt{\frac{1}{n_{1}} + \frac{1}{n_{2}}}.
$$

Each group contributes to the degrees of freedom associated with s, to give  $n_{1} + n_{2} - 2$  degrees of freedom. Having acquired the standard error of the difference between the means we can produce a confidence interval. The  $95\%$  confidence interval for the difference between the means is given by

$$
\bar{x}_{1} - \bar{x}_{2}\pm t_{0.975}\times s e(\bar{x}_{1} - \bar{x}_{2})
$$

where the value of  $t$  has  $n_{1} + n_{2} - 2$  degrees of freedom.

Table 9.4 24 hour total energy expenditure (MJ/day) in groups of lean and obese women (Prentice et al., 1986)  

<table><tr><td></td><td>Lean 
(n = 13)</td><td>Obese 
(n = 9)</td></tr><tr><td>6.13</td><td>8.79</td><td></td></tr><tr><td>7.05</td><td>9.19</td><td></td></tr><tr><td>7.48</td><td>9.21</td><td></td></tr><tr><td>7.48</td><td>9.68</td><td></td></tr><tr><td>7.53</td><td>9.69</td><td></td></tr><tr><td>7.58</td><td>9.97</td><td></td></tr><tr><td>7.90</td><td>11.51</td><td></td></tr><tr><td>8.08</td><td>11.85</td><td></td></tr><tr><td>8.09</td><td>12.79</td><td></td></tr><tr><td>8.11</td><td></td><td></td></tr><tr><td>8.40</td><td></td><td></td></tr><tr><td>10.15</td><td></td><td></td></tr><tr><td>10.88</td><td></td><td></td></tr><tr><td>Mean</td><td>8.066</td><td>10.298</td></tr><tr><td>SD</td><td>1.238</td><td>1.398</td></tr></table>

Table 9.4 shows the 24 hour energy expenditure of groups of lean and obese women. The obese group had a higher mean energy expenditure of 10.3 compared with 8.1 MJ/day for the lean group and the two standard deviations were very similar. The pooled standard deviation is

$$
\sqrt{\frac{12 \times 1.238^2 + 8 \times 1.398^2}{20}}
$$

$$
= 1.3044 \mathrm{MJ / day}.
$$

The standard error of the difference in mean intakes is given by

$$
\begin{array}{l}1.3044 \times \sqrt{\frac{1}{13} + \frac{1}{9}} \\ = 0.5656 \mathrm{MJ / day}. \end{array}
$$

The difference in the mean intakes of the two groups was 2.232 MJ/day. To construct the 95% confidence interval for the mean difference we need the value of  $t_{0.975}$  on 20 degrees of freedom, which Table B4 shows is 2.086. The 95% confidence interval for the mean difference in 24 hour energy expenditure between obese and lean women is thus

$$
2.232 - 2.086 \times 0.5656 \qquad \text{to} \qquad 2.232 + 2.086 \times 0.5656
$$

or 1.05 to 3.41 MJ/day.


### 9.6.2 Two sample t test

There is also a  $t$  test appropriate for comparing two independent groups of data. The two sample  $t$  test looks much the same as the single sample or paired  $t$  tests, the statistic being obtained from

$$
t = \frac{\bar{x}_{1} - \bar{x}_{2}}{s e(\bar{x}_{1} - \bar{x}_{2})}
$$

and compared with the  $t$  distribution with  $n_{1} + n_{2} - 2$  degrees of freedom. We have already calculated the standard error of the difference in the means as 0.5656 MJ/day, so we have  $t = 2.232 / 0.5656 = 3.95$  on 20 degrees of freedom, giving  $P< 0.001$  . We can say that the total energy expenditure in the obese women was highly significantly greater than that of the lean women.

Virtually all statistical computer packages include the two sample  $t$  test. but unfortunately very few will do the calculations if you have already calculated the mean and standard deviation. Thus if you wish to calculate a confidence interval or  $t$  test using summary statistics from a published paper you will probably have to perform the calculations by hand, using the equations given in the previous section.


### 9.6.3 Confidence interval for difference between medians

There is a non- parametric method for constructing a confidence interval for the difference between the medians of two groups of observations. It requires the restrictive assumption that the samples are from populations with distributions that are identical in shape, and differ only by a shift in location. (It is thus also a non- parametric confidence interval for the difference between two means.) This method is not widely used and is rather complicated to carry out, so details are not given here. The method is described by Campbell and Gardner (1989).


### 9.6.4 Non-parametric comparison of two groups - the Mann-Whitney test

There is a non- parametric alternative to the  $t$  test for comparing data from two independent groups. There are two derivations of the test, one due to Wilcoxon and the other to Mann and Whitney. It is better to call the method the Mann- Whitney test to avoid confusion with the paired test also due to Wilcoxon, although some people refer to the test as the Mann- Whitney- Wilcoxon test.

The Mann- Whitney test requires all the observations to be ranked as if they were from a single sample. Then the sum of the ranks in one group is calculated and a  $\mathbf{P}$  value found from Table B10. Table 9.5 shows the energy expenditure data treated in this way. The sums of the ranks in the

Table 9.5 Calculations for the Mann-Whitney  $U$  test on energy expenditure (EE) data (MJ/day) in Table 9.4  

<table><tr><td colspan="2">Lean (n = 13)</td><td colspan="2">Obese (n = 9)</td></tr><tr><td>Rank</td><td>EE</td><td>EE</td><td>Rank</td></tr><tr><td>1</td><td>6.13</td><td></td><td></td></tr><tr><td>2</td><td>7.05</td><td></td><td></td></tr><tr><td>3.5</td><td>7.48</td><td></td><td></td></tr><tr><td>3.5</td><td>7.48</td><td></td><td></td></tr><tr><td>5</td><td>7.53</td><td></td><td></td></tr><tr><td>6</td><td>7.58</td><td></td><td></td></tr><tr><td>7</td><td>7.90</td><td></td><td></td></tr><tr><td>8</td><td>8.08</td><td></td><td></td></tr><tr><td>9</td><td>8.09</td><td></td><td></td></tr><tr><td>10</td><td>8.11</td><td></td><td></td></tr><tr><td>11</td><td>8.40</td><td></td><td></td></tr><tr><td></td><td></td><td>8.79</td><td>12</td></tr><tr><td></td><td></td><td>9.19</td><td>13</td></tr><tr><td></td><td></td><td>9.21</td><td>14</td></tr><tr><td></td><td></td><td>9.68</td><td>15</td></tr><tr><td></td><td></td><td>9.69</td><td>16</td></tr><tr><td></td><td></td><td>9.97</td><td>17</td></tr><tr><td>18</td><td>10.15</td><td></td><td></td></tr><tr><td>19</td><td>10.88</td><td></td><td></td></tr><tr><td></td><td></td><td>11.51</td><td>20</td></tr><tr><td></td><td></td><td>11.85</td><td>21</td></tr><tr><td></td><td></td><td>12.79</td><td>22</td></tr><tr><td>Sum = 103</td><td></td><td>Sum = 150</td><td></td></tr></table>

two groups are 103 and 150. (We can check our calculations by noting that the sum of all ranks of  $N$  observations must be  $N(N + 1) / 2$ , which here is 253. ) We can now use two alternative statistics,  $T$  and  $U$ . The statistic  $T$  (due to Wilcoxon) is simply the sum of the ranks in the smaller group, 150 in our example. (Either group can be taken if they are of the same size.) The statistic  $U$  (due to Mann and Whitney) is more complicated, being calculated as

$$
\begin{array}{r}{U = n_{1}n_{2} + \frac{1}{2} n_{1}(n_{1} + 1) - T.} \end{array}
$$

The advantage of using  $U$  is that it is one of the few non- parametric statistics that has a useful interpretation.  $U$  is the number of all possible pairs of observations comprising one from each sample, say  $x_{i}$  and  $y_{j}$ , for which  $x_{i} < y_{j}$ . Thus if the sample sizes are  $n_{1}$  and  $n_{2}$  then  $U / n_{1}n_{2}$  is the proportion of all such pairs, and so is also the estimated probability that a new observation from the first population will be less than a new

observation sampled from the second population. For analysis by computer the Mann- Whitney  $U$  statistic is thus preferable because of its interpretation, but for hand calculation the Wilcoxon  $T$  statistic is much easier to obtain.

For small samples it is possible to evaluate the observed value of the test statistic by considering the distribution of all the possible sums of ranks with samples of size  $n_{1}$  and  $n_{2}$ . To take a simple example, if we have samples of sizes 2 and 5, there are only a small number of possible orderings of the seven observations. The ranks of the two values in the smaller group must be one of the following 21 combinations:

Each combination yields a sum of ranks as follows

If the null hypothesis is true, any one of these possibilities is equally likely because there is no difference between the groups. For any pair of sample sizes the same procedure can be used to get the distribution of possible rank sums, from which the probability of obtaining any particular rank sum (or a more extreme one) can be calculated. Thus we can calculate the range of values of the rank sum that is compatible with the null hypothesis at any level of significance. The  $\mathbf{P}$  values thus obtained are known as exact probabilities. In the above example, an observed rank sum of 5 would correspond to an exact one- sided  $\mathbf{P}$  value of  $4 / 21$ , or 0.19, so that the two- sided  $\mathbf{P}$  value is 0.38.

Table B10 gives these critical values of the statistic  $T$ , showing that with sample sizes of 9 and 13 the rank sum of 150 is outside the  $\mathbf{P} = 0.01$  range of expected rank sums under the null hypothesis but not outside the  $\mathbf{P} = 0.001$  range, so we write  $\mathbf{P}< 0.01$ .

For larger samples of about ten or more in each group the statistic  $T$  has an approximately Normal distribution with mean  $\mu_{T} = n_{S}(n_{S} + n_{L} + 1) / 2$  and standard deviation  $\sigma_{T} = \sqrt{n_{L}\mu_{T} / 6}$ , where  $n_{S}$  and  $n_{L}$  are the sample sizes in the smaller and larger group respectively. From these we can calculate the test statistic  $z$  as  $(T - \mu_{T}) / \sigma_{T}$  and refer to tables of the Normal distribution (Table B2).

It is reasonable to use the large sample approximation for the above example with sample sizes 9 and 13. The mean and standard deviation of the test statistic under the null hypothesis are given by

$$
\mu_{T} = 9(9 + 13 + 1) / 2 = 103.5
$$

and

$$
\sigma_{T} = \sqrt{13\times103.5 / 6} = 14.975
$$

giving

$$
\begin{array}{c}z = \frac{150 - 103.5}{14.975} \\ = 3.105, \end{array}
$$

which, from Table B2, corresponds to  $\mathbf{P} = 0.002$ . There is an equivalent large sample approximation for the statistic  $U$ ; details are given by Bland (1987, p. 223).

The Mann- Whitney test as described is based on the assumption that there are no tied ranks. If there are many identical data values complicated corrections should be applied to the large sample formula. Computer packages ought automatically to adjust for tied ranks, but not all do.

Non- parametric methods in computer programs may use the large sample Normal approximation, even for small samples. For small samples it is advisable to check the calculated statistic (if given) against the appropriate table. However, it is not always clear which statistic is given. For example, in Minitab (release 6.1)  $T$  is calculated for the first sample (not necessarily the smaller sample) but it is called  $W$ .


### 9.6.5 Unequal variances

Sometimes we wish to compare two groups of observations where the assumption of Normality is reasonable, but the variability in the two groups is markedly different. Two questions arise: how different do the variances have to be before we should not use the two sample  $t$  test, and what can we do if this happens?

The  $t$  test is known to be 'robust' in that it is little affected by moderate failure to meet the assumptions. It is not possible to say how different the variances in the two groups can be before we cannot use the  $t$  test. However, the  $t$  test is based on the assumption that the two population variances are the same, so we can test the null hypothesis that this is so, using the  $F$  test.

The  $F$  test or variance ratio test is very simple. Under the null hypothesis that two Normally distributed populations have equal variances we expect the ratio of the two sample variances to have a sampling distribution known as the  $F$  distribution. The variance ratio is the ratio of

the sample variances or the square of the ratio of the sample standard deviations. We calculate the variance ratio observed in our sample, by taking the larger standard deviation divided by the smaller, and look up the square of this value in Table B6. The distribution of the  $F$  statistic has two values of degrees of freedom, one corresponding to each variance.

Table 9.6 shows serum thyroxine measurements from 16 infants diag. nosed as hypothyroid. We wish to compare thyroxine levels in two groups defined by severity of symptoms, but the standard deviations are markedly different. The ratio of variances is  $(37.48 / 14.22)^{2} = 6.95$  . We use Table B6 to compare 6.95 with the  $F$  distribution with 6 and 8 degrees of freedom, the first value relating to the numerator (37.48) and the second to the denominator (14.22), and both being one less than the number of observations. Because we take the ratio of the larger variance to the smaller we consider only the upper tail of the  $F$  distribution. We get  $\mathbf{P}< 0.01$  , so it is unlikely that the two samples come from populations with the same variance.

We should not now use the two sample  $t$  test to compare the two means. We could instead use the Mann- Whitney test, but we could also use a modification of the  $t$  test for the case with unequal variances, known as the Welch test, which is not covered in this book (see Armitage and Berry. 1987, p. 110). If, however, the samples are large we can use the large sample Normal distribution methods described in section 8.4, for which there is no requirement that the groups have the same variance.

Table 9.6 Serum thyroxine level  $(\mathbf{nmol} / \mathbf{l})$  in 16 hypothyroid infants by severity of symptoms (Hulse et al., 1979)  

<table><tr><td></td><td>Slight or no symptoms (n = 9)</td><td>Marked symptoms (n = 7)</td></tr><tr><td rowspan="10">Mean</td><td>34</td><td>5</td></tr><tr><td>45</td><td>8</td></tr><tr><td>49</td><td>18</td></tr><tr><td>55</td><td>24</td></tr><tr><td>58</td><td>60</td></tr><tr><td>59</td><td>84</td></tr><tr><td>60</td><td>96</td></tr><tr><td>62</td><td></td></tr><tr><td>86</td><td></td></tr><tr><td>SD</td><td>14.22</td></tr></table>


## 9.7 ANALYSIS OF SKEWED DATA

The use of the  $t$  test is based on the assumption that the data for each group (with independent samples) or the differences (with paired samples) have an approximately Normal distribution, and for the two sample case we also require the two groups to have similar variances. We sometimes find that at least one requirement is not met. When the data are skewed we can either use a non- parametric method, or try a transformation of the raw data.

The most useful transformation is the logarithmic transformation. It has the special property that it is possible to get a confidence interval for the difference between the groups that relates to the original data. No other transformation has this property. Fortunately taking logs is very often successful in removing skewness and also making variances more equal.

I shall illustrate the paired samples analysis using data from a study of

Table 9.7 Numbers of  $\mathbf{T_{4}}$  and  $\mathbf{T_{8}}$  cells  $\mathbf{\dot{m}m^{3}}$  in blood samples from 20 patients in remission from Hodgkin's disease and 20 patients in remission from disseminated malignancies (Shapiro et al., 1986)  

<table><tr><td colspan="2">Hodgkin&#x27;s disease</td><td colspan="2">Non-Hodgkin&#x27;s disease</td><td></td></tr><tr><td>T4</td><td>T8</td><td>T4</td><td>T8</td><td></td></tr><tr><td>396</td><td>836</td><td>375</td><td>340</td><td></td></tr><tr><td>568</td><td>978</td><td>375</td><td>330</td><td></td></tr><tr><td>1212</td><td>1678</td><td>752</td><td>627</td><td></td></tr><tr><td>171</td><td>212</td><td>208</td><td>153</td><td></td></tr><tr><td>554</td><td>670</td><td>151</td><td>101</td><td></td></tr><tr><td>1104</td><td>1335</td><td>116</td><td>72</td><td></td></tr><tr><td>257</td><td>272</td><td>736</td><td>449</td><td></td></tr><tr><td>435</td><td>446</td><td>192</td><td>108</td><td></td></tr><tr><td>295</td><td>262</td><td>315</td><td>177</td><td></td></tr><tr><td>397</td><td>340</td><td>1252</td><td>575</td><td></td></tr><tr><td>288</td><td>236</td><td>675</td><td>318</td><td></td></tr><tr><td>1004</td><td>786</td><td>700</td><td>320</td><td></td></tr><tr><td>431</td><td>311</td><td>440</td><td>200</td><td></td></tr><tr><td>795</td><td>449</td><td>771</td><td>289</td><td></td></tr><tr><td>1621</td><td>811</td><td>688</td><td>263</td><td></td></tr><tr><td>1378</td><td>686</td><td>426</td><td>157</td><td></td></tr><tr><td>902</td><td>412</td><td>410</td><td>140</td><td></td></tr><tr><td>958</td><td>286</td><td>979</td><td>310</td><td></td></tr><tr><td>1283</td><td>336</td><td>377</td><td>108</td><td></td></tr><tr><td>2415</td><td>936</td><td>503</td><td>163</td><td></td></tr><tr><td>Mean</td><td>823.2</td><td>613.9</td><td>522.1</td><td>260.0</td></tr><tr><td>SD</td><td>566.4</td><td>397.9</td><td>293.0</td><td>154.7</td></tr></table>

lymphocyte abnormalities in patients in remission from Hodgkin's disease or diverse, disseminated malignancies (called the non- Hodgkin's disease group). There were 20 patients in each group, but no pairing between the groups. Table 9.7 shows the numbers of  $\mathbf{T_{4}}$  and  $\mathbf{T_{8}}$  cells per  $\mathbf{m}\mathbf{m}^{3}$  in their blood. As well as the actual levels of  $\mathbf{T_{4}}$  and  $\mathbf{T_{8}}$  cells, the authors were particularly interested in the ratio of the numbers of  $\mathbf{T_{4}}$  cells (helper cells) to  $\mathbf{T_{8}}$  cells (suppressor cells), so the data are tabulated in ascending order of the ratio  $\mathbf{T_{4}} / \mathbf{T_{8}}$  within each group. Table 9.7 also shows the mean and standard deviation of each group of observations. The standard deviations are all greater than half the mean, strongly suggesting (for variables where negative values are impossible) that the data are skewed. Also the standard deviations are larger for the larger means, which suggests that a log

![](../images/09_Comparing_groups_continuous_data/img2.jpg)  
Figure 9.2 Histograms of  $\mathbf{T_{4}}$  and  $\mathbf{T_{8}}$  (cells/mm³) in 20 patients in remission from Hodgkin's disease and 20 patients in remission from disseminated malignancies (non-Hodgkin's disease).

![](../images/09_Comparing_groups_continuous_data/img3.jpg)  
Figure 9.3 Histograms of  $\log_{e}\mathbf{T_{4}}$  and  $\log_{e}\mathbf{T_{8}}$

transformation may be successful both in removing skewness and making the variability more similar.

Figure 9.2 shows histograms of the raw data, clearly showing the skewness and unequal scatter. Figure 9.3 shows the success of the log transformation in producing data that are plausibly Normal and have similar standard deviations. Some of these data were shown graphically in Figure 7.1. Figure 9.4 shows that log transformation has also made the  $\mathbf{T}_{4} - \mathbf{T}_{8}$  differences more Normal, especially in the non- Hodgkin's disease group.

(a) Raw data

Hodgkin's disease Non- Hodgkin's disease (n=20) (n=20) Lower limit of interval  $\mathbf{T}_{4} - \mathbf{T}_{8}$ $\mathbf{T}_{4} - \mathbf{T}_{8}$

- 600 \*\*\*

- 400

- 200

0

\*\*\*\*

200

400

600

800

1000

1200

1400

1500

Mean

SD

(b) Log data

- 0.75

- 0.50

- 0.25

0.00

0.25

0.50

0.50

0.75

1.00

1.25

Mean

SD

Figure 9.4 Histograms of (a)  $\mathbf{T}_{4} - \mathbf{T}_{8}$  and (b)  $\log_{\mathrm{e}}\mathbf{T}_{4} - \log_{\mathrm{e}}\mathbf{T}_{8}$


### 9.7.1 Parametric analysis

#### (a) Confidence Interval

We can use the paired  $t$  test to compare the logs of the numbers of  $\mathbf{T}_{4}$  and  $\mathbf{T}_{8}$  cells in the Hodgkin's disease group and calculate a confidence interval,

using the methods given earlier. From Figure 9.4 the mean and standard deviation of the differences between the  $\log_{e}\mathbf{T}_{4}$  and  $\log_{e}\mathbf{T}_{8}$  counts are 0.25 and 0.569, so the standard error of the mean is  $0.569 / \sqrt{20} = 0.127$ . The value of  $t_{0.975}$  on 19 degrees of freedom is 2.093, so the  $95\%$  confidence interval for the mean difference between  $\log \mathbf{T}_{4}$  and  $\log \mathbf{T}_{8}$  cell counts in patients with Hodgkin's disease is given by

$$
0.25 - 2.093 \times 0.127 \qquad \text{to} \qquad 0.25 + 2.093 \times 0.127
$$

or  $- 0.016$  to 0.516.

This confidence interval is for  $\log \mathbf{T}_{4} - \log \mathbf{T}_{8}$ , but we are usually more interested in a confidence interval relating to the scale of the original data. We can do this because the difference between the logarithms of two values is exactly the same as the logarithm of their ratio, i.e.  $\log X - \log Y = \log (X / Y)$ . It follows that the antilog of the mean of the log differences will be an estimate of the geometric mean of the ratio of the variables. The mean value of  $\log \mathbf{T}_{4} - \log \mathbf{T}_{8}$  was 0.25, so that the geometric mean of  $\mathbf{T}_{4} / \mathbf{T}_{8}$  is given by  $\mathrm{e}^{0.25} = 1.28$ . Further, we can 'back- transform' our confidence interval for the mean log difference to get a confidence interval for the geometric mean of the ratio  $\mathbf{T}_{4} / \mathbf{T}_{8}$ . The  $95\%$  confidence interval becomes  $\mathrm{e}^{- 0.016}$  to  $\mathrm{e}^{0.516}$ , or 0.98 to 1.67. Thus we can be  $95\%$  sure that on average the ratio of  $\mathbf{T}_{4}$  to  $\mathbf{T}_{8}$  blood cell counts in patients in remission from Hodgkin's disease is between 0.98 to 1.67, with 1.28 as our best estimate.

It is very reasonable to express results for skewed data in terms of ratios. Indeed, it was the  $\mathbf{T}_{4} / \mathbf{T}_{8}$  ratio that the researchers (Shapiro et al., 1986) were interested in. Although not in the original units, the back- transformed confidence interval for the ratio is directly related to the original data in an easily interpretable way. No other transformation of data other than taking logs allows back- transformation. Confidence intervals in transformed units are not easily interpretable, so it is a major disadvantage of other transformations, such as taking square roots, that it is not possible to obtain meaningful confidence intervals.


#### (b) Paired  $t$  test

The paired  $t$  test of the  $\log \mathbf{T}_{4}$  and  $\mathbf{T}_{8}$  data gives  $t = 0.25 / 0.127 = 1.97$  for which we have  $\mathbf{P} = 0.07$ . The data thus suggest that  $\mathbf{T}_{8}$  cell counts are lower than  $\mathbf{T}_{4}$  among patients in remission from Hodgkin's disease. although the difference is not quite significant at the  $5\%$  level.


#### (c) Comment

A similar approach is used for comparing independent groups. For example,  $\mathbf{T}_{4}$  counts in the two groups of patients are compared using the confidence interval and two sample  $t$  test described in sections 9.6.1 and 9.6.2. The principle of analysing skewed data by taking logs applies equally

to more complex analyses described later in this chapter and in subsequent chapters. It will not be illustrated for each method.


### 9.7.2 Non-parametric analysis

The non- parametric equivalent of the paired  $t$  test is the Wilcoxon matched pairs signed rank sum test, which we can use to perform a non- parametric analysis of the raw  $\mathbf{T_{4}}$  and  $\mathbf{T_{8}}$  data given in Table 9.7. This test is identical to the one- sample Wilcoxon signed rank sum test described in section 9.4.5, where we treat the differences between the paired values as our sample for calculating the ranks. The calculations are shown in Table 9.8. We can look up either the sum of the ranks of negative differences (63) or positive differences (147) in Table B9, giving  $\mathbf{P} > 0.10$ .

Table 9.8 Calculations for Wilcoxon matched pairs signed rank sum test to compare  $\mathbf{T_{4}}$  and  $\mathbf{T_{8}}$  cell counts in the Hodgkin's disease group  

<table><tr><td>Difference 
T4 - T8 
(cells/mm3)</td><td>Absolute difference 
T4 - T8</td><td>Rank</td></tr><tr><td>-440</td><td>440</td><td>13</td></tr><tr><td>-410</td><td>410</td><td>12</td></tr><tr><td>-466</td><td>466</td><td>14</td></tr><tr><td>-41</td><td>41</td><td>4</td></tr><tr><td>-116</td><td>116</td><td>7</td></tr><tr><td>-231</td><td>231</td><td>10</td></tr><tr><td>-15</td><td>15</td><td>2</td></tr><tr><td>-11</td><td>11</td><td>1</td></tr><tr><td>33</td><td>33</td><td>3</td></tr><tr><td>57</td><td>57</td><td>6</td></tr><tr><td>52</td><td>52</td><td>5</td></tr><tr><td>218</td><td>218</td><td>9</td></tr><tr><td>120</td><td>120</td><td>8</td></tr><tr><td>346</td><td>346</td><td>11</td></tr><tr><td>810</td><td>810</td><td>18</td></tr><tr><td>692</td><td>692</td><td>17</td></tr><tr><td>490</td><td>490</td><td>15</td></tr><tr><td>1479</td><td>1479</td><td>20</td></tr><tr><td>672</td><td>672</td><td>16</td></tr><tr><td>947</td><td>947</td><td>19</td></tr></table>

Sum of ranks of negative differences  $= 63$  Sum of ranks of positive differences  $= 147$

Table 9.9 Calculations for Wilcoxon matched pairs test to compare  $\log \mathbf{T_{4}}$  and  $\log \mathbf{T_{8}}$  

<table><tr><td>Difference logT4 - logT8</td><td>Absolute difference</td><td>Rank</td><td>Rank of raw data</td></tr><tr><td>-0.747</td><td>0.747</td><td>16</td><td>13</td></tr><tr><td>-0.543</td><td>0.543</td><td>12</td><td>12</td></tr><tr><td>-0.325</td><td>0.325</td><td>10</td><td>14</td></tr><tr><td>-0.215</td><td>0.215</td><td>8</td><td>4</td></tr><tr><td>-0.190</td><td>0.190</td><td>5.5</td><td>7</td></tr><tr><td>-0.190</td><td>0.190</td><td>5.5</td><td>10</td></tr><tr><td>-0.057</td><td>0.057</td><td>2</td><td>2</td></tr><tr><td>-0.025</td><td>0.025</td><td>1</td><td>1</td></tr><tr><td>0.119</td><td>0.119</td><td>3</td><td>3</td></tr><tr><td>0.155</td><td>0.155</td><td>4</td><td>6</td></tr><tr><td>0.199</td><td>0.199</td><td>7</td><td>5</td></tr><tr><td>0.245</td><td>0.245</td><td>9</td><td>9</td></tr><tr><td>0.326</td><td>0.326</td><td>11</td><td>8</td></tr><tr><td>0.571</td><td>0.571</td><td>13</td><td>11</td></tr><tr><td>0.693</td><td>0.693</td><td>14</td><td>18</td></tr><tr><td>0.698</td><td>0.698</td><td>15</td><td>17</td></tr><tr><td>0.784</td><td>0.784</td><td>17</td><td>15</td></tr><tr><td>0.948</td><td>0.948</td><td>18</td><td>20</td></tr><tr><td>1.209</td><td>1.209</td><td>19</td><td>16</td></tr><tr><td>1.340</td><td>1.340</td><td>20</td><td>19</td></tr></table>

Sum of ranks of negative differences  $= 60$  Sum of ranks of positive differences  $= 150$

It is a peculiarity of the Wilcoxon matched pairs test that, alone among the commonly used non- parametric methods, the result can be affected by transforming the data. If we take logs of  $\mathbf{T_{4}}$  and  $\mathbf{T_{8}}$  before calculating the ranks of the differences we may get a different result. Because of this possibility some statisticians reject this test in favour of the sign test, while others suggest that the data should be transformed if the raw data show larger differences for larger data values, as shown by a plot of  $X - Y$  against  $(X + Y) / 2$ . In fact, as noted for the single sample test (section 9.4.5), the method is based on the assumption that the differences have a symmetric distribution. A transformation should therefore be used only if it makes the distribution of the differences more symmetric.

Figure 9.4 showed that the distributions of the differences  $\mathbf{T_{4}} - \mathbf{T_{8}}$  are skewed, while those for  $\log \mathbf{T_{4}} - \log \mathbf{T_{8}}$  are more symmetric. Table 9.9 shows the differences between the log values and the Wilcoxon test applied to  $\log \mathbf{T_{4}}$  and  $\log \mathbf{T_{8}}$ . The rank sums are slightly different from those obtained before, but the  $\mathbf{P}$  value of 0.10 is a similar result in this case. However, comparison of the ranks obtained from the log data and from the raw data (in Table 9.9) shows that there are some quite substantial differences in the rankings for individual patients. Because the Wilcoxon test is based on the assumption of symmetry of the differences between pairs of observations, it is preferable for these data to use the log transformation.

The use of transformations in conjunction with non- parametric methods is unappealing to some people, who feel that the sign test is probably the preferable non- parametric method for analysing paired data. Not all non- parametric or distribution- free methods are completely free of assumptions about the distribution, however, and the Wilcoxon paired test is preferable to the sign test when the assumption of symmetry is plausible.


## 9.8 THREE OR MORE INDEPENDENT GROUPS OF OBSERVATIONS

Most of this chapter so far has related to the analysis of two sets of observations, either paired data for a single sample of individuals or data from two independent samples. These ideas extend to situations where we have three or more sets of observations, either from a single sample or from independent samples. In this section I shall consider only independent groups. The case where several measurements are taken on each individual in a single sample is considered in Chapter 12.

With several groups of observations it is obviously possible to compare each pair of groups using  $t$  tests, but this is not a good approach. It is far better to use a single analysis that enables us to look at all the data in one go, and the method we use is called one way analysis of variance (sometimes abbreviated to anova). The methods introduced in this section, both parametric and non- parametric, can all be used when there are only two groups of observations and will give identical results to the two sample methods already described. The two sample  $t$  test is, for example, a special case of one way analysis of variance. As its name implies, one way analysis of variance is the simplest type which is used when there is a single way of classifying individuals. When there are two factors classifying the observations we need two way analysis of variance, and so on. Some more complicated analyses are described in section 12.3.

The analyses covered in this section are better done by computer - we are reaching the limit of what is practicable for 'hand calculation'. Although the formulae will be given for the methods described in this section and in some subsequent chapters, the mathematical details will mostly be in separate sections, and I shall assume that a computer is used for the main analysis.


### 9.8.1 One way analysis of variance

The principle behind analysis of variance is to partition the total variability of a set of data into components due to different sources of variation. For example, the variability of the energy expenditure data in Table 9.4 could be partitioned into that due to variation between individuals within each group, and that due to any systematic difference between the groups. Indeed, because our null hypothesis is that there is no difference between the groups, the test is based on a comparison of the observed variation between the groups (i.e. between their means) with that expected from the observed variability between subjects. The comparison takes the general form of an  $\pmb{F}$  test to compare variances, but for two groups the  $t$  test leads to exactly the same answer. The samples do not all have to be the same size.

Analysis of variance should preferably be performed using a statistical computer package, but the method of calculation is given in section 9.9. A statistical package will produce the numerical results, but it is important to understand the principles involved.

1. The analysis is based on the assumption that the samples come from Normally distributed populations with the same standard deviation (or variance). Normally and equal variance should not be assumed, but should be verified, as described in (5) below.

2. Because we assume that the samples are from populations with the same variance, the variance within each group is an estimate of the population variance. We thus pool the sample variances (in the same way as we did for the two sample  $t$  test) to get an estimate of the population variance.

3. We can use the pooled estimate of variance to calculate a confidence interval for the difference between any pair of means.

4. We can perform a hypothesis test based on the null hypothesis that the samples are from populations with the same mean and variance. We can thus compare the variation among the observed sample means with what we would expect from random samples if the null hypothesis was true. In other words, we can calculate the probability of observing such variability among means of samples drawn at random from the same population. The comparison takes the form of the ratio of the variance estimated from the means of the groups (the between group variation) and the variance between the individuals within the groups. As we saw earlier, we use tables of the  $\pmb{F}$  distribution to test the equality of two variances.

5. After carrying out the analysis of variance we should examine the variation of the individual observations around the mean of their sample. For each individual the mean of their group is the value fitted by the model, and the difference between the observed and fitted values is called a residual. It is the variance of these residuals that we use as our estimate of between subject variability, against which we evaluate the between group variance. We can construct a Normal plot of the residuals to assess the assumption of Normality. If the Normal plot is unsatisfactory, we must reanalyse the data, perhaps after transforming the data or by using a non- parametric alternative.

Another way of viewing the hypothesis test associated with analysis of variance is that we are comparing two alternative statistical models. In one the mean and standard deviation are the same in each population, while in the other the means are different (and equal to the observed sample means) but the standard deviations are again the same. The  $F$  test assesses the plausibility of the first model. If the between group variability is greater than expected (with, say,  $\mathbf{P}< 0.05$ ) we will prefer the second model, in which the means of the groups differ.

If we have only two groups the analysis of variance is exactly equivalent to the  $t$  test for two independent groups. Thus the  $F$  test yields the same  $\mathbf{P}$  value as the  $t$  test. The numerator in the variance ratio has just one degree of freedom and we have the relation  $F = t^{2}$ , as can be seen from Tables B4 and B6.


### 9.8.2 Example

Twenty- two patients undergoing cardiac bypass surgery were randomized to one of three ventilation groups:

Group I Patients received a  $50\%$  nitrous oxide and  $50\%$  oxygen mixture continuously for 24 hours;

Group II Patients received a  $50\%$  nitrous oxide and  $50\%$  oxygen mixture only during the operation;

Group III Patients received no nitrous oxide but received  $35 - 50\%$  oxygen for 24 hours.

Table 9.10 shows red cell folate levels for the three groups after 24 hours' ventilation. We wish to compare the three groups, and test the null hypothesis that the three groups have the same red cell folate levels.

Examination of the data does not reveal any obvious outliers and the data in each group look plausible samples from a Normal distribution. These attributes are more easily seen from Figure 9.5 than Table 9.10. The standard deviation in group I is rather higher than those in the other groups, but moderate variability is not a problem, especially when the samples are small. In general, however, the assumption that the groups come from populations with the same variance is important. Bartlett's test is an extension of the  $F$  test (described in section 9.6.5) for assessing the null hypothesis that more than two samples come from populations with

208 Comparing groups - continuous data

Table 9.10 Red cell folate levels  $(\mu \mathrm{g} / 1)$  in three groups of cardiac bypass patients given different levels of nitrous oxide ventilation (Amess et al., 1978)  

<table><tr><td colspan="2">Group I (n = 8)</td><td>Group II (n = 9)</td><td>Group III (n = 5)</td></tr><tr><td colspan="2">243</td><td>206</td><td>241</td></tr><tr><td colspan="2">251</td><td>210</td><td>258</td></tr><tr><td colspan="2">275</td><td>226</td><td>270</td></tr><tr><td colspan="2">291</td><td>249</td><td>293</td></tr><tr><td colspan="2">347</td><td>255</td><td>328</td></tr><tr><td colspan="2">354</td><td>273</td><td></td></tr><tr><td colspan="2">380</td><td>285</td><td></td></tr><tr><td colspan="2">392</td><td>295</td><td></td></tr><tr><td colspan="2"></td><td>309</td><td></td></tr><tr><td>Mean</td><td>316.6</td><td>256.4</td><td>278.0</td></tr><tr><td>SD</td><td>58.7</td><td>37.1</td><td>33.8</td></tr></table>

![](../images/09_Comparing_groups_continuous_data/img4.jpg)  
Figure 9.5 Red cell folate levels in three groups of cardiac bypass patients (data 1 Table 9.10).

the same variance. Some computer programs incorporate this test. Although it is not very powerful (see Armitage and Berry (1987, p. 209) for details).

The analysis of variance calculations are shown in Table 9.11. The total variability of the data set is measured by the total sum of squares, which based on the sum of the squares of the differences of each of the 22 observations from the overall mean. This total is partitioned into (a) the within groups sum of squares, calculated as the sum of squares of the difference between each observation and the mean of its relevant group, and (b) the between groups sum of squares, which is based on the sum of squares of the difference between the mean of each group and the overall mean. Each sum of squares is converted into an estimated variance (known as a mean square) by dividing by its degrees of freedom. Following the usual principle that the degrees of freedom for a variance are one less than the number of observations, there are  $3 - 1 = 2$  degrees of freedom between groups and  $7 + 8 + 4 = 19$  degrees of freedom within groups. As Table 9.11 shows, the sums of squares and degrees of freedom add up to the values that are obtained if we consider the data as a single sample.

Table 9.11 Analysis of variance table for data in Table 9.10  

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sums of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Between groups</td><td>2</td><td>15 515.88</td><td>7757.9</td><td>3.71</td><td>0.04</td></tr><tr><td>Within groups</td><td>19</td><td>39 716.09</td><td>2090.3</td><td></td><td></td></tr><tr><td>Total</td><td>21</td><td>55 231.97</td><td></td><td></td><td></td></tr></table>

Under the null hypothesis that all the groups have the same mean and variance we expect the between groups variance and the within groups variance to be the same, so we expect the ratio of the variances to be 1. We can use the  $F$  distribution to compare the variances and so evaluate the null hypothesis. The two variances are 7757.9 and 2090.3, and their ratio is 3.71. In other words, the observed variance among the groups is 3.71 times what we would expect if the null hypothesis were true. Comparing 3.71 with the  $F$  distribution with 2 and 19 degrees of freedom given in Table B6, we find  $\mathbf{P}< 0.05$  . (A more exact value is  $\mathbf{P} = 0.04.$

A last point to note from Table 9.11 is that the square root of the within group mean square is called the residual standard deviation  $(s_{res})$  because it is the standard deviation of the residuals. The residual standard deviation is also the pooled within groups standard deviation (analogous to that calculated for the two sample  $t$  test) from which we can derive confidence intervals.


### 9.8.3 Confidence intervals

A confidence interval can be constructed for the mean of any group in the usual way, except that the standard error we use is based on the residual standard deviation. Thus, if there are  $n_{1}$  observations in the group of

interest with a mean of  $\bar{x}_{1}$ , the standard error of the mean is given by

$$
se(\bar{x}_{1}) = s_{res} / \sqrt{n_{1}}.
$$

The  $95\%$  confidence interval is given by

$$
\bar{x}_{1} - t_{0.975} \times se(\bar{x}_{1}) \qquad \text{to} \qquad \bar{x}_{1} + t_{0.975} \times se(\bar{x}_{1})
$$

where the  $t$  value has the number of degrees of freedom associated with the residual in the analysis of variance table.

Similarly, a confidence interval for the difference between any two means, say  $\bar{x}_{1}$  and  $\bar{x}_{2}$ , requires the standard error of  $\bar{x}_{1} - \bar{x}_{2}$ , which is given by

$$
se(\bar{x}_{1} - \bar{x}_{2}) = s_{res} \times \sqrt{\frac{1}{n_{1}} + \frac{1}{n_{2}}}.
$$

The  $95\%$  confidence interval for the difference between the two means is thus given by

$$
(\bar{x}_{1} - \bar{x}_{2}) - t_{0.975} \times se(\bar{x}_{1} - \bar{x}_{2}) \quad \text{to} \quad (\bar{x}_{1} - \bar{x}_{2}) + t_{0.975} \times se(\bar{x}_{1} - \bar{x}_{2})
$$

where the  $t$  value again has the residual degrees of freedom.

For example, we can produce a confidence interval for the difference between groups I and II in Table 9.10. The difference in mean red cell folate levels was  $316.6 - 256.4 = 60.2 \mu \mathrm{g} / \mathrm{l}$ . The residual standard deviation is  $\sqrt{2090.3} = 45.72$ , so the standard error of the difference in means is  $45.72 \times \sqrt{\frac{1}{8} + \frac{1}{9}} = 22.22$ . The value of  $t_{0.975}$  with 19 degrees of freedom is found (from Table B4) to be 2.093, so the  $95\%$  confidence interval for the difference in means is

$$
60.2 - 2.093 \times 22.22 \qquad \text{to} \qquad 60.2 + 2.093 \times 22.22
$$

or 13.7 to  $106.7 \mu \mathrm{g} / \mathrm{l}$ .


### 9.8.4 Multiple comparisons

With two groups the interpretation of a significant difference is reasonably straightforward, but how do we interpret significant variation among the means of three or more groups? Further analysis is required to find out how the means differ, for example whether one group differs from all the others. If the groups have a clear ordering, for example when different doses of a drug are compared, there is a straightforward approach which will be described in the next section. When the groups are not ordered. however, there is no clearly best approach to investigate variation among the groups. Note that you should only investigate differences between individual groups when the overall comparison of groups in the analysis of variance is significant unless certain comparisons were intended in advance of the analysis.

One possibility is to compare each pair of means in turn, or perhaps just those pairs of interest. The difficulty here is that multiple significance testing gives a high probability of finding a significant difference just by chance. Each test has a  $5\%$  chance of a false positive result when there is no real difference (a Type I error) so if we have, say, four groups and perform all six paired tests the probability of at least one false positive result is very much greater than  $5\%$  . Several methods have been proposed to deal with this problem, with strange names such as Bonferroni, Newman- Keuls, Duncan and Scheffe. Each method is aimed at controlling the overall Type I error rate at no more than  $5\%$  (or some other specified level).

The disadvantage of all of these methods is that they are 'conservative', in that they err on the side of safety (non- significance). It can be disconcerting to find that, although the  $F$  test in the analysis of variance is statistically significant, no pair of means is significantly different.

There is no simple nor totally satisfactory solution to these problems, but I recommend the following strategy when the groups do not have any natural order:

1. Decide in advance of the analysis which groups you are particularly interested in comparing (the fewer the better);

2. Perform modified  $t$  tests to compare the pairs of groups of interest, using the Bonferroni (or some other) method to adjust the  $\mathbf{P}$  values.

The modified  $t$  test is based on the pooled estimate of variance from all the groups (which is the residual variance in the anova table), not just the pair being considered. So  $t$  is calculated as

$$
t = \frac{\bar{x}_{1} - \bar{x}_{2}}{s e(\bar{x}_{1} - \bar{x}_{2})}
$$

where  $s e(\bar{x}_{1} - \bar{x}_{2})$  is as given in the previous section.

If we perform  $k$  paired comparisons, then we should multiply the  $\mathbf{P}$  value obtained from each test by  $k$  ; that is, we calculate  $\mathbf{P}^{\prime} = k\mathbf{P}$  with the restriction that  $\mathbf{P}^{\prime}$  cannot exceed 1. This simple adjustment is known as the Bonferroni method. For small numbers of comparisons (say up to five) its use is reasonable, but for large numbers it is highly conservative. However, I do not recommend that large numbers of comparisons are performed, which would suggest poorly specified research objectives. Statistical packages may offer different multiple comparison procedures, such as Duncan's multiple range test. These all work in a similar way, but are less conservative than the Bonferroni method.

Returning to the red cell folate data in Tables 9.10 and 9.11, the residual standard deviation was  $\sqrt{2090.3} = 45.72$ . A modified  $t$  test to compare groups I and II is performed by calculating

212 Comparing groups - continuous data

$$
t = \frac{316.6 - 256.4}{45.72\times{\sqrt{\frac{1}{8} + \frac{1}{9}}}}
$$

If we are comparing each pair of groups we will make three comparisons. The above  $t$  value of 2.71 corresponds to  $\mathbf{P}< 0.02$  (Table B4), with an exact value of  $\mathbf{P} = 0.014$  . The corrected  $\mathbf{P}$  value is  $\mathbf{P}^{\prime} = 0.014\times 3 = 0.042$  so it is just significant at the  $5\%$  level after adjustment. Neither of the other comparisons is significant. The main explanation for the difference between the groups that was identified in the analysis of variance (Table 9.11) is thus the difference between groups I and II.


### 9.8.5 Ordered groups

When the groups are ordered it is not reasonable to compare each pair of groups, but rather we should study the possibility that there is a trend across groups. For many purposes it will suffice to consider whether there is a linear trend.

Table 9.12 shows the mean and standard deviation of serum trypsin levels in healthy volunteers divided into six age groups. We can carry out one way analysis of variance from these summary statistics without having the raw observations, using the formulae given in section 9.9, to get the results shown in Table 9.13. (Unfortunately, very few statistical packages will perform analysis of variance using means and standard deviations that are already calculated.) Clearly there is highly significant variation among the six age groups. However, we can go further by 'partitioning' the variability between groups into components. Here we would be more interested in whether there was a linear trend, that is whether serum trypsin values tend to rise at a constant rate with increasing age.

Table 9.12 Serum levels of immunoreactive trypsin in healthy volunteers divided into six age groups (based on data given by Koehn and Mostbeck, 1981)  

<table><tr><td rowspan="2"></td><td colspan="6">Age</td></tr><tr><td>10-19</td><td>20-29</td><td>30-39</td><td>40-49</td><td>50-59</td><td>60-69</td></tr><tr><td>Number of subjects</td><td>32</td><td>137</td><td>38</td><td>44</td><td>16</td><td>4</td></tr><tr><td>Mean (ng/ml)</td><td>128</td><td>152</td><td>194</td><td>207</td><td>215</td><td>218</td></tr><tr><td>Standard deviation 
(ng/ml)</td><td>50.9</td><td>58.5</td><td>49.3</td><td>66.3</td><td>60.0</td><td>14.0</td></tr></table>

Table 9.13 One way analysis of variance of data in Table 9.12  

<table><tr><td>Source of variation</td><td>df</td><td>Sums of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Between groups</td><td>5</td><td>224 103</td><td>44 820.6</td><td>13.5</td><td>&amp;lt; 0.0001</td></tr><tr><td>Within groups</td><td>265</td><td>879 272</td><td>3 318.0</td><td></td><td></td></tr><tr><td>Total</td><td>270</td><td>1 103 375</td><td></td><td></td><td></td></tr></table>

Using the formula given in section 9.9 we find that the sum of squares associated with a linear trend is 55147 on one degree of freedom, so the analysis of variance table can be rewritten as shown in Table 9.14. There is a highly significant linear trend, showing that mean serum trypsin level rises with age. However, the non- linear variation between the age groups is also highly significant, indicating that the linear trend only explains some of the age effect. Fitting a linear trend in one way analysis of variance is equivalent to linear regression analysis, which is described in Chapter 11.

Table 9.14 Analysis of variance table showing test for linear trend  

<table><tr><td>Source of variation</td><td>df</td><td>Sums of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td rowspan="2">Between groups: (a) linear</td><td>5</td><td>224 103</td><td>44 820.6</td><td></td><td></td></tr><tr><td>1</td><td>55 147</td><td>55 147.0</td><td>16.6</td><td>&amp;lt; 0.0001</td></tr><tr><td>(b) non-linear</td><td>4</td><td>168 956</td><td>42 239.0</td><td>12.7</td><td>&amp;lt; 0.0001</td></tr><tr><td>Within groups:</td><td>265</td><td>879 272</td><td>3 318.0</td><td></td><td></td></tr><tr><td>Total</td><td>270</td><td>1 103 375</td><td></td><td></td><td></td></tr></table>


### 9.8.6 Non-parametric one way analysis of variance - the Kruskal-Wallis test

Just as analysis of variance is a more general form of  $t$  test, so there is a more general form of the non- parametric Mann- Whitney test. The Kruskal- Wallis test is an obvious mathematical extension of the Mann- Whitney test, with the same problems of interpretation as were just discussed for one way analysis of variance.

The calculation of the test statistic is simple. The complete set of  $N$  observations are ranked from 1 to  $N$  regardless of which group they are in, and for each group the sum of the ranks is calculated. If the sum of the ranks of  $n_i$  observations in the  $i$ th group is  $R_i$ , then the average rank in each group is given by  $\bar{R}_i$ . We calculate the statistic  $H$  defined by

$$
H = \frac{12\Sigma n_i(\bar{R}_i - \bar{R})^2}{N(N + 1)}
$$

where  $\bar{R}$  is the average of all the ranks, and is always equal to  $(N + 1) / 2$ . The summation term in this formula is very similar to the between group

sum of squares calculated in parametric one way analysis of variance (shown mathematically in section 9.9). While this formula for  $H$  shows the way the test works, there is an equivalent but simpler version for calculation, with  $H$  given by

$$
H = \frac{12}{N(N + 1)}\sum \frac{R_{i}^{2}}{n_{i}} -3(N + 1).
$$

The Kruskal- Wallis test statistic has a different distribution from the other methods described in this chapter. When the null hypothesis is true the test statistic follows the Chi squared distribution, where Chi is the Greek letter  $\chi$  which is pronounced as 'ky' in 'sky'. The Chi squared distribution is mainly used for the analysis of categorical data, and so will be considered in more detail in the next chapter (section 10.6.3). For the moment it should be sufficient to note that any variation among the groups will increase the test statistic  $H$ . We therefore are concerned with only the upper tail of the Chi squared distribution. The idea of one- and two- sided tests does not apply with three or more groups.

If there are  $k$  groups of observations, the statistic  $H$  is compared with a Chi squared distribution with  $k - 1$  degrees of freedom. A statistically significant result means that we reject the hypothesis that the groups come from populations with the same median, and conclude that there are differences among the groups.

Two sample Mann- Whitney tests can be used to try to identify where the differences are, making due allowance for multiple testing. If the groups are ordered it is possible to test for a trend, in a similar way as described above for one way analysis of variance (see section 9.8.7).

Fentress et al. (1986) reported the results of a randomized comparison of three groups of six children suffering from frequent and severe migraine. The active treatments given were relaxation response, either with or without biofeedback, and a third group of children was not treated. The frequency and duration of headaches were recorded before and after the study period, and the difference between these measurements was used as a measure of weekly headache activity.

Table 9.15 shows the reduction in headache activity for each child, expressed as a percentage. Note that a negative value indicates an increase in headache activity. Three children had a complete absence of headaches at the end of the study period and thus a reduction of  $100\%$ . These observations are clearly unsuited for analysis of variance, but we can apply the Kruskal- Wallis test. Table 9.15 also shows the ranks of the data and the mean rank for each group. Using the equation given above we can calculate the statistic  $H$  as

$$
\begin{array}{l}{{H=\frac{12}{18\times19}\left(\frac{55^{2}}{6}+\frac{36^{2}}{6}+\frac{80^{2}}{6}\right)-3\times19}}\\ {{\mathrm{}}}\\ {{=5.69.}}\end{array}
$$

Table 9.15 Reduction in weekly headache activity for three treatment groups, expressed as a percentage of baseline data (Fentress et al., 1986). Ranks are shown in brackets.  

<table><tr><td></td><td>Relaxation response and biofeedback</td><td>Relaxation response alone</td><td>Untreated</td></tr><tr><td></td><td>62 (11)</td><td>69 (10)</td><td>50 (12)</td></tr><tr><td></td><td>74 (8.5)</td><td>43 (13)</td><td>-120 (17)</td></tr><tr><td></td><td>86 (7)</td><td>100 (2)</td><td>100 (2)</td></tr><tr><td></td><td>74 (8.5)</td><td>94 (5)</td><td>-288 (18)</td></tr><tr><td></td><td>91 (6)</td><td>100 (2)</td><td>4 (15)</td></tr><tr><td></td><td>37 (14)</td><td>98 (4)</td><td>-76 (16)</td></tr><tr><td>Rank sum</td><td>55</td><td>36</td><td>80</td></tr><tr><td>Mean rank</td><td>9.17</td><td>6.00</td><td>13.33</td></tr></table>

From Table B5 we find that a  $\chi^{2}$  value of 5.69 on 2 degrees of freedom gives  $\mathbf{P}$  between 0.1 and 0.05, and is much nearer to  $\mathbf{P} = 0.05$ . (It is actually 0.058. )

Because the groups are small, comparison of each pair of groups with Mann- Whitney tests is not very powerful, and in fact all three  $\mathbf{P}$  values are greater than 0.05 even without allowing for multiple comparisons. However, it is reasonable to consider whether the two actively treated groups together did better than the untreated controls, and a Mann- Whitney test gives  $\mathbf{P} = 0.03$ , supporting the suggestion that both treatments are beneficial but that the study is too small to be able to distinguish them.

If we apply the Kruskal- Wallis test to just two groups of observations we obtain exactly the same result as that from the Mann- Whitney test. The test statistic  $H$  from the former is the square of the  $z$  statistic from the latter.


### 9.8.7 Non-parametric test for ordered groups

(This section can be omitted without loss of continuity.)

There are several non- parametric methods to test for trend across ordered groups. The method described below is due to Cuzick (1985). It is not necessary to perform the Kruskal- Wallis test if the trend is the only aspect of interest.

We have  $k$  groups of sample sizes  $n_{i}$  ( $i = 1, \ldots , k$ ), where  $N = \Sigma n_{i}$ . The groups are given scores,  $l_{i}$ , which reflect their ordering, such as 1, 2 and 3. The scores do not have to be equally spaced, but they usually are. The total set of  $N$  observations are ranked from 1 to  $N$ , and the sums of

the ranks in each group,  $R_{i}$ , are obtained. We calculate a weighted sum of all the group scores,  $L$ , as

$$
L = \sum_{i = 1}^{k}l_{i}n_{i}.
$$

The statistic  $T$  is calculated as

$$
T = \sum_{i = 1}^{k}l_{i}R_{i}.
$$

Under the null hypothesis the expected value of  $T$  is  $E(T) = \frac{1}{2} (N + 1)L$ , and its standard error is

$$
se(T) = \sqrt{\frac{N + 1}{12}\left(N\sum_{i = 1}^{k}l_{i}^{2}n_{i} - L^{2}\right)}
$$

so that the test statistic,  $z$ , is given by

$$
z = \frac{T - E(T)}{se(T)}
$$

which has an approximately standard Normal distribution when the null hypothesis of no trend is true.

Table 9.16 shows ocular exposure to ultraviolet radiation for 32 pairs of sunglasses classified into three groups according to the amount of visible light transmitted. We can use the method just described to test for a trend for increasing exposure across the three groups.

The groups are given scores  $- 1$ ,  $0$ , and  $1$  (which simplifies the arithmetic in comparison with scores of  $1$ ,  $2$ , and  $3$ ). Some of the calculations, including that of  $T$ , are shown in Table 9.16. We have

$$
E(T) = 33\times 2 / 2 = 33
$$

and

$$
se(T) = \sqrt{\frac{33}{12}(32\times 14 - 4)} = 34.94
$$

so that the test statistic is given by

$$
\begin{array}{c}{{z=\frac{86-33}{34.94}}}\\ {{=1.52\left(\mathrm{P}=0.13\right).}}\end{array}
$$

There is thus little evidence to support the suggestion that ocular exposure to ultraviolet radiation is related to the amount of visible light transmitted.

Table 9.16 The effect of sunglasses on ocular exposure to ultraviolet radiation in relation to amount of visible light transmitted (Rosenthal et al., 1988). Ocular exposure is expressed as the percentage of exposure without sunglasses. The ranks of the observations are shown in brackets  

<table><tr><td rowspan="2" colspan="2">&amp;lt; 25%</td><td colspan="5">Transmission of visible light</td></tr><tr><td colspan="2">25 to 35%</td><td colspan="2">&amp;gt; 35%</td><td></td></tr><tr><td>1.4</td><td>(9)</td><td>0.9</td><td>( 2 )</td><td>0.8</td><td>( 1)</td><td></td></tr><tr><td>1.4</td><td>(9)</td><td>1.0</td><td>( 3 )</td><td>1.7</td><td>(14)</td><td></td></tr><tr><td>1.4</td><td>(9)</td><td>1.1</td><td>( 4.5)</td><td>1.7</td><td>(14)</td><td></td></tr><tr><td>1.6</td><td>(12)</td><td>1.1</td><td>( 4.5)</td><td>1.7</td><td>(14)</td><td></td></tr><tr><td>2.3</td><td>(18)</td><td>1.2</td><td>( 6.5)</td><td>3.4</td><td>(26)</td><td></td></tr><tr><td>2.5</td><td>(19)</td><td>1.2</td><td>( 6.5)</td><td>7.1</td><td>(30)</td><td></td></tr><tr><td></td><td></td><td>1.5</td><td>(11 )</td><td>8.9</td><td>(31)</td><td></td></tr><tr><td></td><td></td><td>1.9</td><td>(16 )</td><td>13.5</td><td>(32)</td><td></td></tr><tr><td></td><td></td><td>2.2</td><td>(17 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>2.6</td><td>(21 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>2.6</td><td>(21 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>2.6</td><td>(21 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>2.8</td><td>(23.5)</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>2.8</td><td>(23.5)</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>3.2</td><td>(25 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>3.5</td><td>(27 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>4.3</td><td>(28 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>5.1</td><td>(29 )</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>Total</td></tr><tr><td>ni</td><td>6</td><td>18</td><td></td><td>8</td><td>32(=N)</td><td></td></tr><tr><td>Ri</td><td>76</td><td>290</td><td></td><td>162</td><td></td><td></td></tr><tr><td>li</td><td>-1</td><td>0</td><td></td><td>1</td><td></td><td></td></tr><tr><td>lini</td><td>-6</td><td>0</td><td></td><td>8</td><td>2(=L)</td><td></td></tr><tr><td>Ri li</td><td>-76</td><td>0</td><td></td><td>162</td><td>86(=T)</td><td></td></tr><tr><td>li2ni</td><td>6</td><td>0</td><td></td><td>8</td><td>14</td><td></td></tr></table>


### 9.8.8 Replicated observations

The methods described in this section apply only when a single measurement is made for each individual. If two or more replicated measurements are taken for each person, then more complex methods must be used, some of which are described in section 12.3. For designs not covered in Chapter 12 it is advisable to consult a statistician. In some cases it may be reasonable to analyse the average of replicate observations but this may throw away valuable information. It is never valid to treat multiple observations from each individual as if they were independent.


## 9.9 ONE WAY ANALYSIS OF VARIANCE - MATHEMATICS AND WORKED EXAMPLE

(This section gives the mathematical formulae for the calculations described in section 9.8. It can be omitted without loss of continuity.)


### 9.9.1 One way analysis of variance

Most statistical packages include one way analysis of variance using the raw data, so it should not be necessary to use the formulae in (a) below. However, the method given in (b) will probably be needed when only means and standard deviations are available, as in the worked example in section 9.9.3.


#### (a) Raw data available

The calculations for one way analysis of variance are expressed in relation to the sum of the observations in each sample. Suppose we have  $k$  samples of observations, with  $n_i$  observations in the  $i^{\text{th}}$  sample, then we calculate

$M_i =$  mean of observations in  $i^{\text{th}}$  group,

$S_i =$  sum of squares of observations in  $i^{\text{th}}$  group,

$T =$  sum of all observations  $= \sum_{i = 1}^{k} n_i M_i$ ,

$S =$  sum of squares of all observations  $= \sum_{i = 1}^{k} S_i$ ,

$N =$  total number of observations  $= \sum_{i = 1}^{k} n_i$ .

The sums of squares for the one way analysis of variance are as follows:

<table><tr><td>Source of variation</td><td>Sum of squares</td></tr><tr><td>Between groups:</td><td>B = ∑k
i=1
niM2i - T2/N</td></tr><tr><td>Within groups:</td><td>W = S - ∑k
i=1
niM2i</td></tr><tr><td>Total</td><td>S - T2/N (= B + W)</td></tr></table>

There are  $k - 1$  degrees of freedom between groups and  $n - k$  within groups. The mean squares are the sums of squares divided by the degrees of freedom. The square root of the within groups mean square is the residual standard deviation,  $s_{res}$ .


#### (b) Means and standard deviations available

If we already have the mean  $(M_{i})$  and standard deviation  $(s_{i})$  for each group of size  $n_{i}$  we can use the above formulae for  $T$  and  $B$  together with a simpler method of calculating the within groups sum of squares,  $W$ , as

$$
W = \sum_{i = 1}^{k}(n_{i} - 1)s_{i}^{2}.
$$


### 9.9.2 Linear trend

If there is a natural ordering of the groups, the between groups sum of squares can be partitioned into a component due to a linear trend, and the remaining (non- linear) component. We give scores  $l_{i}$  to the groups, where the values of the  $l_{i}$  are equally spaced and chosen so that their sum is zero. We then calculate

$$
\begin{array}{r}{L = \sum l_{i}\bar{y}_{i}} \end{array}
$$

and its standard error

$$
se(L) = s_{res}\sqrt{\Sigma(l_{i}^{2} / n_{i})}.
$$

A one sample  $t$  test can be performed by comparing  $L / se(L)$  to the  $t$  distribution with the number of degrees of freedom within groups.

Alternatively, the sum of squares due to  $L$  can be calculated as

$$
S S(L) = L^{2} / \sum (l_{i}^{2} / n_{i})
$$

and the analysis of variance table recalculated by partitioning the between group sum of squares into linear and non- linear components. The  $F$  test for the linear contrast is exactly equivalent to the above  $t$  test.

(This method is equivalent to performing a regression analysis with the  $l_{i}$  as explanatory variable - see sections 11.10 and 11.15.1. )


### 9.9.3 Worked example

For the serum trypsin data in Table 9.12 the sum of the 271 observations is given by

$$
\begin{array}{c}{{T=32\times128+137\times152+38\times194+44\times207+16\times215+4\times218}}\\ {{{}}}\\ {{=45712.}}\end{array}
$$

The within groups sum of squares is obtained from the formula based on standard deviations as

$$
W = 31\times 50.9^{2} + 136\times 58.5^{2} + \ldots +3\times 14.0^{2} = 879271.9
$$

and the quantity  $\Sigma n_{i}M_{i}^{2}$  is

$$
32\times 128^{2} + 137\times 152^{2} + \ldots +4\times 218^{2} = 7934756.
$$

The between groups sum of squares is thus

$$
\begin{array}{c}{{B=7934756-45712^{2}/271}}\\ {{=224103.1.}}\end{array}
$$

The complete analysis of variance table is shown in Table 9.13. The residual standard deviation is  $\sqrt{3318} = 57.602$ . To evaluate a possible linear trend we give the groups scores  $l_{i}$  which are equally spaced and add to zero, such as  $- 5, - 3, - 1, 1, 3$ , and 5. The value of the linear contrast is then

$$
\begin{array}{c}{{L=-5\times128-3\times152-1\times194+1\times207+3\times215+5\times218}}\\ {{=652}}\end{array}
$$

and its standard error is

$$
\begin{array}{c}{{s e(L)=57.602\times\sqrt{\frac{(-5)^{2}}{32}+\frac{(-3)^{2}}{137}+\frac{(-1)^{2}}{38}+\frac{1^{2}}{44}+\frac{3^{2}}{16}+\frac{5^{2}}{4}}}}\\ {{=159.93.}}\end{array}
$$

The calculations for fitting a linear trend across age groups are shown in Table 9.17. The  $t$  test for the linear contrast gives  $t = 652 / 159.93 = 4.08$ $(P = 0.00006)$ .

Alternatively, the sum of squares for  $L$  is  $652.07 / 7.7085 = 55147$ . It is shown in Table 9.14. The  $F$  test is exactly equivalent to the  $t$  test above. It is shown by the value of  $F$  (16.6) being equal to the square of the value of  $t$  (4.08).

Table 9.17 Calculating the sum of squares for linear trend in scrue trypsin data from Table 9.12  

<table><tr><td>Group</td><td>n</td><td>y1</td><td>l1</td><td>l1y1</td><td>l2/n1</td></tr><tr><td>1</td><td>32</td><td>128</td><td>-5</td><td>-640.0</td><td>0.78125</td></tr><tr><td>2</td><td>137</td><td>152</td><td>-3</td><td>-456.0</td><td>0.06569</td></tr><tr><td>3</td><td>38</td><td>194</td><td>-1</td><td>-194.0</td><td>0.02632</td></tr><tr><td>4</td><td>44</td><td>207</td><td>1</td><td>207.0</td><td>0.02273</td></tr><tr><td>5</td><td>16</td><td>215</td><td>3</td><td>645.0</td><td>0.56250</td></tr><tr><td>6</td><td>4</td><td>218</td><td>5</td><td>1090.0</td><td>6.25000</td></tr><tr><td>Total</td><td></td><td></td><td></td><td>652.0</td><td>7.70849</td></tr></table>


## 9.10 PRESENTATION OF RESULTS

It is never sufficient to present the results of a statistical analysis solely as a P value, or even as a test statistic and P value. Some actual results should be quoted. This chapter has been concerned with continuous data for

which means or medians should be given, along with some measure of variability of the data.

If a  $t$  test or analysis of variance has been used then the standard deviation of the data in each group should be given. However, if a paired  $t$  test is used the standard deviation of the differences between groups should be quoted. For one way analysis of variance it is not necessary to present the analysis of variance table, but it may be helpful. It is valuable to quote the residual standard deviation.

In addition it may be useful to construct one or more confidence intervals for means or differences between means. Confidence intervals are preferable to quoting standard errors, which are not very helpful as they stand (see Chapter 8).

For data analysed by a non- parametric method the median and selected centiles (e.g. 10th and 90th) should be given for each group if the raw data are not shown. For small samples the median and range can be given. For all analyses, it is good practice to quote the test statistic  $(t, F \text{or} \chi^2)$  as well as the  $\mathbf{P}$  value derived from it. It should always be clear what the degrees of freedom are.

Graphical presentation is often by means and standard deviation or standard error 'bars', but it is much more informative to show the raw data where possible. Figure 3.14 showed some data of Lind et al. (1984), in which all the raw data and summary statistics are shown. Figure 9.6 shows how comparatively uninformative the means and standard errors are on their own. For data which have a skewed distribution the loss of information is particularly marked. The presentation as, say, mean  $\pm 1$ SD implies a

![](../images/09_Comparing_groups_continuous_data/img5.jpg)  
Figure 9.6 Figure 3.14 shown as means and standard error bars only (data from Lind et al., 1984).

![](../images/09_Comparing_groups_continuous_data/img6.jpg)  
Figure 9.7 Four groups of 25 observations each having a mean of 30 and standard deviation of 5.9.

symmetry in the data that may not exist. Figure 9.7 shows four groups of 25 observations that all have the same mean (30) and standard deviation (5.9). Where possible it is valuable to show all the data in a figure, with relevant means and standard errors or confidence intervals given in the text or a table.


## 9.11 SUMMARY

This chapter has described various methods for analysing continuous data from one, two, or several independent groups of individuals, and also two sets of paired observations. These methods cover a large proportion of practical problems in the analysis of continuous data. However, there are many circumstances which require a more complicated analysis. For example, when there are two or more classifications for each individual (considered in Chapter 12), or where we are interested in relations between two or more continuous variables (Chapter 11).

I have emphasized the dependence of the methods of analysis on the underlying assumptions about the data. We can carry out any analysis on data that do not meet the assumptions, but the results would not be interpretable. For example, the calculated  $95\%$  confidence interval for the difference between two means would not in fact be a  $95\%$  confidence interval but an interval with some other, unknown level of confidence. Likewise, the P value associated with a two sample  $t$  test will be wrong to

an unknown degree if the data do not meet the assumptions. The extent to which data may depart from the assumptions of, for example, having a Normal distribution, with minimal effect on the validity of the results is unclear - it is not possible to give any general rule. Of course no sample of data has an exactly Normal distribution; the assumption is not that it does, but rather that the sample comes from a population which does. Samples from Normal distributions, especially small ones, may look quite unlike the expected symmetric distribution. Although formal methods exist for testing assumptions, this is an area where experience gives a feel for what is or is not reasonable. We would usually carry out either a parametric or a non- parametric test of a set of data, not both. However, sometimes when there are doubts about the validity of the assumptions for the parametric method, a non- parametric analysis is carried out too. If the assumptions are met the two methods should give very similar answers, so if the answers differ (again this is a subjective assessment) then the non- parametric method is likely to be the more reliable.

In summary, both parametric and non- parametric methods can be used for continuous data, and the alternative approaches have been described. If the assumptions are met I favour the use of parametric methods because they are more amenable to estimation and confidence intervals, and also because they are readily extended to the more complicated data structures described in later chapters. With a few exceptions, non- parametric methods do not extend to more complex situations.

## EXERCISES

9.1 A study was made of all 26 astronauts on the first eight space shuttle flights (Bungo et al., 1985). On a voluntary basis 17 astronauts consumed large quantities of salt and fluid prior to landing as a countermeasure to space deconditioning, while nine did not. The table below shows supine heart rates (beats/minute) before and after flights in the space shuttle.

(a) Compare the pre- and post-flight measurements in the countermeasure group using both a parametric and a non-parametric method. Which analysis is preferable?

(b) In the light of the answer to 
(a), perform a suitable analysis to compare the changes in heart rate in the two groups. What conclusion can be made about the effectiveness of the countermeasure?

(c) Two astronauts each flew on two missions and are thus represented twice in the data set. Does this matter?

(d) Comment on the voluntary aspect of the study, and how it might affect the interpretation of the results.

<table><tr><td colspan="3">Countermeasure taken</td><td colspan="3">Countermeasure not taken</td><td></td></tr><tr><td>Pre</td><td>Post</td><td>Change</td><td>Pre</td><td>Post</td><td>Change</td><td></td></tr><tr><td>71</td><td>61</td><td>-10</td><td>61</td><td>61</td><td>0</td><td></td></tr><tr><td>65</td><td>59</td><td>-6</td><td>59</td><td>66</td><td>7</td><td></td></tr><tr><td>52</td><td>47</td><td>-5</td><td>52</td><td>61</td><td>9</td><td></td></tr><tr><td>68</td><td>65</td><td>-3</td><td>54</td><td>68</td><td>14</td><td></td></tr><tr><td>69</td><td>69</td><td>0</td><td>53</td><td>77</td><td>24</td><td></td></tr><tr><td>49</td><td>50</td><td>1</td><td>78</td><td>103</td><td>25</td><td></td></tr><tr><td>49</td><td>51</td><td>2</td><td>52</td><td>77</td><td>25</td><td></td></tr><tr><td>57</td><td>60</td><td>3</td><td>54</td><td>80</td><td>26</td><td></td></tr><tr><td>51</td><td>57</td><td>6</td><td>52</td><td>79</td><td>27</td><td></td></tr><tr><td>55</td><td>64</td><td>9</td><td></td><td></td><td></td><td></td></tr><tr><td>58</td><td>67</td><td>9</td><td></td><td></td><td></td><td></td></tr><tr><td>57</td><td>69</td><td>12</td><td></td><td></td><td></td><td></td></tr><tr><td>59</td><td>72</td><td>13</td><td></td><td></td><td></td><td></td></tr><tr><td>53</td><td>69</td><td>16</td><td></td><td></td><td></td><td></td></tr><tr><td>53</td><td>72</td><td>19</td><td></td><td></td><td></td><td></td></tr><tr><td>53</td><td>75</td><td>22</td><td></td><td></td><td></td><td></td></tr><tr><td>48</td><td>77</td><td>29</td><td></td><td></td><td></td><td></td></tr><tr><td>Mean 56.88</td><td>63.76</td><td>6.88</td><td>57.22</td><td>74.67</td><td>17.44</td><td></td></tr><tr><td>SD</td><td>7.30</td><td>8.86</td><td>10.70</td><td>8.44</td><td>13.01</td><td>10.11</td></tr></table>

9.2 The table below shows concentrations of antibody to Type III Group B Streptococcus (GBS) in 20 volunteers before and after immunization (Baker et al., 1980).

<table><tr><td colspan="3">Antibodyconcentration to Type III GBS</td></tr><tr><td>Before immunization</td><td>4 weeks after immunization</td><td></td></tr><tr><td>1</td><td>0.4</td><td>0.4</td></tr><tr><td>2</td><td>0.4</td><td>0.5</td></tr><tr><td>3</td><td>0.4</td><td>0.5</td></tr><tr><td>4</td><td>0.4</td><td>0.9</td></tr><tr><td>5</td><td>0.5</td><td>0.5</td></tr><tr><td>6</td><td>0.5</td><td>0.5</td></tr><tr><td>7</td><td>0.5</td><td>0.5</td></tr><tr><td>8</td><td>0.5</td><td>0.5</td></tr><tr><td>9</td><td>0.5</td><td>0.5</td></tr></table>

<table><tr><td colspan="3">Antibodyconcentration to Type III GBS</td></tr><tr><td></td><td>Before immunization</td><td>4 weeks after immunization</td></tr><tr><td>10</td><td>0.6</td><td>0.6</td></tr><tr><td>11</td><td>0.6</td><td>12.2</td></tr><tr><td>12</td><td>0.7</td><td>1.1</td></tr><tr><td>13</td><td>0.7</td><td>1.2</td></tr><tr><td>14</td><td>0.8</td><td>0.8</td></tr><tr><td>15</td><td>0.9</td><td>1.2</td></tr><tr><td>16</td><td>0.9</td><td>1.9</td></tr><tr><td>17</td><td>1.0</td><td>0.9</td></tr><tr><td>18</td><td>1.0</td><td>2.0</td></tr><tr><td>19</td><td>1.6</td><td>8.1</td></tr><tr><td>20</td><td>2.0</td><td>3.7</td></tr></table>

(a) The comparison of the antibody levels was summarized in the report of this study as  ${}^{\ast}t = 1.8$  .  $\mathbf{P} > 0.05^{\circ}$  . Comment on this result.

(b) What method would be more appropriate to analyse these data? Analyse the data with the appropriate method and comment on the result.

9.3 Using the data in Table 9.7 calculate a  $90\%$  confidence interval for the comparison of numbers of  $\mathbf{T_{4}}$  cells in Hodgkin's disease and non- Hodgkin's disease patients.

9.4 Patients receiving chemotherapy as outpatients were randomized to receive either an active antiemetic treatment or placebo (Williams et al., 1989). The following table shows measurements (in mm) on a  $100 \mathrm{~mm}$  linear analogue self- assessment scale for nausea.

<table><tr><td colspan="2">Treatment group</td></tr><tr><td>Active 
(n = 20)</td><td>Placebo 
(n = 20)</td></tr><tr><td>0</td><td>0</td></tr><tr><td>0</td><td>10</td></tr><tr><td>0</td><td>12</td></tr><tr><td>0</td><td>15</td></tr><tr><td>0</td><td>15</td></tr><tr><td>2</td><td>30</td></tr><tr><td>7</td><td>35</td></tr><tr><td>8</td><td>38</td></tr><tr><td>10</td><td>42</td></tr><tr><td>13</td><td>45</td></tr></table>

226 Comparing groups - continuous data

<table><tr><td colspan="2">Treatment group</td></tr><tr><td>Active 
(n = 20)</td><td>Placebo 
(n = 20)</td></tr><tr><td>15</td><td>50</td></tr><tr><td>18</td><td>50</td></tr><tr><td>20</td><td>60</td></tr><tr><td>20</td><td>64</td></tr><tr><td>21</td><td>68</td></tr><tr><td>22</td><td>71</td></tr><tr><td>23</td><td>74</td></tr><tr><td>30</td><td>82</td></tr><tr><td>52</td><td>86</td></tr><tr><td>76</td><td>95</td></tr></table>

Identify and carry out an appropriate analysis to compare the values in the two groups.

9.5 Urinary cotinine excretion was measured in nonsmokers who lived with smokers. The following table shows the summary of findings given in the paper (Matsukura et al., 1984).

<table><tr><td>Cigarettes smoked per day by smoker</td><td>n</td><td>Urinary cotinine excretion (μg/mg of creatinine) mean (se)</td></tr><tr><td>1-9</td><td>25</td><td>0.31 (0.08)</td></tr><tr><td>10-19</td><td>57</td><td>0.42 (0.10)</td></tr><tr><td>20-29</td><td>99</td><td>0.87 (0.19)</td></tr><tr><td>30-39</td><td>38</td><td>1.03 (0.25)</td></tr><tr><td>&amp;gt; 40</td><td>28</td><td>1.56 (0.57)</td></tr><tr><td>Unspecified</td><td>25</td><td>0.56 (0.16)</td></tr></table>

(a) What can you say about the shape of the distribution of urinary cotinine in these nonsmokers?

(b) What would be an appropriate analysis to see if there was a systematic relation between number of cigarettes and urinary cotinine levels?

(c) Does it matter that the standard errors vary greatly among the groups?

(d) The authors used multiple  $t$  tests to compare pairs of groups with a correction for multiple testing. Comment on the appropriateness of their analysis.

9.6 Patients with chronic renal failure undergoing haemodialysis were divided into groups with low or normal plasma heparin cofactor II

(HC II) levels (Toulon et al., 1987). Five months later the acute effects of haemodialysis were studied by analysing plasma samples taken before and after haemodialysis. As dialysis increases total protein concentration in plasma, the ratio of HC II to protein was calculated, with the results shown in the following table:

<table><tr><td>Group 1 (low) before</td><td>after</td><td>Group 2 (normal) before</td><td>after</td></tr><tr><td>1.41</td><td>1.47</td><td>2.11</td><td>2.15</td></tr><tr><td>1.37</td><td>1.45</td><td>1.85</td><td>2.11</td></tr><tr><td>1.33</td><td>1.50</td><td>1.82</td><td>1.93</td></tr><tr><td>1.13</td><td>1.25</td><td>1.75</td><td>1.83</td></tr><tr><td>1.09</td><td>1.01</td><td>1.54</td><td>1.90</td></tr><tr><td>1.03</td><td>1.14</td><td>1.52</td><td>1.56</td></tr><tr><td>0.89</td><td>0.98</td><td>1.49</td><td>1.44</td></tr><tr><td>0.86</td><td>0.89</td><td>1.44</td><td>1.43</td></tr><tr><td>0.75</td><td>0.95</td><td>1.38</td><td>1.28</td></tr><tr><td>0.75</td><td>0.83</td><td>1.30</td><td>1.30</td></tr><tr><td>0.70</td><td>0.75</td><td>1.20</td><td>1.21</td></tr><tr><td>0.69</td><td>0.71</td><td>1.19</td><td>1.30</td></tr></table>

The data were analysed by separate paired Wilcoxon tests on the data for each group, giving  $\mathbf{P}< 0.01$  for group 1 and  $\mathbf{P} > 0.05$  for group 2. Why is it wrong to conclude, as the authors did, that HC II activity increased in group 1 but not in group 2? Carry out a better analysis of these data.

9.7 The effect of gestrinone on patients with asymptomatic endometriosis was evaluated in a randomized double- blind placebo controlled trial (Thomas and Cooke, 1987). Before treatment each patient was given a score on a scale derived by the American Fertility Society, and this was repeated after 24 weeks' treatment, with the following results (high scores indicate more serious disease):

(a) Identify and carry out a suitable comparison of the scores after treatment.

(b) The pre-treatment scores were somewhat different in the two groups, with five of the six highest scores being in the placebo group. A simple way to allow for this difference is to consider the change in scores over the period of the trial. Identify and carry out a suitable comparison of the changes in scores in the two groups.

<table><tr><td rowspan="2"></td><td colspan="2">Placebo group</td><td colspan="2">Gestrinone group</td></tr><tr><td>Before treatment</td><td>After treatment</td><td>Before treatment</td><td>After treatment</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>2</td><td>1</td><td>1</td><td>2</td><td>1</td></tr><tr><td>3</td><td>1</td><td>2</td><td>3</td><td>1</td></tr><tr><td>4</td><td>2</td><td>0</td><td>4</td><td>1</td></tr><tr><td>5</td><td>2</td><td>0</td><td>5</td><td>1</td></tr><tr><td>6</td><td>2</td><td>2</td><td>6</td><td>1</td></tr><tr><td>7</td><td>2</td><td>3</td><td>7</td><td>1</td></tr><tr><td>8</td><td>3</td><td>3</td><td>8</td><td>2</td></tr><tr><td>9</td><td>3</td><td>5</td><td>9</td><td>2</td></tr><tr><td>10</td><td>3</td><td>5</td><td>10</td><td>2</td></tr><tr><td>11</td><td>3</td><td>5</td><td>11</td><td>2</td></tr><tr><td>12</td><td>3</td><td>9</td><td>12</td><td>2</td></tr><tr><td>13</td><td>5</td><td>1</td><td>13</td><td>2</td></tr><tr><td>14</td><td>5</td><td>5</td><td>14</td><td>3</td></tr><tr><td>15</td><td>6</td><td>4</td><td>15</td><td>3</td></tr><tr><td>16</td><td>6</td><td>10</td><td>16</td><td>3</td></tr><tr><td>17</td><td>6</td><td>12</td><td>17</td><td>4</td></tr><tr><td></td><td></td><td></td><td>18</td><td>5</td></tr></table>

9.8 What test could be used to compare the SI values in the two groups of patients shown in Exercise 3.1?