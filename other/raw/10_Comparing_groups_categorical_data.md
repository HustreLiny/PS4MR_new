# 10 Comparing groups - categorical data

## 10.1 INTRODUCTION

Categorical data are very common in medical research, arising when individuals are categorized into one of two or more mutually exclusive groups. In a sample of individuals the number falling into a particular group is called the frequency, so the analysis of categorical data is the analysis of frequencies. When two or more groups are compared the data are often shown in the form of a frequency table. Table 10.1 shows an example of a frequency table - these data will be used to illustrate one form of analysis later in the chapter. A frequency table can also be considered as a cross- tabulation of two categorical variables, either or both of which can be ordinal.

When there are only two categories for one of the variables, for example whether a patient has a particular symptom or not, the data can be summarized as the proportion of the total number of individuals in one of the categories. The data in Table 10.1 can be expressed as the proportion of women having a Caesarean section in each of the six shoe size groups. For this type of data I shall describe the analysis of categorical data expressed either as proportions or as frequency tables. As the analyses relate to alternative ways of expressing the same information, the two methods yield the same answers. Both are described because they are in

Table 10.1 Relation between frequency of Caesarean section and maternal shoe size  

<table><tr><td rowspan="2">Caesarean section</td><td colspan="7">Shoe size</td></tr><tr><td>&amp;lt; 4</td><td>4</td><td>4/2</td><td>5</td><td>5/2</td><td>6+</td><td>Total</td></tr><tr><td>Yes</td><td>5</td><td>7</td><td>6</td><td>7</td><td>8</td><td>10</td><td>43</td></tr><tr><td>No</td><td>17</td><td>28</td><td>36</td><td>41</td><td>46</td><td>140</td><td>308</td></tr><tr><td>Total</td><td>22</td><td>35</td><td>42</td><td>48</td><td>54</td><td>150</td><td>351</td></tr></table>

common use. The frequency table approach is more common, but the comparison of proportions is preferable because it readily yields estimates and confidence intervals. For larger tables where both variables have at least three categories there is no simple alternative, and we use methods suitable for analysing frequency tables.

Throughout the chapter, except where explicitly stated otherwise, it is assumed that there is only one observation per individual - that is, we have independent observations.

## 10.2 ONE PROPORTION

The simplest case to consider is when we have a single group of individuals, and have observed that a certain proportion have a particular characteristic. What can we say about the proportion with that characteristic in the population?

### 10.2.1 Confidence interval

Suppose a general practitioner chooses a random sample of 215 women from the patient register for her general practice, and finds that 39 of them have a history of suffering from asthma. I shall use  $r$  to denote the number of cases with the characteristic out of a sample size of  $n$ , and  $p$  as the proportion of cases, so  $p = r / n = 0.18$  in this example. As described in Chapter 8, the relevant sampling distribution for a proportion is the Binomial distribution. However, we can usually use the Normal approximation to the Binomial distribution to obtain the standard error of the observed proportion, and so can obtain a confidence interval for the proportion in the population. It is reasonable to use the Normal approximation when both  $np$  and  $n(1 - p)$  exceed 5; in other words, both  $r$  and  $n - r$  should exceed 5. This will usually be the case.

As we saw in section 8.4.3, the standard error of a proportion  $p$  is  $se(p) = \sqrt{p(1 - p) / n}$ . So the standard error of the observed proportion of women with asthma is  $\sqrt{0.18 \times 0.82 / 215} = 0.0262$ . The 95% confidence interval for the proportion of women with asthma in the population is thus from

$$
0.18 - 1.96 \times 0.0262 \qquad \text{to} \qquad 0.18 + 1.96 \times 0.0262
$$

that is from 0.13 to 0.23. If we can assume that the women in this general practice are representative of all women in the country then we can be reasonably sure on the basis of this sample that the national prevalence of asthma in women is between 13 and 23%.

### 10.2.2 Hypothesis test

We can test the null hypothesis that the population proportion is some

pre- specified value. To do this we use the general test statistic given in section 8.5, namely

which will have an approximately Normal distribution under the null hypothesis (with the same sample size requirement as in the previous section). We thus calculate

$$
z = \frac{p - p_{\mathrm{exp}}}{s e(p)}
$$

where  $p_{\mathrm{exp}}$  is the pre- specified or 'expected' proportion. Note that because we are testing the null hypothesis, we use the standard error of the proportion expected if the null hypothesis is true. In other words, we have

$$
s e(p) = \sqrt{\frac{p_{\mathrm{exp}}(1 - p_{\mathrm{exp}})}{n}}
$$

which will be slightly different from the standard error used to obtain a confidence interval. If we wish to test the pre- specified hypothesis that the national prevalence of asthma in women is  $15\%$ , we calculate

$$
s e(p) = \sqrt{\frac{0.15 \times 0.85}{215}}
$$

and so

$$
\begin{array}{c}{{z=\frac{0.18-0.15}{0.0244}}}\\ {{{}}}\\ {{=1.23}}\end{array}
$$

which, from Table B2, corresponds to  $\mathbf{P} = 0.22$ . We cannot reject the null hypothesis that the prevalence of asthma in women is  $15\%$ , and use the confidence interval given above to give a range likely to include the true prevalence.

### 10.2.3 Continuity correction

The method just described uses the continuous Normal distribution as an approximation to the discrete Binomial distribution. Figure 10.1 shows these two distributions for the example just examined, with  $n = 215$  and  $p = 0.15$ . The hypothesis test is based on calculating the tail area of the Normal distribution beyond the observed value, here 39. The Normal distribution corresponds better to the Binomial distribution when we make a small correction of  $\frac{1}{2}$  to the observed frequency to allow for the fact that the variable can only take integer values.

![](../images/10_Comparing_groups_categorical_data/img1.jpg)  
Figure 10.1 Binomial distribution with  $p = 0.15$  and  $n = 215$  with the approximating Normal distribution.

The test statistic with the continuity correction is

$$
z_{c} = \frac{|p - p_{\mathrm{exp}}| - \frac{1}{2n}}{se(p)}
$$

where the symbols  $|\ldots |$  indicate that the sign of the difference between the proportions is ignored and  $se(p)$  is unchanged. The continuity correction thus consists of reducing the difference between the observed and expected proportions. Clearly the effect of the correction diminishes as the sample size increases.

For the asthma data, the test statistic with the continuity correction is

$$
z_{c} = \frac{|0.18 - 0.15| - \frac{1}{2 \times 215}}{0.0244} = 1.14
$$

which is only slightly lower than before because the sample size is quite large.

## 10.3 PROPORTIONS IN TWO INDEPENDENT GROUPS

Probably the most common question in medical research involves the comparison of observed proportions in two independent groups. Such

questions can arise in all types of study, whether observational or experimental.

As an example I will consider data from a randomized clinical trial comparing infra- red stimulation (IRS) with a placebo on the pain caused by cervical osteoarthrosis (Lewith and Machin, 1981). The placebo treatment was mock transcutaneous electrical stimulation and the patients were blind to the treatment given. Twenty- six patients were entered into the trial, but one dropped out before the end. Nine of the 12 patients in the IRS group reported an improvement in pain compared with four of the 13 receiving the placebo treatment. The observed proportions improving were thus 0.75 and 0.31, with a difference of 0.44. In order to calculate a confidence interval for the difference in the population or perform a hypothesis test, we need to consider the sampling distribution of the difference between two proportions.

### 10.3.1 Confidence interval

As shown in section 8.4.4, the standard error of the difference between the observed proportions,  $p_{1} - p_{2}$ , is given by

$$
\begin{array}{r}{s e(p_{1} - p_{2}) = \sqrt{v a r(p_{1}) + v a r(p_{2})}}\\ {= \sqrt{\frac{p_{1}(1 - p_{1})}{n_{1}} + \frac{p_{2}(1 - p_{2})}{n_{2}}}.} \end{array}
$$

The sampling distribution of  $p_{1} - p_{2}$  will be approximately Normal as long as the sample size and proportions are not very small. We can thus calculate the 95% confidence interval very simply as

$$
p_{1} - p_{2} - 1.96 \times s e(p_{1} - p_{2}) \qquad \text{to} \qquad p_{1} - p_{2} + 1.96 \times s e(p_{1} - p_{2}).
$$

In the example, the difference in observed proportions is

$$
p_{1} - p_{2} = 0.7500 - 0.3077 = 0.4423
$$

and the standard error is

$$
s e(p_{1} - p_{2}) = \sqrt{\frac{0.75 \times 0.25}{12} + \frac{0.3077 \times 0.6923}{13}} = 0.1789.
$$

The 95% confidence interval for the difference in proportions with pain relief is thus

$$
0.4423 - 1.96 \times 0.1789 \qquad \text{to} \qquad 0.4423 + 1.96 \times 0.1789
$$

or 0.09 to 0.79.

### 10.3.2 Hypothesis test

A similar approach is adopted when performing a hypothesis test to compare two proportions. The standard error of the difference in proportions is again calculated, but because we are evaluating the probability of the data on the assumption that the null hypothesis is true we calculate a slightly different standard error. If the null hypothesis is true, the two samples come from populations having the same true proportion of individuals with the characteristic of interest, say  $p$  . We do not know  $p$  but both  $p_{1}$  and  $p_{2}$  are estimates of  $p$  . Our best estimate of  $p$  is given by calculating the proportion with the characteristic using all the data in the two samples combined, which is

$$
\hat{p} = \frac{r_{1} + r_{2}}{n_{1} + n_{2}}.
$$

The standard error of  $p_{1} - p_{2}$  under the null hypothesis is thus calculated on the assumption that the proportion in each group is  $\hat{p}$  , so that we have

$$
\begin{array}{r}{s e(p_{1} - p_{2}) = \sqrt{\frac{\hat{p}(1 - \hat{p})}{n_{1}} + \frac{\hat{p}(1 - \hat{p})}{n_{2}}}}\\ {= \sqrt{\hat{p}(1 - \hat{p})\biggl(\frac{1}{n_{1}} + \frac{1}{n_{2}}\biggr)}.} \end{array}
$$

As noted above, this standard error is not quite the same as that calculated in the previous section.

The sampling distribution of  $p_{1} - p_{2}$  is Normal, so we calculate a standard Normal deviate,  $z$  , as

$$
z = \frac{p_{1} - p_{2}}{s e(p_{1} - p_{2})}.
$$

In  the  example,  the  difference  in  observed  proportions  is  $p_{1} - p_{2} = 0.4423$  as before. The two proportions were 9/12 and 4/13, so the pooled estimate of the population proportion under the null hypothesis is

$$
\hat{p} = \frac{9 + 4}{12 + 13} = 0.52,
$$

and the standard error of the difference in proportions is

$$
\sqrt{0.52\times0.48\times(\frac{1}{12} + \frac{1}{13})} = 0.2000.
$$

The test statistic is thus  $z = 0.4423 / 0.2000 = 2.21$  , which from Table B2 gives  $\mathbf{P} = 0.027$  . Thus there is evidence of a difference between the treatments. As shown earlier, however, the confidence interval for the difference is wide because the samples are small.

### 10.3.3 Continuity correction

As with the single sample case, it is advisable to use a continuity correction when comparing two proportions, especially when the samples are small. The effect is to reduce slightly the observed difference between the two proportions. The modified formula for  $z$  is

$$
z_{c} = \frac{\left|p_{1} - p_{2}\right| - \frac{1}{2}\left(\frac{1}{n_{1}} + \frac{1}{n_{2}}\right)}{se(p_{1} - p_{2})}
$$

where  $se(p_{1} - p_{2})$  is unchanged. It can be seen that the extra term in the numerator (on the top) is based on a quantity already calculated in the denominator (on the bottom). In our example the continuity corrected test statistic is

$$
\begin{array}{r l} & {z_{c} = \frac{0.4423 - \frac{1}{2}(\frac{1}{12} + \frac{1}{13})}{\sqrt{0.52\times0.48\times(\frac{1}{12} + \frac{1}{13})}}}\\ & {\quad = 0.3622 / 0.2000}\\ & {\quad = 1.811} \end{array}
$$

which corresponds to  $\mathbf{P} = 0.07$

The continuity correction has made quite a large impact on the test statistic because the samples were small. It is clear from the extra term in the formula that the impact of the correction diminishes as the sample sizes increase.

It is advisable to use the continuity correction routinely for both one and two sample tests. Without it results tend to be slightly optimistic, so that the  $\mathbf{P}$  values are too small. In the example, the use of the correction gives a rather larger  $\mathbf{P}$  value which is now above the  $5\%$  level. We can still report that there is evidence to suggest a difference in effectiveness of the two treatments, but it is not as strong as was suggested by the uncorrected analysis.

Because the standard error used for calculating the confidence interval differs from that used in the hypothesis test it can occasionally happen, as here, that the confidence interval excludes the value specified under the null hypothesis when the hypothesis test gives a non- significant result. The difference in interpretation will not be important. Note that no continuity correction is necessary for constructing a confidence interval as we are not calculating probabilities based on the tail area of a distribution.

## 10.4 TWO PAIRED PROPORTIONS

There are several circumstances in which we may observe two proportions on the same individuals. We may wish to compare the pain relief by two

different analgesics in the same subjects or to compare the proportion of subjects with a particular symptom before and after treatment. A statistically identical problem arises when we wish to compare one characteristic in two pair- matched groups.

As an example, Karacan et al. (1976) compared a group of 32 marijuana users with 32 matched controls with respect to their sleeping difficulties. Seven of the marijuana users  $(22\%)$  reported sleep difficulties sometimes or always compared with 13  $(41\%)$  of the controls. Because the groups were individually matched we should not treat the observations as independent and thus need different methods from those described in the previous section. We will see that we cannot perform the appropriate analyses if we know only the two proportions.

### 10.4.1 Confidence interval

We want to calculate a confidence interval for the difference between two proportions  $p_{1}$  and  $p_{2}$  where the two groups of observations are not independent. The standard error of the difference is not, therefore, based simply on the variances of each proportion but must take account of the paired results in some way.

We can divide the paired observations into four groups, according to whether the characteristic is present or not in each member of the pair, as shown in Table 10.2. The two proportions we wish to compare are  $p_{1} = (a + b) / n$  and  $p_{2} = (a + c) / n$ . These proportions are not independent as they both contain  $a$ , the number of Yes- Yes pairs. The difference in proportions is, however, given by

$$
\begin{array}{c}{{p_{1}-p_{2}=\frac{a+b}{n}-\frac{a+c}{n}}}\\ {{=\frac{b-c}{n}}}\end{array}
$$

so that the number  $a$  disappears, which is rather surprising. Nevertheless.

Table 10.2 Frequency of each combination of paired characteristics  

<table><tr><td colspan="2">Observation</td><td rowspan="2">Number of pairs</td></tr><tr><td>1</td><td>2</td></tr><tr><td>Yes</td><td>Yes</td><td>a</td></tr><tr><td>Yes</td><td>No</td><td>b</td></tr><tr><td>No</td><td>Yes</td><td>c</td></tr><tr><td>No</td><td>No</td><td>d</td></tr><tr><td>Total</td><td></td><td>n</td></tr></table>

we are still comparing non- independent proportions. The standard error of the difference in proportions is given by

$$
se(p_{1} - p_{2}) = \frac{1}{n} \sqrt{b + c - \frac{(b - c)^{2}}{n}}.
$$

(The derivation of this formula will not be given here.) The  $95\%$  confidence interval for  $p_{1} - p_{2}$  is thus obtained as

$$
p_{1} - p_{2} - 1.96 \times se(p_{1} - p_{2}) \qquad \text{to} \qquad p_{1} - p_{2} + 1.96 \times se(p_{1} - p_{2}).
$$

In our example, we need to know the values  $a, b, c$  and  $d$  which are shown in Table 10.3. We have  $p_{m} = (a + b) / n = 7 / 32$  and  $p_{c} = (a + c) / n = 13 / 32$ , so the observed difference in proportions is

$$
\begin{array}{c}p_{c} - p_{m} = \frac{13 - 7}{32} \\ = 0.1875 \end{array}
$$

and its standard error is

$$
se(p_{c} - p_{m}) = \frac{1}{32} \sqrt{3 + 9 - \frac{6^{2}}{32}} \\ = 0.1031.
$$

Table 10.3 Numbers of marijuana users and matched controls reporting sleeping difficulties (Karacan et al., 1976)  

<table><tr><td colspan="3">Sleep difficulties</td></tr><tr><td>Marijuana group</td><td>Control group</td><td>Number of pairs</td></tr><tr><td>Yes</td><td>Yes</td><td>a = 4</td></tr><tr><td>Yes</td><td>No</td><td>b = 3</td></tr><tr><td>No</td><td>Yes</td><td>c = 9</td></tr><tr><td>No</td><td>No</td><td>d = 16</td></tr><tr><td>Total</td><td></td><td>n = 32</td></tr></table>

So the  $95\%$  confidence interval for the difference in the proportions experiencing sleep difficulties is

$$
0.1875 - 1.96 \times 0.1031 \qquad \text{to} \qquad 0.1875 + 1.96 \times 0.1031
$$

or - 0.01 to 0.39. There is thus some weak evidence that marijuana users experience fewer sleeping difficulties than controls, but the confidence interval for the difference is very wide.

### 10.4.2 Hypothesis test

We can also perform a significance test of the null hypothesis that there is no difference between the paired proportions. As with two independent samples, we need to evaluate the standard error of the difference on the assumption that the null hypothesis is true, which means that we replace both  $b$  and  $c$  by  $(b + c) / 2$  . The formula for the standard error given in the previous section thus simplifies to

$$
\begin{array}{c}{{s e(p_{1}-p_{2})=\frac{1}{n}\sqrt{\frac{b+c}{2}+\frac{b+c}{2}+0}}}\\ {{=\frac{1}{n}\sqrt{b+c}}}\end{array}
$$

and we calculate our test statistic as

$$
\begin{array}{c}{{z=\frac{p_{1}-p_{2}}{s e(p_{1}-p_{2})}}}\\ {{=\frac{(b-c)/n}{\sqrt{b+c}/n}}}\\ {{=\frac{b-c}{\sqrt{b+c}}}}\end{array}
$$

which is one of the simplest formulae in statistics. An alternative derivation of this formula is given in section 10.4.4.

In the example we get

$$
z = \frac{3 - 9}{\sqrt{3 + 9}} = -1.73
$$

giving  $\mathbf{P} = 0.08$  . We cannot reject the null hypothesis at the  $5\%$  level. Note that it does not matter whether we take  $b - c$  or  $c - b$  in the equation, as  $z = +1.73$  would give the same two- sided  $\mathbf{P}$  value.

### 10.4.3 Continuity correction

We ought to use a continuity correction when comparing paired proportions, especially in small samples. As with the unpaired case we use the formula

$$
z_{c} = \frac{|p_{1} - p_{2}| - \frac{1}{2}\Big(\frac{1}{n_{1}} + \frac{1}{n_{2}}\Big)}{s e(p_{1} - p_{2})}
$$

but here the two samples are the same size, so we get

$$
\begin{array}{c}{{z_{c}=\frac{\frac{1}{n}\left|b-c\right|-\frac{1}{2}\left(\frac{1}{n}+\frac{1}{n}\right)}{(\sqrt{b+c})/n}}}\\ {{=\frac{\left|b-c\right|-1}{\sqrt{b+c}}.}}\end{array}
$$

In other words, to use the continuity correction we subtract 1 from the absolute difference between  $b$  and  $c$  before dividing by  $\sqrt{b + c}$ .

In our example we have

$$
\begin{array}{c}{{z_{c}=\frac{\left|3-9\right|-1}{\sqrt{3+9}}}}\\ {{=5/\sqrt{12}=1.44}}\end{array}
$$

corresponding to  $\mathbf{P} = 0.15$ . As we saw in the previous section, the effect of the continuity correction is quite marked in small samples. Its use will always increase the  $\mathbf{P}$  value.

### 10.4.4 An alternative derivation based on the Binomial distribution

As shown above, the hypothesis test for comparing paired proportions is based only on the numbers of pairs showing disagreement,  $b$  and  $c$ . Those showing agreement,  $a$  and  $d$ , do not appear in the formula.

Another way of considering the problem, therefore, is to look at the total number of disagreements,  $b + c$ . Under the null hypothesis we expect the numbers of 'Yes- No' and 'No- Yes' pairs to be the same so we can evaluate the probability of observing  $b$  out of  $b + c$  to be in one of these groups (or, equivalently,  $c$  out of  $b + c$ ). The number  $b$  will follow a Binomial distribution with  $p = 0.5$ . Because  $p$  is 0.5 the Normal approximation to the Binomial distribution is very good even for quite small samples. The standard error of  $b$  is

$$
se(b) = \sqrt{np(1 - p)} = \sqrt{(b + c) \times \frac{1}{2} \times \frac{1}{2}} = \frac{\sqrt{b + c}}{2}.
$$

The statistic  $z$  is calculated as

$$
\begin{array}{c}{{z=\frac{b-\frac{(b+c)}{2}}{s e(b)}}}\\ {{=\frac{(b-c)/2}{\sqrt{b+c}/2}}}\\ {{=\frac{b-c}{\sqrt{b+c}}}}\end{array}
$$

as before. This test is identical to the sign test which was introduced in section 9.4.4. Here the comparison is expressed in terms of the proportions whereas in the earlier description it was in terms of the actual frequencies, but the two are exactly equivalent. We will meet other tests which reduce to a simple Binomial test of a single proportion. When the data are expressed as a frequency table the test is usually called the McNemar test, under which name it is discussed in section 10.7.5.

### 10.4.5 Are a and d really ignored?

All of the formulae for analysing paired proportions seem to be based on only those pairs showing disagreement - 'Yes- No'  $(b)$  or 'No- Yes'  $(c)$  in Tables 10.2 and 10.3. While it is true that the result of the hypothesis test comparing the two classifications depends only on  $b$  and  $c$ , the confidence interval depends on the sample size too. We expect the confidence interval and hypothesis testing approaches to give closely corresponding results (with some small discrepancies due to the use of different standard errors) and an example will show that this does indeed happen.

Consider the two sets of data in Table 10.4 showing presence or absence of a symptom before and after treatment. In both tables (i) and (ii)  $b = 15$  and  $c = 6$ , so for both of them a test of the null hypothesis that there is no difference between the two features is given by

$$
\begin{array}{c} z = \frac{15 - 6}{\sqrt{15 + 6}} \\ = 1.96 (\mathrm{P} = 0.05). \end{array}
$$

(I shall ignore the continuity correction for this illustrative example.) We would expect the confidence interval for the difference between the two proportions to have one end very close to zero because the  $\mathbf{P}$  value is almost exactly 0.05 - does this happen regardless of the size of  $a$  and  $d$ ?

Table 10.4 Two sets of paired data showing the same numbers of Yes-No and No-Yes pairs  

<table><tr><td colspan="3">(i)</td><td colspan="3">(ii)</td></tr><tr><td colspan="3">Presence of symptom</td><td colspan="3">Presence of symptom</td></tr><tr><td>Time</td><td>Time</td><td>Time</td><td>Time</td><td>Time</td><td></td></tr><tr><td>1</td><td>2</td><td>1</td><td>2</td><td></td><td></td></tr><tr><td>Yes</td><td>Yes</td><td>a = 10</td><td>Yes</td><td>Yes</td><td>a = 51</td></tr><tr><td>Yes</td><td>No</td><td>b = 15</td><td>Yes</td><td>No</td><td>b = 15</td></tr><tr><td>No</td><td>Yes</td><td>c = 6</td><td>No</td><td>Yes</td><td>c = 6</td></tr><tr><td>No</td><td>No</td><td>d = 5</td><td>No</td><td>No</td><td>d = 33</td></tr><tr><td>Total</td><td></td><td>n = 36</td><td>Total</td><td></td><td>n = 105</td></tr></table>

The two sets of calculations are shown below in parallel:

$$
\begin{array}{l l}{{p_{1}=(10+15)/36=0.694}}&{{\qquad p_{1}=(51+15)/105=0.629}}\\ {{p_{2}=(10+6)/36=0.444}}&{{\qquad p_{2}=(51+6)/105=0.543}}\\ {{p_{1}-p_{2}=0.250}}&{{\qquad p_{1}-p_{2}=0.086}}\\ {{s e(p_{1}-p_{2})}}&{{=\frac{1}{36}\sqrt{21-9^{2}/36}}}\\ {{}}&{{=0.1203}}\end{array} \tag{ii}
$$

$95\%$  CI is  $0.250 \pm 1.96 \times 0.1203$ $95\%$  CI is  $0.086 \pm 1.96 \times 0.0428$

i.e. 0.014 to 0.486.

i.e. 0.002 to 0.170.

Both confidence intervals behave as expected, with the lower limit close to zero. The  $95\%$  confidence interval for the difference in proportions is much narrower for the larger sample, as we would expect. Note that the difference between data sets (i) and (ii) is the change in  $p_{1}$  and  $p_{2}$  and thus  $p_{1} - p_{2}$ , none of which is seen when only testing the hypothesis that  $b = c$ .

## 10.5 COMPARING SEVERAL PROPORTIONS

When comparing several proportions relating to different groups of subjects two alternative cases must be considered, according to whether the groups are ordered or not. These problems are discussed in section 10.8, as they are more easily considered in the framework of frequency tables.

The comparison of more than two paired proportions is beyond the scope of this book. The analysis is described by Fleiss (1981, p. 126).

## 10.6 THE ANALYSIS OF FREQUENCY TABLES

Proportions are a way of expressing counts or frequencies when there are only two possible outcomes, such as the presence or absence of a symptom. A more general way of showing frequencies is in a table, where each cell of the table corresponds to a particular combination of characteristics relating to two or more classifications. Here I will deal only with 'two way' tables, which relate to two categorical variables. Frequency tables are sometimes called contingency tables.

There is a single, general approach to the analysis of all frequency tables, but in practice the method of analysis varies according to

1. the number of categories

2. whether the categories are ordered or not

3. the number of independent groups of subjects, and

4. the nature of the question being asked.

I will first consider the general approach, and then several special cases.

### 10.6.1 The general case - the  $r \times c$  table

An example of a two way frequency table is given in Table 10.5, which shows caffeine consumption by marital status in a sample of 3888 antenatal patients. Although the methods we use to analyse data of this type are based on the observed frequencies, it is easier to see what is going on by expressing the frequencies as percentages of either the row or column totals, especially when there are large variations among the row or column totals. Table 10.6 shows the data from Table 10.5 expressed as row percentages. In this section I shall describe the general approach to frequency tables with  $r$  rows and  $c$  columns - the  $r \times c$  table. Although this method can be used for tables of any size, if either  $r$  or  $c$  is equal to 2, the method can be simplified (see section 10.7 for  $2 \times 2$  tables and section 10.8 for  $2 \times k$  tables).

Table 10.5 Caffeine consumption and marital status in antenatal patients (from Martin and Bracken, 1987)  

<table><tr><td rowspan="2">Marital status</td><td rowspan="2">0</td><td colspan="4">Caffeine consumption (mg/day)</td></tr><tr><td>1-150</td><td>151-300</td><td>&amp;gt; 300</td><td>Total</td></tr><tr><td>Married</td><td>652</td><td>1537</td><td>598</td><td>242</td><td>3029</td></tr><tr><td>Divorced, separated or widowed</td><td>36</td><td>46</td><td>38</td><td>21</td><td>141</td></tr><tr><td>Single</td><td>218</td><td>327</td><td>106</td><td>67</td><td>718</td></tr><tr><td>Total</td><td>906</td><td>1910</td><td>742</td><td>330</td><td>3888</td></tr></table>

Table 10.6 Caffeine consumption and marital status data from Table 10.5 expressed as row percentages  

<table><tr><td rowspan="2">Marital status</td><td colspan="5">Caffeine consumption (mg/day)</td></tr><tr><td>0</td><td>1-150</td><td>151-300</td><td>&amp;gt; 300</td><td>Total</td></tr><tr><td>Married</td><td>22%</td><td>51%</td><td>20%</td><td>8%</td><td>3029 (100%)</td></tr><tr><td>Divorced, separated or widowed</td><td>26%</td><td>33%</td><td>27%</td><td>15%</td><td>141 (100%)</td></tr><tr><td>Single</td><td>30%</td><td>46%</td><td>15%</td><td>9%</td><td>718 (100%)</td></tr><tr><td>Total</td><td>23%</td><td>49%</td><td>19%</td><td>8%</td><td>3888 (100%)</td></tr></table>

The analysis of frequency tables is largely based on hypothesis testing. The null hypothesis is that the two classifications (caffeine consumption and marital status) are unrelated in the relevant population (antenatal patients). We compare the observed frequencies with what we would expect if the null hypothesis were true. We base our calculation of the expected frequencies on the distribution of the variables in the whole sample, as indicated by the row and column totals. The combinations of row and column categories are known as cells.

For reasons that will be explained in section 10.6.4 it turns out that the appropriate test statistic is obtained from the observed and expected frequencies,  $o$  and  $E$  respectively, by calculating the sum of the quantities  $(O - E)^{2} / E$  for all the cells in the table. The further the observed values are away from the expected values, the less likely is it that the null hypothesis is true. Thus a large value of  $\Sigma (O - E)^{2} / E$  is evidence that the row and column variables are not independent.

### 10.6.2 Expected frequencies

If the null hypothesis is true and the two variables are unrelated (i.e. independent) then the probability of an individual being in a particular row is independent of which column they are in. The probability of being in a particular cell of the table is thus simply the product of the probabilities of being in the row and the column containing that cell. These probabilities are estimated using the observed proportions. For example, there were 3029 married women in the sample of 3888, so that the proportion of married women was 3029/3888. Likewise the proportion of women consuming no caffeine was 906/3888. Thus if marital status and caffeine consumption are independent the expected proportion of the whole sample who are married and consume no caffeine is the product of these proportions:

$$
\frac{3029}{3888} \times \frac{906}{3888} = 0.182.
$$

To get the expected frequency in that cell of the table we multiply by the sample size, to get

$$
3888 \times \frac{3029}{3888} \times \frac{906}{3888} = \frac{3029 \times 906}{3888} = 705.8.
$$

The expected frequency in each cell is thus the product of the relevant row and column totals divided by the sum of all the observed frequencies in the table (i.e. the sample size). Table 10.7 shows the expected frequencies for the whole table. The hypothesis test is based on the difference between the frequencies in Tables 10.5 and 10.7. As explained in section 10.6.4, the appropriate test statistic is obtained by calculating the

Table 10.7 Expected frequencies corresponding to Table 10.5  

<table><tr><td rowspan="2">Marital status</td><td rowspan="2">0</td><td colspan="4">Caffeine consumption (mg/day)</td></tr><tr><td>1-150</td><td>151-300</td><td>&amp;gt; 300</td><td>Total</td></tr><tr><td>Married</td><td>705.8</td><td>1488.0</td><td>578.1</td><td>257.1</td><td>3029</td></tr><tr><td>Divorced, separated or widowed</td><td>32.9</td><td>69.3</td><td>26.9</td><td>12.0</td><td>141</td></tr><tr><td>Single</td><td>167.3</td><td>352.7</td><td>137.0</td><td>60.9</td><td>718</td></tr><tr><td>Total</td><td>906</td><td>1910</td><td>742</td><td>330</td><td>3888</td></tr></table>

sum of the quantities  $(O - E)^{2} / E$  for all the cells in the table, where  $0$  and  $E$  denote the observed and expected frequencies. The test statistic  $X^{2}$  is thus

$$
X^{2} = \sum_{i = 1}^{r}\sum_{j = 1}^{c}\frac{(O_{ij} - E_{ij})^{2}}{E_{ij}},
$$

where  $i$  indicates the row number and  $j$  the column number. This formula is often written simply as

$$
X^{2} = \sum \frac{(O - E)^{2}}{E}.
$$

Note that the sum of all the differences  $O_{ij} - E_{ij}$  is zero because the observed and expected frequencies both add up to the sample size. We square the differences before adding them, as we do when calculating the standard deviation of a set of observations around their mean.

When the null hypothesis is true the statistic  $X^{2}$  has a Chi squared distribution; this was briefly introduced in section 9.8.6. For this reason the test is usually called the Chi squared test. The test statistic is often written  $x^{2}$ , but it is better to call the test statistic  $X^{2}$  to distinguish it from the theoretical distribution.

### 10.6.3 The Chi squared distribution

The definition of the Chi squared distribution is simple. If we have a quantity (variable)  $X$  which has a standard Normal distribution, then  $X^{2}$  has a Chi squared distribution. Clearly  $X^{2}$  can have only positive values, and its distribution is highly skewed. This distribution of  $X^{2}$  has one degree of freedom, and is the simplest case of a more general 'family' of Chi squared distributions. If we have several independent variables, each of which has a standard Normal distribution, say  $X_{1}, X_{2}, X_{3}, \ldots , X_{k}$ , then the sum of the squares of all the  $X$ s,  $\sum X_{i}^{2}$ , has a Chi squared

![](../images/10_Comparing_groups_categorical_data/img2.jpg)  
Figure 10.2 Chi squared distributions with different numbers of degrees of freedom.

distribution with  $k$  degrees of freedom. Figure 10.2 shows theoretical Chi squared distributions with different degrees of freedom.

The Chi squared distribution with one degree of freedom is the square of a standard Normal distribution, so the  $5\%$  cut- off point for  $X^{2}$  is the square of the  $5\%$  cut- off for the Normal distribution, that is,  $1.96^{2}$  or 3.84. Note that the upper tail of the Chi squared distribution with one degree of freedom corresponds to both tails of the standard Normal distribution. In other words, for a hypothesis test we compare  $X^{2}$  with  $\chi_{0.95}^{2}$ .

The number of degrees of freedom when using the Chi squared test for a two way frequency table is the product  $(r - 1)(c - 1)$ , where  $r$  is the number of rows and  $c$  the number of columns. For a  $2 \times 2$  table, therefore, we compare our test statistic  $X^{2}$  with the Chi squared distribution with one degree of freedom. Table 10.5 has 3 rows and 4 columns so we must refer  $X^{2}$  to the Chi squared distribution with  $(3 - 1)(4 - 1) = 6$  degrees of freedom. The expected value of the Chi squared distribution when the null hypothesis is true is the number of degrees of freedom. Because any differences between observed and expected frequencies are squared, non- independence of the row and column variables is indicated by high values of  $X^{2}$ . Table B5 gives upper tail areas for Chi squared distributions with different degrees of freedom. It is simple to verify that the entries for one degree of freedom are the squares of the corresponding two- tailed areas of the Normal distribution in Table B2. The next two sections explain why we use the Chi squared distribution for analysing frequency tables, and also why the degrees of freedom are  $(r - 1)(c - 1)$ .

###10.6.4 Why we use the Chi squared distribution

(This short section is more theoretical although not highly mathematical. It explains the rationale behind the use of the Chi squared distribution, the most common method for analysing frequency tables. It can be omitted without loss of continuity.)

Why is the Chi squared distribution appropriate for the analysis of categorical data? Strangely, the answer to this question involves both the Poisson and Normal distributions. If we observe a number of independent individuals, and categorize them into mutually exclusive groups in relation to two classifications, such as in Table 10.5, then the number in any cell of that table will follow a Poisson distribution if the null hypothesis is true. For the purpose of a hypothesis test we wish to compare the observed number,  $O$ , in each cell with the number expected,  $E$ , if the null hypothesis is true. The Poisson distribution can be approximated by a Normal distribution with mean  $E$  and standard deviation  $\sqrt{E}$ , when  $E$  is not too small. Thus  $X = (O - E) / \sqrt{E}$  has approximately a standard Normal distribution, and  $X^{2} = (O - E)^{2} / E$  has approximately a Chi squared distribution with one degree of freedom. If we have  $k$  independent observed frequencies we can add together the quantities  $(O - E)^{2} / E$  for each to get a Chi squared distribution with  $k$  degrees of freedom. When analysing frequency tables not all of the frequencies are independent, however, so we must modify the degrees of freedom.

### 10.6.5 Degrees of freedom

As shown in section 10.6.2, the expected frequency in any cell is the product of the relevant row and column totals divided by the total sample size. The expected frequencies are calculated from the observed row and column totals, and so the Chi squared test is 'conditional' on these totals. Because of the use of observed totals the expected frequencies are not all independent. Consider the first row of Table 10.5. The expected frequencies are 705.8, 1488.0, 578.1 and 257.1, as shown in Table 10.7. We know. however, that the sum of the expected frequencies in the first row is the same as the sum of the observed frequencies, that is 3029. Any of the expected values can therefore be obtained if we already know all the others in that row. The same applies to every row. There are thus only  $c - 1$  independent columns in the table. Likewise there are only  $r - 1$  independent rows, and consequently  $(r - 1)(c - 1)$  independent frequencies. The test statistic  $X^{2}$  thus follows the Chi squared distribution with  $(r - 1)(c - 1)$  degrees of freedom under the null hypothesis.

We can see the above process very simply in the  $2 \times 2$  table, for which all four expected frequencies can be obtained once we have one of them.

There is thus only one degree of freedom, agreeing with the general formula of  $(r - 1)(c - 1) = (2 - 1)(2 - 1) = 1$ .

### 10.6.6 The Chi squared test for an  $r \times c$  table

In section 10.6.2 I introduced the test statistic  $X^{2}$  for evaluating the null hypothesis that the categorical variables denoting the rows and columns are independent. We can calculate expected frequencies in each cell of the table on the assumption that the null hypothesis is true, and then calculate  $X^{2}$  as

$$
X^{2} = \sum_{i = 1}^{r} \sum_{j = 1}^{c} \frac{(O_{ij} - E_{ij})^{2}}{E_{ij}}
$$

where  $i$  and  $j$  indicate the row and column numbers. Table 10.8 shows the contribution of each cell of Table 10.5 to the test statistic, which is  $X^{2} = 51.61$ . From Table B5 the value of the Chi- squared distribution with 6 degrees of freedom which cuts off  $0.1\%$  in the upper tail is 22.46, so there is a highly significant association  $(P < 0.001)$  between marital status and caffeine consumption in this sample of women. In section 10.9.1 there is further discussion of this data set that takes account of the fact that one of the variables has ordered categories.

Table 10.8 Contributions of each cell in Table 10.5 to  $X^{2} = \Sigma (O - E)^{2} / E$  

<table><tr><td rowspan="2">Marital status</td><td rowspan="2">0</td><td colspan="4">Caffeine consumption (mg/day)</td></tr><tr><td>1-150</td><td>151-300</td><td>&amp;gt; 300</td><td>Total</td></tr><tr><td>Married</td><td>4.11</td><td>1.61</td><td>0.69</td><td>0.89</td><td>7.30</td></tr><tr><td>Divorced, separated or widowed</td><td>0.30</td><td>7.82</td><td>4.57</td><td>6.82</td><td>19.51</td></tr><tr><td>Single</td><td>15.36</td><td>1.88</td><td>7.02</td><td>0.60</td><td>24.86</td></tr><tr><td>Total</td><td>19.77</td><td>11.31</td><td>12.28</td><td>8.31</td><td>51.66</td></tr></table>

### 10.6.7 Interpretation

Many statistical analyses involve evaluation of possible associations between variables, notably the Chi squared test and the equivalent method for relating two continuous variables, correlation (see Chapter 11). It is essential to realize that an observed association does not necessarily indicate a causal relation between variables. We should not infer that marital status influences caffeine consumption, nor indeed that caffeine consumption influences marital status, without external evidence. Very

often, as in this example, there will be other factors that influence both variables. Further discussion of the interpretation of association is given in section 11.8.

A different problem is the interpretation of an observed association between two variables each of which has several categories, as in the caffeine example. Just saying that the two variables are associated is often not very informative. We might wish to know, for example, if one of the three marital status groups differs from the other two groups. Here we have a multiple comparison problem comparable to that for continuous variables discussed in section 9.8.4. One way to proceed is to make comparisons between each pair of groups, or if there is some prior hypothesis that one group might differ then that group could be compared with the combined data from the other groups. These procedures are not ideal because they involve some ad hoc or subjective analyses. The further testing of subsets of a large table should only be carried out if the overall analysis shows some evidence of departure from the null hypothesis (perhaps  $\mathbf{P}< 0.1$ ) or where some specific prior hypothesis exists. Fortunately, as noted below, we do not often have to deal with this type of analysis. In particular, the analysis of tables with only two rows (or columns) is discussed in sections 10.7 and 10.8.

One last important comment on interpretation is the reminder that the size of  $X^{2}$  (or  $\mathbf{P}$ ) does not indicate the strength of the association, but rather the strength of the evidence against the null hypothesis of no association.

### 10.6.8 Sample size

As described in section 10.6.4, the use of Chi squared distribution for the test statistic  $X^{2}$  is based on a 'large sample' approximation. In the context of frequency tables there are some fairly clear guidelines on how large the frequencies need to be for the method to be valid. The guidelines. attributed to the statistician W. G. Cochran, are that  $80\%$  of the cells in the table should have expected frequencies greater than 5, and all cells should have expected frequencies greater than 1. Notice that the observed frequencies are not involved here, only the. expected frequencies.

If any cell had a very small expected frequency it would contribute enormously to the value of  $X^{2}$ . For example, if we observe one subject in a cell with an expected frequency of 0.1, the contribution of that cell to  $X^{2}$  would be  $(1.0 - 0.1)^{2} / 0.1 = 8.1$ , enough to give a significant result in a  $4 \times 2$  table regardless of the other frequencies.

If we have a table with too many small expected frequencies we should find some sensible way to combine some of the categories in the row and/or column variables. There is a special method for  $2 \times 2$  tables with small frequencies (section 10.7.2).

### 10.6.9 Particular types of frequency table

The Chi squared test for the  $r\times c$  frequency table has been discussed and illustrated in its most general form. There are two considerations that determine special types of table and lead to different analyses: firstly if the categories of one variable (or both) are ordered, and secondly if one variable (or both) has only two categories. In practice large tables are rare where neither variable has ordered categories. Indeed the caffeine data used to illustrate the method had one variable ordered, and I shall return to that data set later.

The importance of ordered categories was discussed in section 9.8, and the same argument applies to categorical variables. If we are analysing data for an ordinal variable we will usually wish to know if there is some trend across the ordered groups rather than just whether the groups differ. This more specific possibility allows for a more sensitive (powerful) statistical analysis.

The case when one variable has only two categories is important because the data can also be considered as proportions; the analyses turn out to be precisely equivalent to the methods for comparing proportions described in sections 10.3 and 10.5. Also, although we still use the same general formula of  $X^{2} = \Sigma [(O - E)^{2} / E]$  , it can be simplified for easier calculation. The simplest frequency table, the  $2\times 2$  table, turns out to have certain problems all of its own, especially for small samples. The various types of table to consider are listed in Table 10.9 with the numbers of the sections in which the analysis is described.

Table 10.9 Different types of frequency table, according to number of categories (2 or  $^{3 + }$  ) and whether categories are ordered  

<table><tr><td colspan="2">Number of categories</td><td rowspan="2">Section of book</td></tr><tr><td>Variable 1</td><td>Variable 2</td></tr><tr><td>2</td><td>2</td><td>10.7</td></tr><tr><td>2</td><td>3+ not ordered</td><td>10.8.1</td></tr><tr><td>2</td><td>3+ ordered</td><td>10.8.2</td></tr><tr><td>3+ not ordered</td><td>3+ not ordered</td><td>10.6.6</td></tr><tr><td>3+ ordered</td><td>3+ not ordered</td><td>10.9.1</td></tr><tr><td>3+ ordered</td><td>3+ ordered</td><td>10.9.2</td></tr></table>

The analysis of  $2 \times 2$  tables is one of the most common in medical research, so I shall consider it first.

## 10.7  $2\times 2$  FREQUENCY TABLES - COMPARISON OF TWO PROPORTIONS

The analysis of  $2\times 2$  tables follows the same basic method as used for larger tables, but there are some particular features to note. Table 10.10 shows data from a case- control study carried out among swimmers to investigate the possible association between exposure to chlorinated swimming pool water and erosion of dental enamel. Among 49 swimmers with enamel erosion (the cases) 32 reported swimming six or more hours per week, compared with 118 of 245 swimmers without enamel erosion (the controls). We can see that, although the data are displayed as a  $2\times 2$  frequency table, the comparison of the groups is in fact a comparison of two proportions. I shall show in section 10.7.4 that the Chi squared test is exactly equivalent to the hypothesis test for comparing two proportions given in section 10.3.

Table 10.10 Comparison of number of hours' swimming by swimmers with or without erosion of dental enamel (Cen terwall et al., 1986)  

<table><tr><td rowspan="2">Amount of swimming per week</td><td colspan="3">Erosion of dental enamel</td></tr><tr><td>Yes (cases)</td><td>No (controls)</td><td>Total</td></tr><tr><td>≥ 6 hours</td><td>32</td><td>118</td><td>150</td></tr><tr><td>&amp;lt; 6 hours</td><td>17</td><td>127</td><td>144</td></tr><tr><td>Total</td><td>49</td><td>245</td><td>294</td></tr></table>

The null hypothesis is that enamel erosion is unrelated to amounts of swimming (and hence exposure to chlorinated water). To perform a Chi squared test we need to calculate the expected frequencies if the null hypothesis is true. It will help in the calculations if we use  $a,b,c$  and  $d$  to denote the four observed frequencies, as in Table 10.11.

Table 10.11 General  $2\times 2$  frequency table  

<table><tr><td></td><td>Column 1</td><td>Column 2</td><td>Total</td></tr><tr><td>Row 1</td><td>a</td><td>b</td><td>a + b</td></tr><tr><td>Row 2</td><td>c</td><td>d</td><td>c + d</td></tr><tr><td>Total</td><td>a + c</td><td>b + d</td><td>N</td></tr></table>

As we saw in section 10.6.2 the expected frequency in a cell is the product of the relevant row and column totals divided by the sample size. For the cell with observed frequency  $a$ , for example, the expected value is  $(a + b)(a + c) / N$ . For the data in Table 10.10 the expected frequencies and contributions to  $X^{2}$  are shown in Table 10.12. The difference  $O - E$  is the same, apart from its sign, for all four cells, and this is true for all  $2 \times 2$  tables. This demonstrates that we have only one independent observation rather than four and so just one degree of freedom.

Table 10.12 Expected frequencies and contributions to  $X^{2}$  for the data in Table 10.10  

<table><tr><td rowspan="2">Observed frequency (O)</td><td rowspan="2">Expected frequency (E)</td><td rowspan="2">O-E</td><td>(O-E)²</td></tr><tr><td>E</td></tr><tr><td>a = 32</td><td>E(a) = 25</td><td>7</td><td>1.960</td></tr><tr><td>b = 118</td><td>E(b) = 125</td><td>-7</td><td>0.392</td></tr><tr><td>c = 17</td><td>E(c) = 24</td><td>-7</td><td>2.042</td></tr><tr><td>d = 127</td><td>E(d) = 120</td><td>7</td><td>0.408</td></tr><tr><td>Total 294</td><td>294</td><td>0</td><td>X²= 4.802</td></tr></table>

For a  $2 \times 2$  table the formula for  $X^{2}$  can be simplified. The contribution from the first cell in the table to  $X^{2} = \Sigma [(O - E)^{2} / E]$  can be expressed as

$$
\frac{\left[a - \frac{(a + b)(a + c)}{N}\right]^{2}}{\frac{(a + b)(a + c)}{N}}
$$

and we can produce similar expressions for the other three cells. The sum of the four terms, after much tedious manipulation, can be turned into

$$
X^{2} = \frac{N(ad - bc)^{2}}{(a + b)(a + c)(b + d)(c + d)}.
$$

This version of the formula for  $X^{2}$  is often used for  $2 \times 2$  tables, because it avoids the need to calculate the expected values explicitly. It is important to appreciate that this formula for  $X^{2}$  from a  $2 \times 2$  table is mathematically identical to the general formula  $X^{2} = \Sigma [(O - E)^{2} / E]$ .

For the data in Table 10.10 we get

$$
\begin{aligned} X^{2} & = \frac{294 \times (32 \times 127 - 118 \times 17)^{2}}{150 \times 49 \times 245 \times 144} \\ & = 4.802 \end{aligned}
$$

which agrees with Table 10.12. From Table B5 we get  $P < 0.05$ , suggesting

that there is evidence in support of an association between amount of swimming and erosion of dental enamel.

The Chi squared test is a hypothesis test. It is an exactly equivalent test to the comparison of two proportions described in section 10.3.3, but no estimate of the difference between the groups (or a confidence interval) is obtained when the data are analysed in this way. The approach based on comparing proportions is therefore preferable. There is a third way of comparing proportions, which involves calculating the ratio of proportions in two groups rather than their difference. This approach is particularly suitable for case- control studies and is described in section 10.11.

### 10.7.1 Continuity correction

When the sample sizes are small the use of the continuous Chi squared distribution to approximate frequencies introduces some bias into the calculation, so that the value of  $X^{2}$  tends to be a little too large. We use a continuity correction to remove the bias, in the same way as when comparing two proportions (section 10.3.3). In the context of  $2 \times 2$  tables the correction is known as Yates' correction after the statistician who devised it.

The correction consists of moving each  $O - E$  nearer to zero by  $\frac{1}{2}$ . In other words we replace  $O - E$  by  $|O - E| - \frac{1}{2}$ . The short cut formula with Yates' correction becomes

$$
X_{Y}^{2} = \frac{N\left(|ad - bc| - \frac{N}{2}\right)^{2}}{(a + b)(a + c)(b + d)(c + d)}.
$$

I recommend that this formula is used for all Chi squared tests on  $2 \times 2$  tables, although for large samples the effect of the correction will be small.

For the dental erosion data the use of the continuity correction gives

$$
\begin{array}{c}{{X_{Y}^{2}=\frac{294\times\left(|32\times127-118\times17|-{\frac{294}{2}}\right)^{2}}{150\times49\times245\times144}}}\\ {{=4.140}}\end{array}
$$

and we still have  $\mathbf{P}< 0.05$

For small samples, however, the difference between  $X^{2}$  and  $X_{Y}^{2}$  is more marked. The data from the previously discussed trial of IRS  $\nu$  placebo in patients with cervical osteoarthrosis will illustrate the effect; the results are shown as a frequency table in Table 10.13. The uncorrected Chi squared test gives

$$
\begin{array}{c}{{X^{2}=\frac{25\times(9\times9-4\times3)^{2}}{13\times12\times12\times13}}}\\ {{=4.891\qquad(\mathrm{P}< 0.05)}}\end{array}
$$

Table 10.13 Results of a clinical trial comparing IRS  $\nu$  placebo (Lewith and Machin, 1981)  

<table><tr><td></td><td></td><td>IRS</td><td>Placebo</td><td>Total</td></tr><tr><td rowspan="3">Improvement in pain</td><td>Yes</td><td>9</td><td>4</td><td>13</td></tr><tr><td>No</td><td>3</td><td>9</td><td>12</td></tr><tr><td>Total</td><td>12</td><td>13</td><td>25</td></tr></table>

whereas the use of Yates' correction gives

$$
X_{Y}^{2} = \frac{25\times(|9\times9 - 4\times3| - \frac{5}{2})^{2}}{13\times12\times12\times13}
$$

$$
= 3.279\qquad (\mathrm{P} > 0.05).
$$

This example shows the advantage of giving more exact  $\mathbf{P}$  values, rather than imprecise ones obtained from a table. Many computer programs give the precise  $\mathbf{P}$  values for Chi squared tests, which for  $X^{2}$  and  $X_{Y}^{2}$  in this example are  $\mathbf{P} = 0.027$  and  $\mathbf{P} = 0.070$  respectively. As discussed in section 8.5, we should not make a radical adjustment to our interpretation just because the  $\mathbf{P}$  value has moved the other side of 0.05, but the evidence of an association is weaker when we use the more appropriate version of the test with Yates' correction.

These results are exactly the same as when the proportions in the two groups were compared in section 10.3. As noted, the Chi squared method yields only a  $\mathbf{P}$  value, whereas the comparison of proportions also yields the difference in proportions and its confidence interval. The mathematical equivalence of the two methods is demonstrated in section 10.7.4. It follows that the Chi squared test is equivalent to a comparison of the proportions in the columns and also a comparison of the proportions in the rows.

### 10.7.2 Small samples - Fisher's exact test

The use of Yates' correction does not remove the requirement concerning the size of the expected frequencies. Using the earlier rule that  $80\%$  of cells should have expected values of at least 5 we would require all cells of a  $2\times 2$  table to have this property, although in practice this rule can be relaxed to allow one cell to have an expected value slightly lower than 5. Note that all the expected frequencies in Table 10.13 are greater than 5 even though two of the observed frequencies are less than 5.

There is an alternative approach for tables with very small expected frequencies, known as Fisher's exact test after the famous statistician R. A.

Fisher. Although the method is different in principle from any other described in this chapter, it is also based on the observed row and column totals. The method consists of evaluating the probability associated with all possible  $2 \times 2$  tables which have the same row and column totals as the observed data, making the assumption that the null hypothesis is true. As before, the null hypothesis here is that the row and column variables are unrelated. Like the Chi squared test, the method is purely a hypothesis test.

Table 10.14 shows data from a study comparing the health of juvenile delinquent boys and a control group. For each group, the number of boys with vision defects is shown, together with the numbers who did or did not wear spectacles (glasses). We can test the null hypothesis that the proportions wearing glasses in the population are the same; that is, that juvenile delinquents are equally likely to be aware of poor eyesight as other boys. The expected numbers in three of the four cells are below 5, so we should not use a Chi squared test, but we can use Fisher's exact test for which there is no sample size restriction.

Table 10.14 Spectacle wearing among juvenile delinquents and non-delinquents who failed a vision test (Weindling et al., 1986)  

<table><tr><td></td><td></td><td>Juvenile delinquents</td><td>Non-delinquents</td><td>Total</td></tr><tr><td rowspan="3">Spectacle wearers</td><td>Yes</td><td>1</td><td>5</td><td>6</td></tr><tr><td>No</td><td>8</td><td>2</td><td>10</td></tr><tr><td>Total</td><td>9</td><td>7</td><td>16</td></tr></table>

Table 10.15 shows all the possible sets of frequencies which add up to the observed row and column totals, one of which (table (ii)) corresponds to the observed data. For each table we can calculate the probability of such data arising if the null hypothesis is true. We then use these probabilities to calculate the overall probability of getting the observed data, or a less likely result, when the null hypothesis is true.

The mathematical formula to calculate each probability is rather complicated, so the calculation is much better done by a computer. Unfortunately, statistical packages do not include Fisher's exact test, so the calculations are described in section 10.7.3.

Table 10.16 shows the probabilities associated with all seven sets of frequencies shown in Table 10.15. The overall probability of obtaining a difference between the groups at least as large as the observed difference

Table 10.15 All tables of frequencies which have the same row and column totals as Table 10.14

![](../images/10_Comparing_groups_categorical_data/img3.jpg)

![](../images/10_Comparing_groups_categorical_data/img4.jpg)  
(ii)

![](../images/10_Comparing_groups_categorical_data/img5.jpg)  
(iii)

![](../images/10_Comparing_groups_categorical_data/img6.jpg)

Table 10.16 Probability associated with each set of frequencies in Table 10.15  

<table><tr><td></td><td>a</td><td>b</td><td>c</td><td>d</td><td>P</td></tr><tr><td>(i)</td><td>0</td><td>6</td><td>9</td><td>1</td><td>0.00087</td></tr><tr><td>(ii)</td><td>1</td><td>5</td><td>8</td><td>2</td><td>0.02360</td></tr><tr><td>(iii)</td><td>2</td><td>4</td><td>7</td><td>3</td><td>0.15734</td></tr><tr><td>(iv)</td><td>3</td><td>3</td><td>6</td><td>4</td><td>0.36713</td></tr><tr><td>(v)</td><td>4</td><td>2</td><td>5</td><td>5</td><td>0.33042</td></tr><tr><td>(vi)</td><td>5</td><td>1</td><td>4</td><td>6</td><td>0.11014</td></tr><tr><td>(vii)</td><td>6</td><td>0</td><td>3</td><td>7</td><td>0.01049</td></tr><tr><td colspan="6">Total 0.99999</td></tr></table>

when the null hypothesis is true can be calculated in two ways. The first is to evaluate the probabilities in the 'tail' of the distribution in which the observed data fall and then double this value to get a two- tailed test. From Table 10.16 we use the probabilities for tables (i) and (ii) to get  $\mathrm{P} = (0.00087 + 0.02360) \times 2 = 0.049$ . Alternatively, we can add up the probabilities of all tables that have probabilities less than or equal to that

corresponding to the observed data. For the example we use the probabilities for tables (i), (ii) and (vii) to get  $\mathbf{P} = 0.00087 + 0.02360 + 0.01049 =$  0.035. I feel that the second approach is more reasonable, but many statisticians recommend doubling the  $\mathbf{P}$  value obtained for one tail. In most cases the difference will not be marked (but occasionally it can be). The second approach will always give a value of  $\mathbf{P}$  less than or equal to that obtained by the first method. In this example we can conclude that there is some evidence that juvenile delinquents are less aware of eyesight problems than non- delinquents.

Lastly, it should be noted that Fisher's exact test usually gives a value for  $\mathbf{P}$  that is much the same as that from a Chi squared test with Yates' correction even when the expected frequencies are too small for the latter approach, suggesting that the rule relating to expected frequencies is probably too restrictive. Fisher's exact test is purely a hypothesis test - there is no equivalent method of estimation for comparing proportions from very small samples.

### 10.7.3 Fisher's exact test - mathematics and worked example

(This section is more theoretical although not highly mathematical. It can be omitted without loss of continuity.)

The probability of obtaining the cell frequencies  $a,b,c$  and  $d$  when the null hypothesis is true and the row and column totals are fixed is given by

$$
\frac{(a + b)!(a + c)!(b + d)!(c + d)!}{N!a!b!c!d!}
$$

where the symbol  $x!$  , called  $^{\ast}x$  factorial', means that we multiply together all the integers from 1 up to  $x$  (see Appendix A). For example.  $4! = 1\times 2\times 3\times 4 = 24$  . (Note that we need to define  $0! = 1.$  ) This peculiar formula is derived from calculating the number of different ways (combinations) in which the  $N$  individuals can be arranged in a table to give the observed row and column totals. Table 10.15 shows the seven such tables for the eyesight data of Table 10.14.

For the first possibility (i) we have  $a = 0$  ,  $b = 6$  ,  $c = 9$  and  $d = 1$  , so that the probability of this table arising by chance when the null hypothesis is true is

$$
6!9!7!10! 16!0!6!9!1!
$$

Evaluating this formula is tedious. In this example there are some 70 numbers in the calculation, and multiplying together all the numbers in the top row first may exceed the storage capability of a calculator or computer. However,  the  calculation  can  usually  be  simplified  by  cancelling out

sequences that appear on the top and bottom of the formula. Here 6! and 9! can be deleted immediately, and we can omit 0! and 1! as they are both equal to 1, so that the probability reduces to

$$
\begin{array}{r l} & {\frac{7!10!}{16!} = \frac{1\times2\times3\times4\times5\times6\times7}{11\times12\times13\times14\times15\times16}}\\ & {\qquad = \frac{1}{11\times13\times8}}\\ & {\qquad = 0.0087.} \end{array}
$$

For table (ii), which corresponds to the observed data, we get a probability of

$$
\frac{6!9!7!10!}{16!15!8!2!}.
$$

We can simplify this expression by noting that  $9! / 8! = 9$ , and so on, to get

$$
\begin{array}{c}{{\frac{6\times9\times2\times3\times4\times5\times6\times7}{11\times12\times13\times14\times15\times16\times2}}}\\ {{=0.02360.}}\end{array}
$$

To perform Fisher's exact test we carry out the same calculation for all tables, as shown in Table 10.16. We could just calculate the probability for those tables which contribute to the tail(s) of the distribution of probabilities, but it is not easy to identify these in advance. The benefit of a computer program is clearly seen.

### 10.7.4 Equivalence of the comparison of proportions and the Chi squared test

(This section is more theoretical although not highly mathematical. It can be omitted without loss of continuity.)

I have commented more than once that the method for comparing two independent proportions is identical to the Chi squared test for a  $2 \times 2$  table. This can be shown mathematically, by expressing the comparison of two proportions in the notation of Table 10.11. We have  $p_{1} = a / (a + c)$ ,  $p_{2} = b / (b + d)$ , and the pooled proportion is  $p = (a + b) / N$ , so that the value of  $z$  for comparing the two observed proportions is

$$
z = \frac{p_{1} - p_{2}}{\sqrt{p(1 - p)\left(\frac{1}{n_{1}} + \frac{1}{n_{2}}\right)}}
$$

$$
z = \frac{\frac{a}{a + c} - \frac{b}{b + d}}{\sqrt{\frac{a + b}{N} \frac{c + d}{N} \left(\frac{1}{a + c} + \frac{1}{b + d}\right)}}
$$

which, after some manipulation, gives

$$
\begin{array}{c}{{z=\sqrt{\frac{N(a d-b c)^{2}}{(a+b)(a+c)(b+d)(c+d)}}}}\\ {{=\sqrt{X^{2}}.}}\end{array}
$$

The value of  $z$  is thus the square root of the value of  $X^{2}$ , and the two tests are equivalent because, as noted in section 10.6.3, the Chi squared distribution with one degree of freedom is the square of the standard Normal distribution.

### 10.7.5  $2 \times 2$  tables - paired samples

Paired proportions may also be shown as a  $2 \times 2$  table. For example, the data in Table 10.3 can be rearranged as in Table 10.17. Although the table closely resembles those relating to the comparison of two independent proportions, such as Tables 10.10, 10.13 and 10.14, it is essential to remember that the proportions are paired and so the usual Chi squared test is inappropriate.

Table 10.17 Results of Table 10.3 rearranged as a  $2\times 2$  table, showing numbers with  $(+)$  or without  $(-)$  sleeping difficulties among marijuana users and matched controls  

<table><tr><td rowspan="2"></td><td rowspan="2"></td><td colspan="3">Marijuana group</td></tr><tr><td>+</td><td>-</td><td>Total</td></tr><tr><td rowspan="3">Control group</td><td>+</td><td>4</td><td>9</td><td>13</td></tr><tr><td>-</td><td>3</td><td>16</td><td>19</td></tr><tr><td>Total</td><td>7</td><td>25</td><td>32</td></tr></table>

The comparison of paired proportions is based on the frequencies of pairs with different outcomes, as we saw in section 10.4 where the confidence interval and hypothesis test were described. In section 10.4.3 the test statistic incorporating the continuity correction was given as

$$
z_{c} = \frac{|b - c| - 1}{\sqrt{b + c}}.
$$

Sometimes the test statistic is calculated slightly differently as

$$
X^{2} = \frac{(|b - c| - 1)^{2}}{b + c},
$$

which is clearly equal to  $z_{c}^{2}$ . The value of  $X^{2}$  is referred to the Chi squared distribution with one degree of freedom. As we have seen for independent proportions these two tests are exactly equivalent.

The test of paired proportions is often known as McNemar's test, especially when the data are shown as a  $2 \times 2$  table.

## 10.8  $2 \times k$  TABLES - COMPARISON OF SEVERAL PROPORTIONS

As indicated earlier, the statistical comparison of proportions derived from more than two groups differs according to whether the categories defining the groups are ordered or not.

Discussing  $2 \times k$  tables as a special case makes it rather easier to discuss the problems of multiple comparisons, and to consider the special situation of ordered groups. Also there is a 'short- cut' formula available for hand calculations.

### 10.8.1 Unordered categories

Table 10.18 shows reported eye strain for four types of office workers. The data are from a study carried out to assess possible harmful effects of using visual display units (VDUs) (i.e. computer monitors). The null hypothesis is that there is no difference in the proportions reporting eye strain in the four groups.

Analysis of proportions from unordered categories can be based on

Table 10.18 Eye strain reported by four groups of office workers (Reading and Weale, 1986)  

<table><tr><td>Type of work</td><td>Number in sample</td><td>Number with eye strain</td><td>Proportion with eye strain</td></tr><tr><td>Data entry in VDUs</td><td>53</td><td>11</td><td>0.208</td></tr><tr><td>Conversational use of VDUs</td><td>109</td><td>30</td><td>0.275</td></tr><tr><td>Full-time typing</td><td>78</td><td>14</td><td>0.179</td></tr><tr><td>Traditional office work (clerical)</td><td>55</td><td>3</td><td>0.055</td></tr><tr><td>Total</td><td>295</td><td>58</td><td>0.197</td></tr></table>

calculation of  $X^{2}$  according to the general formula previously given:  $X^{2} = \Sigma [(O - E)^{2} / E]$  . An alternative formulation is as follows. If there are  $n_{i}$  subjects in group  $i$  , of whom  $r_{i}$  have the characteristic of interest, we can calculate  $X^{2}$  as

$$
X^{2} = \frac{\sum_{i = 1}^{k}(r_{i}^{2} / n_{i}) - R^{2} / N}{P(1 - P)}
$$

where  $R$  is the total number with the characteristic  $(R = \Sigma r_{i})$  ,  $N$  is the total sample size, and  $P = R / N$  . We compare  $X^{2}$  to the Chi squared distribution with  $k - 1$  degrees of freedom. For the data in Table 10.18, we have

$$
\begin{array}{r}{X^{2} = \frac{\frac{11^{2}}{53} + \frac{30^{2}}{109} + \frac{14^{2}}{78} + \frac{3^{2}}{55} - \frac{58^{2}}{295}}{\frac{58}{295}\times\frac{237}{295}}}\\ {= \frac{1.8130}{0.1580}}\\ {= 11.48} \end{array}
$$

which, from the table of Chi squared with 3 degrees of freedom (Table B5), corresponds to  $\mathbf{P}< 0.01$  (the exact value is  $\mathbf{P} = 0.0094)$  . There is thus strong evidence that eye strain is not equally common in all four groups.

Interpretation  of  this  highly  significant  variation  among  the  groups depends upon isolating which groups differ from the others. In the absence of any prior hypothesis comparison of each pair of groups requires six further tests, and the risk of a false positive result is high unless we adjust the  $\mathbf{P}$  values. A better approach is often to combine, or 'collapse', some groups. As this study was carried out to examine the possible adverse health effect of using VDUs, the two VDU groups can reasonably be combined and compared with each of the other two groups. Of the subjects in the two VDU groups combined, 41/162 (0.253) had eye strain.

The results of the three paired comparisons (  $2\times 2$  tables with Yates' correction) are as follows:

<table><tr><td>Comparison</td><td>X²</td><td>P</td></tr><tr><td>VDU v Typing:</td><td>1.22</td><td>0.27</td></tr><tr><td>VDU v Traditional:</td><td>8.82</td><td>0.003</td></tr><tr><td>Typing v Traditional:</td><td>3.47</td><td>0.06</td></tr></table>

It seems, therefore, that both typing and using a VDU, especially the latter, are associated with more eye strain than traditional clerical offi

work. We probably should multiply the  $\mathbf{P}$  values by three (the Bonferroni correction) to allow for the multiple comparisons. Either way there is no evidence from this study to suggest that use of a VDU is associated with more eye strain than typing.

### 10.8.2 Ordered categories

When we wish to compare frequencies or proportions among groups which have an ordering, we should make use of the ordering to increase the power of the statistical analysis. The method described in the previous section assesses departure of the observed data from the null hypothesis that the groups are the same, but in no particular manner. When the groups are ordered we usually expect any differences among the groups to be related to the ordering. Failure to take account of the ordering of groups is a common statistical error (Moses et al., 1984). Two main possible analyses are described below.

#### (a) Chi squared test for trend

We can subdivide variation among groups into that due to a trend in proportions across the groups and the remainder. Although the value of  $X^{2}$  for trend will always be less than  $X^{2}$  for the overall comparison, the Chi squared test for trend is a powerful method of analysis because it yields a test statistic from a Chi squared distribution with one degree of freedom rather than  $k - 1$  degrees of freedom for the usual Chi squared test. If most of the variation is due to a trend across the groups, then the test for trend will yield a much smaller  $\mathbf{P}$  value.

The test for trend will be illustrated using the data in Table 10.19 (already shown as Table 10.1) relating the frequency of babies delivered by Caesarean section to maternal shoe size. The rationale for this study was that small shoe size is a simple indicator of possible birth difficulty due to a small pelvis. The data for larger shoe sizes have been amalgamated to give adequate expected numbers in all cells. The standard Chi squared test of this  $2 \times 6$  table give  $X^{2} = 9.29$  with 5 degrees of freedom, for which  $\mathbf{P} = 0.098$ .

Table 10.19 Relation between frequency of Caesarean section and maternal shoe size (Frame et al., 1985)  

<table><tr><td rowspan="2">Caesarean section</td><td colspan="7">Shoe size</td></tr><tr><td>&amp;lt; 4</td><td>4</td><td>4 1/2</td><td>5</td><td>5 1/2</td><td>6+</td><td>Total</td></tr><tr><td>Yes</td><td>5</td><td>7</td><td>6</td><td>7</td><td>8</td><td>10</td><td>43</td></tr><tr><td>No</td><td>17</td><td>28</td><td>36</td><td>41</td><td>46</td><td>140</td><td>308</td></tr><tr><td>Total</td><td>22</td><td>35</td><td>42</td><td>48</td><td>54</td><td>150</td><td>351</td></tr></table>

![](../images/10_Comparing_groups_categorical_data/img7.jpg)  
Figure 10.3 Proportions of women having a baby by Caesarean section in different shoe size groups.

Table 10.19 shows the numbers of women having a baby by Caesarean section in each shoe size group, from which we can obtain the proportions in each group, shown graphically in Figure 10.3. The method for evaluating a trend is effectively to fit a straight line to the proportions, and see if the slope of the line is significantly different from zero (which represents a horizontal line). We need to take account of the fact that each proportion is based on different numbers of women. The method for fitting such a line is called regression analysis, and is not described until section 11.3, but we can obtain the same result by a calculation based on the observed frequencies. From this analysis we get a value of the test statistic  $X_{\text{rend}}^{2}$  on one degree of freedom. The calculations are described later.

In order to carry out this test we have to assign scores to each group. If the variable has a clear quantitative interpretation we can derive the scores from the definition of the groups. For example, the shoe size data can be scored 3.5, 4.0, 4.5, 5.0, 5.5 and 6.0 (or, equivalently, 1, 2, 3, 4, 5 and 6). The null hypothesis is now that there is no trend across groups. If the scores are equally spaced we refer to an observed trend as a linear trend.

Analysis of the Caesarean section data gives  $X_{\text{rend}}^{2} = 8.02$  on 1 degree of freedom  $(P = 0.005)$ . There is thus strong evidence of a linear trend in the proportion of women giving birth by Caesarean section in relation to shoe size. This relation is not directly causal, of course, and no such interpretation should be made. Shoe size is here a convenient indicator of small pelvic size.

The overall value of  $X^{2}$  was 9.29 on 5 degrees of freedom. We can subtract the value of  $X_{t r e n d}^{2}$  (8.02) to get a Chi squared test of the null hypothesis of no variation other than that due to trend. Here we get  $X^{2} = 1.27$  on 4 degrees of freedom, which is nowhere near to statistical significance. We can conclude that all the observed variation between the groups can be attributed to a linear trend.

Note that, although the linear trend is highly significant, if we tried to use shoe size to predict which women would require a Caesarean section we would be wrong most of the time. This type of problem is considered in section 14.4.

#### (b) Method and worked example

The simplest way to calculate  $X_{t r e n d}^{2}$  is by means of a formula that disguises the nature of the method. Fleiss (1981, p. 144) shows the derivation of the formula using the regression approach (see also section 11.15.2).

For group  $i$  we will call the observed frequency with a characteristic  $r_{i}$  and the total number of individuals  $n_{i}$ . Further, we let  $x_{i}$  be the score allocated to group  $i$ . Then we define some simplifying quantities as follows:

$$
N = \sum_{i = 1}^{k}n_{i},\quad R = \sum_{i = 1}^{k}r_{i},\quad p = R / N,\quad \mathrm{and} \bar{x} = \sum_{i = 1}^{k}n_{i}x_{i} / N.
$$

The test statistic  $X_{t r e n d}^{2}$  is then obtained as

$$
X_{t r e n d}^{2} = \frac{\left[\sum_{i = 1}^{k}r_{i}x_{i} - R\bar{x}\right]^{2}}{p(1 - p)\left[\sum_{i = 1}^{k}n_{i}x_{i}^{2} - N\bar{x}^{2}\right]}.
$$

Table 10.20 Calculation of  $X_{t r e n d}^{2}$  for the data in Table 10.19  

<table><tr><td rowspan="2"></td><td colspan="7">Shoe size</td></tr><tr><td>&amp;lt;4</td><td>4</td><td>41/2</td><td>5</td><td>51/2</td><td>6+</td><td>Total</td></tr><tr><td>Caesarean section (ri)</td><td>5</td><td>7</td><td>6</td><td>7</td><td>8</td><td>10</td><td>43 (= R)</td></tr><tr><td>Total (ni)</td><td>22</td><td>35</td><td>42</td><td>48</td><td>54</td><td>150</td><td>351 (= N)</td></tr><tr><td>Score (xi)</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td></td></tr><tr><td>rixi</td><td>5</td><td>14</td><td>18</td><td>28</td><td>40</td><td>60</td><td>165</td></tr><tr><td>nixi</td><td>22</td><td>70</td><td>126</td><td>192</td><td>270</td><td>900</td><td>1580</td></tr><tr><td>nixi2</td><td>22</td><td>140</td><td>378</td><td>768</td><td>1350</td><td>5400</td><td>8058</td></tr></table>

$\bar{x} = 1580 / 351 = 4.5014; p = 43 / 351 = 0.1225; 1 - p = 0.8775$

Table 10.20 shows the basic calculation for the Caesarean section data. From these elements we get

$$
\begin{array}{r l} & {X_{i r e n d}^{2} = \frac{(165 - 43\times4.5014)^{2}}{0.1225\times0.8775\times(8058 - 351\times4.5014^{2})}}\\ & {\qquad = \frac{815.6850}{101.6705}}\\ & {\qquad = 8.023 (\mathrm{P} = 0.0046).} \end{array}
$$

#### (c) Qualitatively ordered groups

We often have data from groups which are clearly ordered, but where there is either no underlying scale of measurement or such a scale cannot be quantified. Examples of these two types of variable are social class and pain recorded as 'mild', 'moderate' or 'severe'. In the absence of any indication to the contrary it is generally reasonable to give such groups equally spaced scores and evaluate  $X_{t r e n d}^{2}$  as if for a linear trend.

Sometimes, however, it is felt that a different spacing of scores is appropriate. For example, Norton and Dunn (1985) carried out a survey in which they related frequency of snoring to various medical conditions. Subjects were categorized as either non- snorers, occasional snorers, those who snored nearly every night, and those who snored every night, on the basis of their spouses' reports. Table 10.21 shows data relating snoring to heart disease. The authors performed a Chi squared test for trend using scores of 1, 3, 5 and 6 for the four snoring groups. The overall comparison of the groups gives  $X^{2} = 72.8$  on 3 degrees of freedom while the trend test gives  $X_{t r e n d}^{2} = 72.7$  on 1 degree of freedom. Both of these are very highly significant. It is clear that all of the differences between the groups can be attributed to the trend. That is, there is a strong association between frequency of snoring and prevalence of heart disease.

The scores used in this study were not very different from equal spacing - given the descriptions of the groups perhaps 1, 2, 5 and 6 would have been more reasonable. In practice small differences in scoring are unlikely to have much effect on the test statistic. Of course, the scores should not

Table 10.21 Snoring behaviour in relation to presence or absence of heart disease (Norton and Dunn, 1985)  

<table><tr><td>Heart disease</td><td>Non-snorers</td><td>Occasional snorers</td><td>Snore nearly every night</td><td>Snore every night</td><td>Total</td></tr><tr><td>Yes</td><td>24 (1.7%)</td><td>35 (5.5%)</td><td>21 (9.9%)</td><td>30 (11.8%)</td><td>110 (4.2%)</td></tr><tr><td>No</td><td>1355</td><td>603</td><td>192</td><td>224</td><td>2374</td></tr><tr><td>Total</td><td>1379</td><td>638</td><td>213</td><td>254</td><td>2484</td></tr></table>

be decided on the basis of the data but on prior considerations.

#### (d) Alternative approach - the Mann-Whitney test

A different approach to frequency data from ordered groups is to treat the data as two samples of observations on an ordinal scale. For example, in Table 10.19 the two samples are women who had a Caesarean section and those who did not. We can give ranks 1, 2, 3, ..., etc. to the ordered groups, and then compare the ranks for the subjects with or without the characteristic of interest using the Mann- Whitney test (described in section 9.6.4). There are, of course, vast numbers of tied ranks in data of this type because there are few different values, so it is essential to use the version of the test with a correction for ties. Many statistical packages can perform this test.

In general the Mann- Whitney test gives a very similar answer to the Chi squared test for trend. For example, for the Caesarean section data of Table 10.19 we get  $z = 2.91$ $(\mathbf{P} = 0.0036)$  compared with  $\mathbf{P} = 0.0046$  from the Chi squared test for trend.

## 10.9 LARGE TABLES WITH ORDERED CATEGORIES

We should always take account of ordering in analysis of  $2 \times k$  tables, and we should do likewise for larger tables. There are two cases to consider: where either the row or column variable is ordered and where both are ordered.

### 10.9.1 One ordered variable

With three or more groups of subjects classified by an ordinal variable we can use the Kruskall- Wallis test (section 9.8.6) to compare the groups. If the groups differ significantly we can use the Mann- Whitney test to compare pairs of groups. It is essential to use the versions of the tests that adjust for tied ranks.

Large frequency tables in which neither variable is ordered are rare, which is why the ordered caffeine data (Table 10.5) were used to illustrate the general Chi squared analysis of an  $r \times c$  table.

### 10.9.2 Two ordered variables

The simplest way to analyse the relation between two ordered variables is to calculate the rank correlation between them. This method will be described in section 11.7.2. However, the appropriate analysis when we wish to compare two or more paired ordinal variables on one sample (or matched samples) is the paired Wilcoxon test, which was described in section 9.7.2.

## 10.10 $k \times k$ TABLES - ANALYSIS OF MATCHED VARIABLES

Sometimes we obtain matched pairs of categorizations of the same subjects. For example, we may wish to compare degrees of pain before and after treatment. The simplest case is when subjects are classified into just two groups; we use the Normal method or the McNemar test to compare the paired proportions, as described in sections 10.4 and 10.7.5. When there are three groups there is an extension of the McNemar test known as the Stuart- Maxwell test (see Fleiss (1981, p. 119) for a description).

With three or more ordered categories for paired variables the Wilcoxon matched pairs signed ranks test is appropriate (see section 9.7.2).

A related problem occurs when we wish to assess how well two classifications agree; for example, we may wish to compare the way that two histologists classify stage of disease in a series of biopsy samples. The comparison of observers is described in Chapter 14.

## 10.11 COMPARING RISKS

There is yet another way of analysing two by two tables, which involves the comparison of two groups with respect to the risk of some event. The methods were developed in epidemiology, especially for the analysis of case- control studies, but their use is becoming more widespread. I shall consider only the case where there are two groups of subjects and only two types of outcome, although extensions exist.

### 10.11.1 Prospective study - estimating relative risk

In a prospective study groups of subjects with different characteristics are followed up to see whether an outcome of interest occurs. Many clinical trials are like this, but so too are observational studies where it is not possible to randomize the feature of interest, such as blood group. We can easily calculate the proportions having the outcome in each group, and so the ratio of these two proportions is a measure of the raised risk in one group compared to the other. We term this ratio the relative risk. Table 10.22 shows the general layout of the  $2\times 2$  table that arises in this situation. The risks in the two groups are  $a / (a + c)$  and  $b / (b + d)$  , and the relative risk is thus

$$
R R = \frac{a / (a + c)}{b / (b + d)}.
$$

Under the null hypothesis the expected value of RR is 1.

Table 10.23 shows the results of a study of 107 'small- for- dates' babies. that is, of babies whose birth weight was below the fifth centile for their length of gestation using published standards. The babies were classified as

Table 10.22 General representation of the results of a prospective study as a  $2\times 2$  table  

<table><tr><td></td><td></td><td>Group 
1</td><td>Group 
2</td><td>Total</td></tr><tr><td rowspan="3">Outcome present</td><td>Yes</td><td>a</td><td>b</td><td>a + b</td></tr><tr><td>No</td><td>c</td><td>d</td><td>c + d</td></tr><tr><td>Total</td><td>a + c</td><td>b + d</td><td>n</td></tr></table>

Table 10.23 Relation between Apgar score  $< 7$  and symmetric or asymmetric fetal growth retardation (Kurjak et al., 1978)  

<table><tr><td></td><td></td><td>Symmetric</td><td>Asymmetric</td><td>Total</td></tr><tr><td rowspan="3">Apgar &amp;lt; 7</td><td>Yes</td><td>2</td><td>33</td><td>35</td></tr><tr><td>No</td><td>14</td><td>58</td><td>72</td></tr><tr><td>Total</td><td>16</td><td>91</td><td>107</td></tr></table>

having either 'symmetric' or 'asymmetric' growth retardation on the basis of the ultrasound examination, and this classification is shown in relation to their Apgar score which is an assessment of their well- being (see section 2.4.4).

The proportions with an Apgar score less than 7 were 2/16 (0.13) in the symmetric group and 33/91 (0.36) in the asymmetric group. The relative risk of a low Apgar score is thus

$$
\frac{2 / 16}{33 / 91} = 0.345
$$

that is, the risk in the symmetric group is about  $35\%$  of that in the asymmetric group.

We can construct a confidence interval for the relative risk using the following formula for the standard error of its logarithm:

$$
SE(\log_{\mathrm{e}}RR) = \sqrt{\frac{1}{a} - \frac{1}{a + c} + \frac{1}{b} - \frac{1}{b + d}}.
$$

The sampling distribution of  $\log RR$  is the Normal distribution, so we can construct, say, a  $90\%$  confidence interval for the log of the relative risk as

$$
\log_{\mathrm{e}}RR - N_{0.95} \times SE(\log_{\mathrm{e}}RR) \qquad \text{to} \qquad \log_{\mathrm{e}}RR + N_{0.95} \times SE(\log_{\mathrm{e}}RR)
$$

where  $N_{0.95}$  is the appropriate value from the Normal distribution. The confidence interval for the relative risk is obtained by antilogging these values.

In the example, the relative risk was 0.345 and its logarithm (to base e) is - 1.0651. The standard error of this value is

$$
\begin{array}{r}{S E(\log_{\mathsf{e}}R R) = \sqrt{\frac{1}{2} - \frac{1}{16} + \frac{1}{33} - \frac{1}{91}}}\\ {= 0.676.} \end{array}
$$

Thus we can obtain the  $90\%$  confidence interval for the log of the relative risk in the population of all such babies as

$$
-1.0651 - 1.645 \times 0.676 \qquad \text{to} \qquad -1.0651 + 1.645 \times 0.676
$$

or - 2.177 to 0.047, giving a  $90\%$  confidence interval for the relative risk of 0.11 to 1.05. The confidence interval is wide because the sample size in the symmetric group is small.

This approach to the comparison of two proportions is based on their ratio, whereas the method described in section 10.3 is related to their difference. In general the relative risk is more frequently used in epidemiological work, although it could (and perhaps should) be used more for the analysis of clinical data. A third way of comparing groups is via the odds ratio described in the next section.

### 10.11.2 Retrospective study - the odds ratio

#### (a) Two samples

In retrospective case- control studies, we can still arrange the data in a table like Table 10.22, but there is an important difference. The selection of subjects is based on the outcome (the rows) whereas in a prospective study it is based on the characteristic defining the groups (the columns). We cannot evaluate the risk of the outcome in those with and without the characteristic because of the way the subjects were sampled. It is clear that we can get any value we like for the risk by varying the number of cases and controls that we choose to study, and so the relative risk is not a valid estimate. We need a method based on calculations within each group. We can use the ratio  $a / c$ , which is the odds of the outcome in the first group. Thus, for example, if the proportion with the feature in group 1 is  $2 / 20$ , the odds of the feature in that group are 2 to 18 or 1/9. So the ratio of the odds in the two groups, called the odds ratio, is another way of comparing groups.

If the outcome of interest that defines the cases is rare, then a will b small and  $a / (a + c)$  will be approximately equal to  $a / c$  . Similarly  $b$  will b small and  $b / (b + d)$  will be approximately equal to  $b / d$  . Thus the relative risk will be approximately equal to  $(a / c) / (b / d)$  or ad/bc. For case- control studies the outcome of interest is usually rare, so the odds ratio offers a method of getting an approximate relative risk despite the method of sample selection.

The odds ratio is defined as  $O R = a d / b c$  . A confidence interval can be obtained in a similar manner as for the relative risk. We use the standard error of the logarithm of the odds ratio, given by

$$
S E(\log_{\mathrm{e}}O R) = \sqrt{\frac{1}{a} + \frac{1}{b} + \frac{1}{c} + \frac{1}{d}},
$$

so that a  $95\%$  confidence interval for the log odds ratio is obtained as

$$
\log_{\mathrm{e}}O R - N_{0.975}\times S E(\log_{\mathrm{e}}O R)\qquad \mathrm{to}\qquad \log_{\mathrm{e}}O R + N_{0.975}\times S E(\log_{\mathrm{e}}O R)
$$

where  $N_{0.975}$  is the appropriate value from the Normal distribution. This method is suitable when none of the four cells in the  $2\times 2$  table is very small; otherwise more advanced methods are needed (see Breslow and Day, 1980, p. 124).

Table 10.10 showed the results of a case- control study of erosion of dental enamel in relation to amount of swimming in a chlorinated pool. The odds ratio for that table is  $(32\times 127) / (118\times 17) = 2.026$  ,so  $\log_{\mathrm{e}}O R = 0.706$  . Also, we have

$$
\begin{array}{r}{S E(\log_{\mathrm{e}}O R) = \sqrt{\frac{1}{32} + \frac{1}{127} + \frac{1}{118} + \frac{1}{17}}}\\ {= 0.326.} \end{array}
$$

The  $95\%$  confidence interval for the population log odds ratio is thus

$$
0.706 - 1.96\times 0.326\qquad \mathrm{to}\qquad 0.706 + 1.96\times 0.326
$$

or from 0.067 to 1.345. Thus the  $95\%$  confidence interval for the odds ratio is from  $\mathrm{e}^{0.067}$  to  $\mathrm{e}^{1.345}$  , or from 1.069 to 3.840. As the whole of the interval is greater than 1, which indicates equal risk (or odds) in the two groups, we can infer that there is a raised risk of erosion in dental enamel among those swimming more than 6 hours per week.

#### (b) Paired samples

With paired samples we need a different approach, which requires us to look at the differences between pairs. Table 10.24 shows the general structure of a matched pair case- control study; a specific example was given in Table 10.17, although the method of analysis was different. As with the earlier methods for analysing paired proportions, it is the numbers of pairs where the exposures differ that are of interest, that is,  $b$  and  $c$  The odds ratio is derived simply from these frequencies as  $b / c$  , this being the odds of being a case among the  $b + c$  pairs in which only one individual was exposed. A method for calculating a confidence interval is given by Morris and Gardner (1989) and Fleiss (1981, p. 112), as are methods for the situation where there are several controls for each case.

Table 10.25 shows data from a case- control study of stress and relapse of breast cancer. Fifty women developing a first recurrence after treatment

Table 10.24 General structure of the results from a matched pair case-control study. Presence or absence of exposure to the possible risk are denoted by  $^+$  or -  

<table><tr><td rowspan="2"></td><td rowspan="2"></td><td colspan="3">Cases</td></tr><tr><td>+</td><td>-</td><td>Total</td></tr><tr><td rowspan="3">Controls</td><td>+</td><td>a</td><td>b</td><td>a + b</td></tr><tr><td>+</td><td>c</td><td>d</td><td>c + d</td></tr><tr><td>Total</td><td>a + c</td><td>b + d</td><td>n</td></tr></table>

Table 10.25 Results of a matched case-control study of a relapse from breast cancer among women who did  $(+)$  or did not  $(-)$  experience a stressful life event (Ramirez et al., 1989)  

<table><tr><td rowspan="2"></td><td rowspan="2"></td><td colspan="3">Cases</td></tr><tr><td>+</td><td>-</td><td>Total</td></tr><tr><td rowspan="3">Controls</td><td>+</td><td>9</td><td>3</td><td>12</td></tr><tr><td>+</td><td>17</td><td>21</td><td>38</td></tr><tr><td>Total</td><td>26</td><td>24</td><td>50</td></tr></table>

for operable breast cancer were identified. Using a large database, they were individually matched for several prognostic factors (including type of operation and use of adjuvant chemotherapy) and socio- demographic factors with 50 women who had not had a recurrence. For each woman having a recurrence (the cases) data were collected on stressful life events (such as divorce or the death of their spouse) in the period between their operation and recurrence, while for their matched control the same information was sought for the same period from the time of their own operation. The odds ratio is simply  $17 / 3 = 5.67$ , and the  $95\%$  confidence interval is from 1.64 to 30.2. Although the odds ratio is large, suggesting that there is an association between stressful events and risk of recurrence of breast cancer, the small sample means that there is a wide confidence interval and thus it is necessary to be cautious about the interpretation of the finding.

### 10.11.3 Combining several  $2 \times 2$  tables

Two common situations arise where we might wish to combine results from several frequency tables, especially  $2 \times 2$  tables. The first is where we wish to examine the relation between two variables in a single study, but making allowance for variation in a third variable. For example, in a case- control study we might have a different age distribution in the two

groups and might suspect that age affected the relation between the exposure and the outcome. We could produce a  $2 \times 2$  table for each of several age groups, and then combine the tables to get an overall odds ratio that was effectively age- adjusted. The second is where we wish to combine data from several independent studies. This is an increasingly common type of analysis for combining the results from many clinical trials to perform an objective overview or meta- analysis of all the available data (see section 15.5.2). For both of these circumstances the analysis is by the Mantel- Haenszel method, which is described in Fleiss (1981, p. 173).

The odds ratio is approximately the same as the relative risk if the outcome of interest is rare. For common events, however, they can be quite different, so it is best to think of the odds ratio as a measure in its own right. Odds ratios also feature when we relate the presence or absence of a feature to more than one factor. This analysis is described in section 12.5.

## 10.12 PRESENTATION OF RESULTS

Frequency data pose relatively few problems when presenting results. I am in favour of giving all observed frequencies together with summaries as rounded percentages (or proportions). This is because it is often not possible to reconstruct the frequencies from reported percentages. It is useful to give percentages to allow a quick visual appraisal of variation among groups of varying size. Tables 10.18 and 10.21 are examples of this style of presentation. Percentages should be given for all rows when there are more than two rows.

Comparisons of proportions should be accompanied by the test statistic  $(z)$ , the  $\mathbf{P}$  value, and a confidence interval for the difference. The test statistic  $X^{2}$ , the degrees of freedom and the  $\mathbf{P}$  value should all be quoted when reporting Chi squared tests. The degrees of freedom can be omitted if it is clear that only  $2 \times 2$  tables are involved. In this book I have used  $X^{2}$  for the test statistic to distinguish it from  $\chi^{2}$  which is the theoretical distribution. It is common, however, to use  $\chi^{2}$  for the test statistic too, and either is acceptable.

## 10.13 SUMMARY

The approach to frequency data via the comparison of proportions is preferable to the Chi squared approach because it provides estimates of quantities of interest and related confidence intervals. In contrast, Chi squared tests yield only  $\mathbf{P}$  values. For larger tables, however, there is no simple alternative to using Chi squared tests or sometimes rank methods. Frequency data thus are less amenable than continuous data to statistical methods of estimation rather than hypothesis testing. For this reason

alone, it is unwise to categorize a continuous variable to 'simplify' the analysis. While this is often useful when exploring a data set, it is not generally advisable when analysing data as it is throwing away information; an example is given in Table 10.5. There are also statistical methods for modelling frequency data, called log- linear models, but they are beyond the scope of this book.

Whatever method of analysis is used, it is important to take any ordering of categories into account. Moses et al. (1984) have reviewed the options, and the methods have been described in this chapter.

Frequency tables also arise in other types of analysis, where the aims are rather different. Two such cases are the comparison of observers' assessments, such as of stage of disease, and the use of one variable to predict another in the context of diagnosis. Both of these situations are considered in Chapter 12.

## EXERCISES

10.1 A study was carried out to see if patients whose skin did not respond to dinitrochlorobenzene (DNCB), a contact allergen, would show an equally negative response to croton oil, a skin irritant (Roth et al., 1975). The following table shows the results of simultaneous skin reaction tests to DNCB and croton oil in 173 patients with skin cancer.

<table><tr><td rowspan="2"></td><td rowspan="2"></td><td colspan="3">DNCB</td></tr><tr><td>+ve</td><td>-ve</td><td>Total</td></tr><tr><td rowspan="2">Croton oil</td><td>+ve</td><td>81</td><td>48</td><td>129</td></tr><tr><td>-ve</td><td>23</td><td>21</td><td>44</td></tr><tr><td></td><td>Total</td><td>104</td><td>69</td><td>173</td></tr></table>

(a) The authors reported 'no correlation' between the two tests. Carry out an analysis appropriate to the clinical question posed.

(b) The results of the DNCB test were compared for patients with different stages of cancer, as shown in the following table.

<table><tr><td rowspan="2"></td><td rowspan="2"></td><td colspan="4">Stage of skin cancer</td></tr><tr><td>I</td><td>II</td><td>III</td><td>Total</td></tr><tr><td rowspan="2">DNCB reaction</td><td>+ve</td><td>39</td><td>39</td><td>26</td><td>104</td></tr><tr><td>-ve</td><td>13</td><td>19</td><td>37</td><td>69</td></tr><tr><td></td><td>Total</td><td>52</td><td>58</td><td>63</td><td>173</td></tr></table>

Is DNCB reactivity related to stage of cancer in these patients?

10.2 A survey was carried out to test the hypothesis that men with deep singing voices are likely to have higher levels of testosterone than men with higher voices (Lyster, 1984). Professional and student male singers were asked how many brothers and sisters they had. The results for the 195 singers with siblings are shown in the following table:

<table><tr><td>Voice group</td><td>Brothers</td><td>Sisters</td><td>Total</td></tr><tr><td>Bass</td><td>77 (62%)</td><td>47</td><td>124</td></tr><tr><td>Bass-baritone</td><td>38 (56%)</td><td>30</td><td>68</td></tr><tr><td>Baritone</td><td>75 (56%)</td><td>58</td><td>133</td></tr><tr><td>Tenor-baritone</td><td>5 (56%)</td><td>4</td><td>9</td></tr><tr><td>Tenor</td><td>27 (42%)</td><td>37</td><td>64</td></tr><tr><td>Counter-tenor</td><td>9 (38%)</td><td>15</td><td>24</td></tr><tr><td>Total</td><td>231 (55%)</td><td>191</td><td>422</td></tr></table>

The author of the report wrote:

'A  $\chi^{2}$  test on the frequencies of brothers and sisters in the six voice- groups yields no significance. If, on the other hand, one chooses to look simply at bass, tenor and counter- tenor ... one obtains  $\chi^{2} = 11.27$ ; df  $= 2$ ;  $\mathbf{P}< 0.001$ . A relationship between the two variables can thus be demonstrated at the extremes, but breaks down in the middle range.'

(a) The  $\chi^{2}$  test ignoring the ordering of the voice groups gives  $X^{2} = 9.84$  on 5 df,  $\mathbf{P} = 0.08$ . Comment on the author's interpretation.

(b) Why is this test not appropriate to the aim of the study? Perform an appropriate analysis and interpret the answers.

(c) The author performed a second analysis involving just three groups. Why is this analysis invalid?

(d) Why is his quoted value of  $X^{2}$  of 11.27 clearly wrong?

(e) What feature of the data breaks a fundamental assumption of all Chi squared tests?

(f) How important is this problem, and what can we do about it? (This is rather difficult!)

10.3 A randomized controlled clinical trial was carried out to compare the effects of a single dose of prednisolone and placebo in children with acute asthma (Storr et al., 1987). There were 73 children in the placebo group and 67 in the prednisolone group. The results section of the paper begins with the following statement: '2 patients in the placebo group (3%, 95% confidence interval - 1 to 6%) and 20 in the prednisolone group  $(30\% , 19$  to  $41\%$  ) were discharged at first examination  $(\mathbb{P}< 0.0001)$  .' The methods section explains that this P value was derived using Fisher's exact test.

(a) Was it reasonable to use Fisher's exact test rather than the Chi squared test?

(b) What is wrong with the confidence intervals, and what would be a better analysis?

10.4 The following table shows the number of hours spent in bed by 14 year old boys and girls (Macgregor and Balding, 1988). Times were rounded up to the next half hour.

(a) Which methods of analysis could be used to compare the distributions for boys and girls?

(b) Is there any difference between boys and girls?

<table><tr><td rowspan="2"></td><td rowspan="2">≤ 7.0</td><td rowspan="2">7.5</td><td rowspan="2">8.0</td><td colspan="6">Time spent in bed (hours)</td></tr><tr><td>8.5</td><td>9.0</td><td>9.5</td><td>10.0</td><td>&amp;gt; 10.0</td><td>Total</td></tr><tr><td>Boys</td><td>88</td><td>109</td><td>210</td><td>324</td><td>359</td><td>313</td><td>182</td><td>85</td><td>1670</td></tr><tr><td>Girls</td><td>92</td><td>108</td><td>217</td><td>349</td><td>436</td><td>334</td><td>198</td><td>65</td><td>1799</td></tr><tr><td>Total</td><td>180</td><td>217</td><td>427</td><td>673</td><td>795</td><td>647</td><td>380</td><td>150</td><td>3469</td></tr></table>

10.5 A study was made of 65 patients who had received or were receiving sodium aurothiomalate as a treatment for rheumatoid arthritis (Ayesh et al., 1987). The aim was to examine the possibility that toxicity to sodium aurothiomalate (SA) might be linked to sulphoxidation capacity, as assessed by the sulphoxidation index (SI). The data were given in Exercise 3.1. Values of  $\mathrm{SI} > 6.0$  were taken as indicating impaired sulphoxidation. They obtained the following table:

<table><tr><td rowspan="2"></td><td rowspan="2"></td><td colspan="3">Major adverse reaction 
(toxicity)</td></tr><tr><td>Yes</td><td>No</td><td>Total</td></tr><tr><td rowspan="3">Impaired sulphoxidation</td><td>Yes</td><td>30</td><td>9</td><td>39</td></tr><tr><td>No</td><td>7</td><td>19</td><td>26</td></tr><tr><td>Total</td><td>37</td><td>28</td><td>65</td></tr></table>

The authors wrote: 'The incidence of impaired sulphoxidation in patients showing SA toxicity (30/37; 81.0%) was significantly greater

than in the group without adverse reaction  $(9 / 28; 32.1\%)$ $(\chi^{2} = 27.6, \mathrm{P}< 0.001)$ . Similarly, the incidence of toxicity was significantly increased in those with impaired sulphoxidation  $(30 / 39; 76.9\%)$  compared to those with extensive sulphoxidation  $(7 / 26; 26.9\%)$ $(\chi^{2} = 36.2, \mathrm{P}< 0.001)$ .

(a) Why can't both of the above Chi squared tests be correct?

(b) Carry out a Chi squared test of the data in the table and compare your answer with the two results in the above paragraph.

10.6 Among patients with oral cancer registered in Kerala, India, between 1982 and 1986, the relation between the site of the cancer and betel chewing, smoking or alcohol consumption was examined (Sankaranarayanan et al., 1989). The data for patients aged  $>30$  are summarized in the following table:

<table><tr><td rowspan="2">Habit</td><td colspan="3">Intra oral subsite</td></tr><tr><td>Tongue 
(n = 175)</td><td>Buccal mucosa 
(n = 300)</td><td>Other 
(n = 156)</td></tr><tr><td>Chewing</td><td>146</td><td>267</td><td>121</td></tr><tr><td>Smoking</td><td>71</td><td>166</td><td>102</td></tr><tr><td>Alcohol</td><td>51</td><td>71</td><td>46</td></tr><tr><td>None of these</td><td>17</td><td>12</td><td>6</td></tr></table>

What sort of test could be performed to relate habit to site of cancer?

10.7 Sixty- five pregnant women at a high risk of pregnancy- induced hypertension participated in a randomized controlled trial comparing  $100 \mathrm{mg}$  of aspirin daily and a matching placebo during the third trimester of pregnancy (Schiff et al., 1989). The observed rates of hypertension are shown in the following table:

<table><tr><td></td><td>Aspirin treated</td><td>Placebo treated</td><td>Total</td></tr><tr><td>Hypertension</td><td>4</td><td>11</td><td>15</td></tr><tr><td>No hypertension</td><td>30</td><td>20</td><td>50</td></tr><tr><td>Total</td><td>34</td><td>31</td><td>65</td></tr></table>

Do these data suggest that daily aspirin reduces the risk of hypertension in the last trimester of pregnancy?

10.8 A case- control study was carried out to investigate the aetiology of acoustic neuromas (Preston- Martin et al., 1989). Men aged 25- 69 at

the time of diagnosis who were resident in Los Angeles County were eligible for inclusion. A total of 118 men were identified who were alive and able to be interviewed. Twenty- eight patients were not interviewed because the physician refused permission (12), the patient chose not to participate (9), or the patient could not be located (7). For 86 of the remaining patients the researchers identified and interviewed a neighbourhood control of the same race and within five years of age.

Both members of each case- control pair were interviewed in the same manner by the same interviewer to obtain information about various life experiences. Exposure to loud noise at work was of particular interest. Overall 58 cases and 46 controls had had some exposure to loud noise at work. There were 20 case- control pairs for which the case but not the control had had such exposure, and 8 pairs where the control but not the case had had some exposure.

(a) Carry out an appropriate analysis to compare the proportions of exposed cases and controls.

(b) Calculate the odds ratio for acoustic neuroma associated with exposure to loud noise at work.