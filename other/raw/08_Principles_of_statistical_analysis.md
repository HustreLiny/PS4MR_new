# 8 Principles of statistical analysis

A distinctive function of statistics is this: it enables the scientist to make a numerical evaluation of the uncertainty of his conclusion.

Snedecor (1950)


## 8.1 INTRODUCTION

When we analyse medical data for research purposes the intention is to extrapolate the findings from a sample of individuals to the population of all similar individuals. We see this most clearly in animal and laboratory studies as well as in much epidemiological research, where the data cannot be identified with individual subjects, but it applies equally to case- control studies, clinical trials and indeed to clinical research in general. While we may also be interested in each individual from a clinical point of view, research is usually aimed at summarizing the experience of many individuals to draw general conclusions. Thus one of the main ideas of statistics is this - the aim of statistical analysis is to use the information gained from a sample of individuals to make inferences about the relevant population.

In most research studies some data are collected for descriptive purposes, for example information about the demographic and clinical characteristics of subjects being studied. The first step in the analysis of a set of data is to describe such basic data, and simple descriptive methods for this purpose were described in Chapter 3. In observational studies most if not all the data will be of this type. Intervention studies, which include clinical trials and laboratory experiments, are explicitly comparisons between different sets of observations. How do we compare sets of data, especially in view of the desire to generalize the findings?

The following seven chapters describe a large number of statistical methods for analysing data of various types for different research designs. The majority of the problems considered involve making comparisons between groups of observations of the same type or relating different observations within one group of individuals. Despite the enormous variety of medical problems and statistical solutions there are two basic approaches

to statistical analysis that run through all of these methods - estimation and hypothesis testing. The next sections will discuss the principles behind each of these methods, and then they will be compared. The ideas in this chapter are fundamental to an appreciation of statistical thinking and thus to an understanding of the subsequent chapters.


## 8.2 SAMPLING DISTRIBUTIONS

The most important idea, already introduced in section 4.3, is that we take the results obtained in the sample and use them as our best estimate of what is true for the relevant population. So, for example, if we find that a new treatment for psoriasis relieves the symptoms of patients more often than a standard treatment, or that serum cholesterol is higher in men than women, or that a certain combination of temperature and light optimizes cell growth in a laboratory experiment, then in each case we would expect that the same is likely to be true in the population. For this interpretation to be valid the sample must be representative of the population. The methods described in this chapter show how to quantify the strength of the evidence, or its uncertainty.

As we saw in Chapter 4, small random samples from a Normal distribution may have a distribution that is not at all like a Normal distribution. Similarly, the mean of a random sample may differ from the population mean, just by chance, although naturally we expect the sample mean to be quite close to the population mean. We use the sample mean as an estimate of the population mean, because that is the best information we have, but how good is the mean of a single sample as an estimate of the population value? We need a way of assessing the uncertainty associated with our estimate. One way to approach this problem is to suppose that we could take many samples of a given size from the population. What can we say about the variability of the means of these samples in relation to the population (i.e. true) mean?

In Chapter 3 the standard deviation was introduced as a measure of the variability of a set of observations around their mean. Measuring the variability of hypothetical sample means about the true mean is clearly a similar problem. It turns out that we can make some surprisingly strong statements about the properties of the means of several samples, and that we can use this information to answer the question posed above, namely what we can say about uncertainty when we have taken only one sample.

It is intuitively reasonable that the variability of sample means will have the following properties:

1. it will be less among the means of large samples than small samples; 
2. it will be less than the variability of the individual observations in the population;

3. it will increase with greater variability (standard deviation) among the individual values in the population.

All of these are indeed true. It can be shown mathematically that the distribution of the means of random samples has the following properties:

(i) The expected value of the mean of the distribution of the sample means is the same as the population mean. In other words, on average the mean of a sample will be the mean of the population. Further, the expected value of the variance of a sample is the variance of the population.

(ii) The expected value of the standard deviation of the means of several samples is  $\sigma /\sqrt{n}$  where  $\sigma$  is the standard deviation of the variable in the population and  $n$  is the size of each sample. The quantity  $\sigma /\sqrt{n}$  is known as the standard error of the mean, to distinguish it from the standard deviation of the observations. We can estimate the standard error from a single sample using the observed standard deviation in that sample,  $s$ , in place of  $\sigma$ . The interpretation and use of the standard error are discussed in section 8.4.

(iii) The distribution of the sample means will be Normal if the distribution of the data in the population is Normal. Further, and somewhat remarkably, the distribution of the sample means will be nearly Normal whatever the distribution of the variable in the population as long as the samples are large enough. This important result is known as the central limit theorem. It underlies many of the main statistical methods. Sometimes we will be concerned with the sum of a set of values rather than the mean. The two differ only with respect to division by the number of observations, so the central limit theorem applies equally to sums and means.

In practice, the sample size restriction in (iii) is not relevant when the data have a distribution that is unimodal and not particularly asymmetric. Conversely, if the sample size is large enough the distribution of means will be Normal regardless of the distribution of the data. In general, the more Normal the data, the more reasonable will be the assumption that the mean will itself be Normally distributed in repeated sampling. If we can assume a Normal distribution for the mean it is easy to use the methods based on the Normal distribution (introduced in Chapter 4) to indicate the uncertainty of a sample mean as an estimate of the population mean. I shall return to this problem in the next section.

The preceding discussion has related to the mean of a sample from a population, but statements (i) to (iii) also apply to a sample proportion. If we give the values 1 and 0 to indicate the presence or absence of the attribute of interest, for example having had one's tonsils removed, the proportion with the attribute in a sample is the number with the attribute divided by the sample size. In other words, the proportion  $p$  with the attribute is the mean of the 1s and 0s in the sample, and so properties (i) to (iii) above apply. However, as the population values are certainly not Normal, being either 1 or 0, property (iii) will apply only to large samples. Another way of looking at proportions is that the number with an attribute (which is equal to the sample size times  $p$ ) will follow a Binomial distribution. As I mentioned in Chapter 4, the Binomial distribution becomes more like a Normal distribution for larger samples. If the observed proportion is  $p$  and the sample size is  $n$ , then it is in fact the magnitude of the product  $np$  that determines the closeness to a Normal distribution.


## 8.3 A DEMONSTRATION OF THE DISTRIBUTION OF SAMPLE MEANS

The truth of the above statements about the distribution of means or proportions estimated from several samples can best be appreciated by seeing what actually happens when many samples are taken from a population. It is not easy to find appropriate real data, so to demonstrate what happens I have used computer simulation, a technique mentioned in Chapter 6.

First I shall consider the case where the distribution in the population is Normal. From (i) and (ii) in the previous section we expect that the means of a set of random samples will also have a Normal distribution, and we expect the standard deviation of all the sample means to be the population standard deviation divided by  $\sqrt{n}$ . As usual, by 'expect' we mean that this will happen on average - a set of several samples is still subject to sampling variation.

I used the study of patients with primary biliary cirrhosis (PBC) discussed in Chapter 4 as the basis for the simulations. I supposed that among all patients with PBC, which is the population of interest here, serum albumin values have a Normal distribution with a mean of  $35 \mathrm{~g} / \mathrm{l}$  and a standard deviation of  $6 \mathrm{~g} / \mathrm{l}$ . I used computer simulation to study the distributions of samples of sizes 10, 25 and 100 drawn at random from this Normal distribution. Figure 8.1 shows the theoretical Normal distribution of serum albumin in the population of patients with PBC together with histograms of the means of 100 random samples of sizes 10, 25, and 100. (Note that as there were 100 samples the histograms show both frequencies and relative frequencies.) The expected standard deviations of the sets of 100 means are  $6 / \sqrt{10}$ ,  $6 / \sqrt{25}$  and  $6 / \sqrt{100}$  respectively, or 1.90, 1.20 and 0.60. It can be seen that the observed distributions are reasonably Normal,

![](../images/08_Principles_of_statistical_analysis/img1.jpg)

especially for larger samples, and that their means and standard deviations are close to the expected values. The histograms will get nearer to a Normal distribution as the number of means increases.

Property (iii) in the previous section stated that for samples large enough we should observe a similar phenomenon even when the population values do not have a Normal distribution. We can study this effect using simulation based on the serum bilirubin data in the PBC trial. The actual bilirubin values had a highly skewed distribution with a mean of  $60.73 \mu \mathrm{mol} / \mathrm{l}$  and a standard deviation of  $77.91 \mu \mathrm{mol} / \mathrm{l}$ , but log serum bilirubin had an approximately Normal distribution, with a mean of 3.55 and standard deviation 1.03. I supposed that in the population of all PBC patients log serum bilirubin has a Normal distribution with a mean of  $3.6 \log \mu \mathrm{mol} / \mathrm{l}$  and a standard deviation of  $1.1 \log \mu \mathrm{mol} / \mathrm{l}$ . Figure 8.2 shows the corresponding Lognormal distribution of raw serum bilirubin values and the results of taking random samples of size 10, 25 and 100 from this markedly skewed distribution. We can see that the distribution of the sample means becomes more nearly Normal as the size of the sample increases, but even for samples of 100 the distribution of means is still slightly asymmetric. The more skewed the population values the larger the sample size needed for the means to have a near Normal distribution.

We can study the behaviour of observed proportions in a similar way. On the basis of general practitioner consultations it seems that the prevalence of asthma among women in England is about 0.20 (i.e.  $20\%$ ) (Fleming and Crombie, 1987). We would expect that the observed proportions of asthma sufferers in a series of random samples of English women would tend to have a Normal distribution as the sample size is increased.

As discussed in Chapter 4, the number of subjects in a sample who have a particular attribute follows a Binomial distribution. The observed proportion can be considered to be a mean, and thus in repeated large samples we expect the distribution of the sample proportions to be approximately Normal. I used computer simulation to study the variation in the sample proportion when the population proportion is 0.2. Figure 8.3 shows the resulting distributions of the proportion of women suffering from asthma in 100 random samples of size 10, 25 and 100. It is clear that the distribution does indeed become more like a Normal distribution as the sample size increases. The speed with which the Binomial distribution resembles a Normal distribution depends upon the proportion and sample size. The nearer the proportion is to 0 or 1 the more asymmetric is the Binomial distribution even for quite large samples.

These simulations have verified empirically the three statements in the previous section. In practice we nearly always have just a single sample, but because we can predict what would happen if many samples were taken we can use values from a single sample to make some strong inferences about the population, and can quantify the uncertainty.

![](../images/08_Principles_of_statistical_analysis/img2.jpg)

![](../images/08_Principles_of_statistical_analysis/img3.jpg)

![](../images/08_Principles_of_statistical_analysis/img4.jpg)

![](../images/08_Principles_of_statistical_analysis/img5.jpg)  
Figure 8.3 Observed distributions of the number of women with asthma (probability 0.20) in 100 random samples of sizes 10, 25, and 100.


## 8.4 ESTIMATION

I shall first consider the case where we have taken measurements from a sample of people and wish to draw conclusions about the mean of the population, and then consider the same problem relating to a proportion of interest in the population.


### 8.4.1 Standard error of a sample mean

Figure 4.5 showed that the distribution of the observed serum albumin values in 216 patients with PBC was close to a Normal distribution. The mean of these values was  $34.46 \mathrm{g} / \mathrm{l}$  and the standard deviation was  $5.84 \mathrm{g} / \mathrm{l}$ . What can we infer about serum albumin values in the population of all patients with PBC from this single sample? Clearly any inference must depend on our sample being representative of the population, and I shall make this assumption for all the examples in this section. From section 8.2 our best estimates of the mean and standard deviation in the population are also 34.46 and  $5.84 \mathrm{g} / \mathrm{l}$ .

In the previous section I stated that the standard deviation of many sample means will be  $\sigma /\sqrt{n}$ , where  $\sigma$  is the standard deviation in the population, and this was demonstrated by simulation. The standard deviation of sample means is a hypothetical quantity, because in practice we take only a single sample, so we give it the different name of the standard error of the mean (SEM). Although there are other types of standard error associated with other estimates, the standard error of the mean is often abbreviated to standard error (SE) as it is not usually ambiguous to do so. The name standard error gives an indication of the interpretation, because we are interested to quantify in some way how good our estimate of the mean is of the true, and unknown, population mean - how large an error might we be making?

The standard error of the sample mean serum albumin is thus  $5.84 / \sqrt{216} = 0.397$ . We would expect the means of repeated samples of the same size to have a Normal distribution with mean  $34.46 \mathrm{g} / \mathrm{l}$  and standard deviation  $0.397 \mathrm{g} / \mathrm{l}$ . Note that the standard error is not an estimate of any quantity in the population, but an indication of the variability among many sample means or, alternatively, a measure of the uncertainty of a single sample mean as an estimate of the population mean. The uncertainty decreases as the sample size increases, as is apparent from the formula and was demonstrated in Figure 8.1. In section 8.4.5 I shall show how to use the standard error to construct a confidence interval. The standard error itself, although widely quoted, is a less useful quantity.


### 8.4.2 Standard error of the difference between two sample means

Most medical research is comparative, and so we are more often concerned

with two or more samples rather than a single sample. Comparing two samples is particularly common, and for this we need to know the standard error of the difference between the means of two samples.

In a single sample from a population with a standard deviation of  $\sigma$  the variance of the sampling distribution of the mean is  $\sigma^{2} / n$ , and so the standard error of the mean is  $\sigma /\sqrt{n}$ . If we have two independent samples the variance of the difference between their means is the sum of the separate variances, so the standard error of the difference in means is the square root of the sum of the separate variances. In mathematical notation, if the two means are  $\bar{x}_{1}$  and  $\bar{x}_{2}$ , then

$$
\begin{array}{r l} & {s e(\bar{x}_{1} - \bar{x}_{2}) = \sqrt{v a r(\bar{x}_{1}) + v a r(\bar{x}_{2})}}\\ & {\qquad = \sqrt{\{s e(\bar{x}_{1})\}^{2} + \{s e(\bar{x}_{2})\}^{2}}}\\ & {\qquad = \sqrt{\frac{s_{1}^{2}}{n_{1}} + \frac{s_{2}^{2}}{n_{2}}}.} \end{array}
$$

For example, a large study of acute myocardial function found that 1551 men had a mean blood urea nitrogen of  $23 \mathrm{mg / dl}$  (SD 13) while among 538 women the mean was  $25 \mathrm{mg / dl}$  (SD 15) (Dittrich et al., 1988). The difference is  $2 \mathrm{mg / dl}$ , and its standard error is

$$
\sqrt{\frac{13^{2}}{1551} + \frac{15^{2}}{538}} = 0.726 \mathrm{mg / dl}.
$$

The standard error can be used to construct a confidence interval for the difference in the means of two independent samples of values of a continuous variable if the samples are large (see section 8.4.5). For small samples a slightly different approach is used, as will be described in Chapter 9.


### 8.4.3 Standard error of a sample proportion

I showed that a sample proportion will have an approximately Normal distribution in large samples. We can thus make an approximation by calculating the standard error of a sample proportion under the assumption that the sample size is large enough. As we have seen, for  $p = 0.20$  the approximation is quite good even for fairly small samples. It is reasonable to use this approximation when  $p$  and  $1 - p$  are greater than  $5 / n$ . For example, the approximation is good for proportions in the range 0.1 and 0.9 for samples greater than about 50, but for values of  $p$  outside this range a larger sample is required.

The standard error of the Binomial proportion  $p$  in a sample of size  $n$  was given in Chapter 4 as  $\sqrt{p(1 - p) / n}$ . Using the Normal approximation we thus expect that if the population proportion is  $p$  then in repeated samples of the same size the observed proportions will have a Normal

distribution with mean  $p$  and standard deviation  $\sqrt{p(1 - p) / n}$ . Returning to the earlier example, if we observe that 13 of a random sample of 80 women have asthma, then from that sample we would estimate that the proportion of women in the population with asthma is  $13 / 80 = 0.16$ , with a standard error of  $\sqrt{0.16 \times 0.84 / 80} = 0.041$ .


### 8.4.4 Standard error of the difference between two proportions

We can calculate the standard error of the difference between two proportions in the same manner as that of the difference between two means given in section 8.4.2. If we have two observed proportions,  $p_{1}$  and  $p_{2}$ , from two independent samples, then the standard error of their difference,  $p_{1} - p_{2}$ , is given by

$$
\begin{array}{r l} & {s e(p_{1} - p_{2}) = \sqrt{v a r(p_{1}) + v a r(p_{2})}}\\ & {\qquad = \sqrt{\{s e(p_{1})\}^{2} + \{s e(p_{2})\}^{2}}}\\ & {\qquad = \sqrt{\frac{p_{1}(1 - p_{1})}{n_{1}} + \frac{p_{2}(1 - p_{2})}{n_{2}}}.} \end{array}
$$

For example, in a large study of adolescents 165 of 712 boys reported that they always used a seat belt compared with 91 of 641 girls (Maron et al., 1986). The two proportions are 0.232 and 0.142, so the difference in proportions is 0.090. The standard error of the difference is

$$
\sqrt{\frac{0.232(1 - 0.232)}{712} + \frac{0.142(1 - 0.142)}{641}} = 0.0210
$$


### 8.4.5 Confidence intervals

I observed in section 8.2 that the mean or proportion observed in a sample is the best estimate of the 'true' value in the population, and that the distribution of the values obtained in several samples would be approximately Normal for large samples. We can combine these features of estimates from a sample with the known properties of the Normal distribution to get an idea of the uncertainty associated with a single sample estimate of the population value. We do this by constructing a confidence interval, which is a range of values which we can be confident includes the true value. The basic idea is that the confidence interval covers a large proportion of the sampling distribution of the statistic of interest.

A confidence interval for the estimated mean extends either side of the mean by a multiple of the standard error. For example, the interval between mean - 3SE and mean + 3SE will be a 99.7% confidence interval. because the probability of getting a value from a Normal distribution three

or more standard deviations from the mean is  $0.3\%$  (as shown in section 4.5 and Table B2). It is most common to calculate a  $95\%$  confidence interval, which is the range of values from mean - 1.96SE to mean +1.96SE. However, there is no particular reason for choosing  $95\%$  other than convention, and levels of  $80\%$ ,  $90\%$  and  $99\%$  are sometimes used.

We expect that the  $95\%$  confidence interval will not include the true population value  $5\%$  of the time. We can improve the probability of including the population mean by using, say, a  $99\%$  confidence interval, but at the cost of having a wider interval and thus greater uncertainty. The important point is that there is a small chance that the confidence interval constructed from a single sample will not include the true population mean, whatever the sample size.

The  $95\%$  confidence interval for the sample mean is usually interpreted as a range of values which contains the true population mean with probability 0.95. We thus expect that if we calculate a  $95\%$  confidence interval for the mean serum albumin using each of the 100 random samples shown in Figure 8.1 we would find that about  $5\%$  of them would not include the value of  $35 \mathrm{g / l}$ . Figure 8.4 shows all 100 confidence intervals based on samples of size 100 of which seven do not include  $35 \mathrm{g / l}$ . Figure 8.5 shows the confidence intervals sorted by the size of the sample mean and we can see that seven sample means fall outside the range within which we expect  $95\%$  of sample means. This range is calculated using the

![](../images/08_Principles_of_statistical_analysis/img6.jpg)  
Figure 8.4 Confidence intervals for mean serum albumin constructed from 100 random samples of size 100. The vertical lines show the range within which  $95\%$  of sample means are expected to fall.

![](../images/08_Principles_of_statistical_analysis/img7.jpg)  
Figure 8.5 Confidence intervals from Figure 8.4 ordered by the magnitude of the mean of the random sample.

population mean and standard deviation to get mean  $\pm 1.96\mathrm{SD} / \sqrt{n}$ ; that is  $35 \pm 1.96 \times 6 / \sqrt{100}$  or 33.8 to 36.2. The difference between the observed  $7\%$  and the expected  $5\%$  is of no importance - we would not expect to observe exactly  $5\%$ .

In the PBC trial we actually observed a mean serum albumin of  $34.46 \mathrm{~g} / \mathrm{l}$  with a standard error of  $0.397 \mathrm{~g} / \mathrm{l}$  from a sample of 216 patients with primary biliary cirrhosis. The  $95\%$  confidence interval is thus given by the range of values from  $34.46 - 1.96 \times 0.397$  to  $34.46 + 1.96 \times 0.397$ , or from 33.68 to  $35.24 \mathrm{~g} / \mathrm{l}$ . We can thus be  $95\%$  confident from this study that the true mean serum albumin among all such patients lies somewhere in the range 33.68 to  $35.24 \mathrm{~g} / \mathrm{l}$ , with 34.46 as our best estimate. As mentioned earlier, this interpretation depends on the assumption that the sample of 216 patients is representative of all patients with the disease.

The same 216 patients with PBC had serum bilirubin values that had an approximately Lognormal distribution. We could calculate a confidence interval for the mean serum bilirubin by relying on the central limit theorem and using the same method as for serum albumin. However, because the distribution of serum bilirubin is highly skewed we would be more interested in the median rather than the mean. A more useful confidence interval would therefore be for the median, or we could calculate a confidence interval for the mean of the log serum bilirubin values and back- transform these to give a confidence interval for the geometric mean. These methods are described in the next chapter.

Similarly, we can construct a  $95\%$  confidence interval for our sample of 80 women among whom the observed proportion with asthma was 0.16 with a standard error of 0.039. A  $95\%$  confidence interval for the sample proportion is from  $0.16 - 1.96 \times 0.039$  to  $0.16 + 1.96 \times 0.039$ , or from 0.08 to 0.24. We are thus  $95\%$  confident that on the basis of this sample the proportion of English women with asthma lies in the range 0.08 to 0.24. The confidence interval is wide because the sample size of 80 is rather small for estimating a proportion. In contrast, a  $95\%$  confidence interval for the difference in the proportions of boys and girls always using seat belts is narrower because the study was large. The difference in proportions was 0.090 and its standard error was 0.0210, so the  $95\%$  confidence interval is from  $0.090 - 1.96 \times 0.0210$  to  $0.090 + 1.96 \times 0.0210$ , or from 0.05 to 0.13. These examples illustrating the construction of confidence intervals have made use of Normal distribution theory applied to large samples. In later chapters we will use the  $t$  distribution rather than the Normal distribution for analysis of continuous data, but use the Normal distribution for proportions. The general principle of constructing a confidence interval by adding to or subtracting from an estimate a multiple of its standard error applies in nearly all cases.

These examples illustrating the construction of confidence intervals have made use of Normal distribution theory applied to large samples. In later chapters we will use the  $t$  distribution rather than the Normal distribution for analysis of continuous data, but use the Normal distribution for proportions. The general principle of constructing a confidence interval by adding to or subtracting from an estimate a multiple of its standard error applies in nearly all cases.

Much statistical analysis aims to estimate one or more quantities of interest. Means and proportions have been discussed in this chapter, but the same ideas apply to estimates of other quantities. The standard error of the estimate of interest is calculated, from which one obtains a confidence interval.


## 8.5 HYPOTHESIS TESTING

The approach outlined in the preceding sections seems so straightforward that it may come as some surprise that most statistical analysis in medicine is not of this form, but is based on a different and less intuitive approach called hypothesis testing. The majority of statistical analyses involve comparison, most obviously between treatments or procedures or between groups of subjects. The numerical value corresponding to the comparison of interest is often called the effect. We can state a hypothesis called the null hypothesis that the effect of interest is zero, for example that serum cholesterol is the same on average for men and women or that two treatments for headache are equally effective. This statistical null hypothesis is often the negation of the research hypothesis that generated the data. In the first example, the research hypothesis might be that there was a difference between men and women with respect to their serum cholesterol levels. We also have an alternative hypothesis, which is usually simply that the effect of interest is not zero. Having set up the null hypothesis, we then evaluate the probability that

Having set up the null hypothesis, we then evaluate the probability that

we could have obtained the observed data (or data that were more extreme) if the null hypothesis were true. This probability is usually called the  $\mathbf{P}$  value; the smaller it is the more untenable is the null hypothesis. The method is called testing because of the aspect of deciding whether or not we can reject the null hypothesis. We might find, for example, that in a study comparing serum cholesterol levels of men and women, there was a tendency for higher levels in men, and the  $\mathbf{P}$  value was 0.10. Notice that there is no direct reference in this method to the magnitude of the effect of interest: the analysis is summarized by a probability value. For this and other reasons the approach based on estimation and confidence intervals is widely considered superior, but hypothesis testing remains an important statistical method, and it is essential to understand the underlying principles and interpretation. The Shapiro- Wilk test for non- Normality, described in section 7.5.3, is an example of a hypothesis test.

How do we evaluate the probability of obtaining our data if the null hypothesis is true? For most of the problems discussed in this book the answer lies in calculating a test statistic - a value which we can compare with the known distribution of what we expect when the null hypothesis is true. The general form of the test statistic can be expressed in relation to the observed value of the quantity of interest and the value expected if the null hypothesis were true. The observed value is the estimate of interest, such as the difference in mean serum cholesterol between men and women. For the situations so far described the test statistic is given by

In many cases the hypothesized value is zero, so that the test statistic becomes the ratio of the observed quantity of interest to its standard error. The idea that the magnitude of the quantity of interest is evaluated as a multiple of its standard error is common in the main methods of statistical analysis. However, there are several situations discussed in later chapters where the test statistic is not of the above form.

In some circumstances discussed in later chapters we will see that when the null hypothesis is true the test statistic can be considered to have a Normal distribution. In other cases, notably when studying means, we need to use the slightly different  $t$  distribution, but the principle is the same.

We evaluate a test statistic by calculating the probability that we could have observed that value, or one that is more extreme (i.e. more unlikely). if the null hypothesis is true. The probability of interest, or  $\mathbf{P}$  value, is thus the tail area of the distribution. As an example, I shall consider the case where the test statistic has a Normal distribution when the null hypothesis is true. Suppose we wish to use the sample of 216 PBC patients to evaluate the null hypothesis that the mean serum albumin in all PBC patients is  $33.5 \mathrm{g} / \mathrm{l}$  . As shown earlier, the mean serum albumin in the sample was

34.46 g/l and its standard error was  $0.397 \mathrm{g} / \mathrm{l}$ . This is a situation where we can use the formula given above, so we calculate the test statistic as (34.46 - 33.5)/0.397, which is 2.42. From Table B1 the tail area of the Normal distribution corresponding to this value of the test statistic is 0.0078, or  $0.78\%$ . However, the test statistic could be negative, and the equivalent values in the other tail of the distribution are just as extreme, or unlikely, when the null hypothesis is true so we double the area to get a P value of 0.0155. This value can be obtained directly from Table B2. In other words, a test statistic of 2.42 or more would arise with a probability of only 0.0155 if the null hypothesis is true. We call this a two- tailed test, for obvious reasons. The question of whether to use a two- tailed or a one- tailed test is discussed in section 8.5.6. We can carry out a hypothesis test for all the situations described in section 8.4 where we can calculate a confidence interval, and this is true in general. In later chapters, however, we will see that there are some circumstances where we can perform a hypothesis test but cannot obtain a confidence interval.

We can carry out a hypothesis test for all the situations described in section 8.4 where we can calculate a confidence interval, and this is true in general. In later chapters, however, we will see that there are some circumstances where we can perform a hypothesis test but cannot obtain a confidence interval.


### 8.5.1 Interpretation of P values

P values abound in medical research papers, so it is essential to understand precisely what they mean, and also what they do not mean. The P value is the probability of having observed our data (or more extreme data) when the null hypothesis is true. For example, in a clinical trial this statement refers to the observed difference between the treatment groups. We are therefore relating our data to the likely variation in a sample due to chance when the null hypothesis is true in the population.

We have seen that samples give results that differ from what is true in the population, and that the variability among samples decreases as the sample size increases. It will be seen in subsequent chapters that these facts are taken into account when test statistics, and hence P values, are calculated.

The interpretation of a P value is problematic. If we carry out a clinical trial to compare two treatments and get a 'large' value of P, say greater than 0.2, then we can say that data such as ours could occur often when the null hypothesis is really true. We thus cannot rule out the possibility that the null hypothesis is true - that is, that the two treatments are equally effective. Conversely if P is very small, say less than 0.001, then the null hypothesis appears implausible because our data could hardly ever arise purely by chance when the null hypothesis is true. We can therefore feel confident that the null hypothesis is not true and one treatment is superior. Between these two extremes lies a grey area, but conventionally a cut- off is chosen and if P is smaller than the cut- off value the null hypothesis is rejected. The test of the null hypothesis is therefore whether

or not P lies below the chosen cut- off point.

Although the choice of cut- off is arbitrary, in practice in most cases we use 0.05. In other words, an outcome that could occur less than one time in 20 when the null hypothesis is true would lead to the rejection of the null hypothesis. In this formulation, when we reject the null hypothesis we accept a complementary alternative hypothesis, which in the clinical trial example is that the two treatments are not equally effective. If the P value exceeds the critical value we do not reject the null hypothesis. However, we cannot say that we believe the null hypothesis is true, but only that there is not enough evidence to reject it. This is a subtle but important distinction.

When  $\mathbf{P}$  is below the cut- off, say 0.05, the result is called statistically significant (and below some lower level, such as 0.01, it may be called highly significant); when above 0.05 it is called not significant. For this reason hypothesis tests are often called significance tests. The use of the word significant leads to much confusion between statistical and clinical significance. Because of the widespread use of hypothesis tests some medical journals restrict the use of the word significant to its statistical meaning. However, it is common practice to take a statistically significant result as a real effect, and often, by implication, as a clinically important effect too. Neither interpretation is necessarily justified. For example. in the study to compare blood pressure in the left and right arms described in section 5.4, a small difference of about  $1\mathrm{mmHg}$  (both systolic and diastolic) was found (Gould et al., 1985). This difference was highly statistically significant but of no importance clinically. Similarly it is not reasonable to take a non- significant result as indicating no effect. just because we cannot rule out the null hypothesis.


### 8.5.2 P as a significance level

The cut- off level for statistical significance is usually taken at 0.05. but sometimes at 0.01. These cut- offs are arbitrary and have no specif. importance. It is ridiculous to interpret the results of a study differentl. according to whether the  $\mathbf{P}$  value obtained was, say, 0.055 or 0.045. The.  $\mathbf{P}$  values should lead to very similar conclusions, not diametrically opposed ones. A minor change to the data can easily shift the  $\mathbf{P}$  value by this amount or more.

In recent years there has been a welcome move away from regarding the  $\mathbf{P}$  value as significant or not significant, according to which side of the arbitrary 0.05 value it is, towards quoting the actual  $\mathbf{P}$  value. It is increasingly common to see expressions such as  $\mathbf{P} = 0.02$  or  $\mathbf{P} = 0.15$  rather than  $\mathbf{P}< 0.05$  or  $\mathbf{P} > 0.05$ . One reason for this is that many statistical computer programs give the exact  $\mathbf{P}$  value, whereas it used to be necessary to evaluate a  $\mathbf{P}$  value from tables in which test statistics were given.

corresponding to certain  $\mathbf{P}$  values only, such as 0.1, 0.05, 0.01 and 0.001. (Table B3 is of this type.) Quoting the actual  $\mathbf{P}$  value allows the reader to make his or her own interpretation.

But how does one interpret  $\mathbf{P}$  values if not in relation to the 0.05 level? There is no really satisfactory answer to this question, because  $\mathbf{P}$  values are an unnatural way of expressing results. In section 8.8 I contrast hypothesis testing and estimation via confidence intervals, and explain why the latter are greatly preferred.


### 8.5.3 Type I and Type II errors

The use of a cut- off for  $\mathbf{P}$  leads to treating the analysis as a process for making a decision. Within this framework it is customary (but unwise) to consider that a statistically significant effect is a real one, and conversely that a non- significant result indicates that there is no effect. Forcing a choice between significant and non- significant obscures the uncertainty present whenever we draw inferences from a sample. When we construct a confidence interval the uncertainty is shown explicitly, but with a hypothesis test it is implicit, and may easily be overlooked.

Two possible errors can be made when using  $\mathbf{P}$  to make a decision. Firstly, we can obtain a significant result, and thus reject the null hypothesis, when the null hypothesis is in fact true. This is called a Type I error, and may be thought of as a 'false positive' result. Alternatively, we may obtain a non significant result when the null hypothesis is not true, in which case we make a Type II error. This can be thought of as a 'false negative' finding.

The probabilities of Type I and Type II errors are sometimes called alpha  $(\alpha)$  and beta  $(\beta)$ . For any hypothesis test the value of alpha is determined in advance, usually as  $5\%$ . The value of beta depends upon the size of effect that one is interested in, and also the sample size. More often we talk about the power of a study to detect an effect of a specified size, where the power is  $1 - \beta$ , or  $100(1 - \beta)\%$ . A wide confidence interval is an indication of low power.

We can also fix beta in advance by choosing an appropriate sample size. In other words, we can calculate the necessary sample size for a study to have a high probability of finding a true effect of a given magnitude. Chapter 15 shows how to perform the calculations for studies comparing two groups. For more complicated designs it is advisable to get advice on sample size from a statistician.


### 8.5.4 Over-reliance on  $\mathbf{P}$  values

The formulation of statistical analysis as a test with two possible outcomes - significant or not significant - has had harmful effects on the medical literature. There is increasing evidence of publication bias in favour of

papers reporting significant findings. If several identical studies are performed their results will vary because of sampling variation. Those studies that show larger effects will be more likely to be statistically significant and thus more likely to be published. The same applies even when the null hypothesis is true, as we know that one study in 20 will give a result significant at the  $5\%$  level. The consequence is that published studies are a biased selection of all studies carried out (see section 15.5.2).

The achievement of statistical significance is often seen as success and a non- significant result as failure. This is exemplified by the use of the terms 'positive' and 'negative' to describe studies with significant or non- significant results, a usage that should be abandoned. The same attitude is also seen in the ugly phrase 'failed to reach statistical significance' which is seen in many papers.

Freiman et al. (1978) looked at 71 published trials with 'negative' results, defined as having  $\mathbf{P}$  values greater than 0.1, and constructed confidence intervals for each study. They found that for nearly half the trials the results were compatible with a  $50\%$  therapeutic improvement, which we may reasonably take as clinically valuable for any trial. In other words, the confidence intervals were wide enough to include the possibility that one treatment was  $50\%$  better than the other. In none of the original papers had the authors constructed a confidence interval. Other ways of looking at these trials are that they had low power and that the sample size was too small. Because the standard error is related to sample size, a small study may fail to detect (as significant) a difference that is real. These trials demonstrate the non- equivalence of statistical significance and clinical importance.


### 8.5.5 Misinterpretation of P values

A common misinterpretation of the  $\mathbf{P}$  value is that it is the probability of the data having arisen by chance or, equivalently, that  $\mathbf{P}$  is the probability that the observed effect is not a real one. The distinction between this incorrect definition and the true definition given earlier is the absence of the phrase when the null hypothesis is true. The omission leads to the incorrect belief that it is possible to evaluate the probability of the observed effect being a real one. The observed effect in the sample is genuine, but we do not know what is true in the population. All we can do with this approach to statistical analysis is to calculate the probability of observing our data (or more unlikely data) when the null hypothesis is true.


### 8.5.6 Two-sided or one-sided P values?

To reiterate, the  $\mathbf{P}$  value is the probability of obtaining a result at least as extreme as the observed result when the null hypothesis is true. I pointed

out earlier that extreme results can occur by chance equally often in either direction, which we allow for by calculating a two- sided  $\mathbf{P}$  value. In the vast majority of cases this is the correct procedure. In rare cases it is reasonable to consider that a real difference can occur in only one direction, so that an observed difference in the opposite direction must be due to chance. Here the alternative hypothesis is restricted to an effect in one direction only, and it is reasonable to calculate a one- sided  $\mathbf{P}$  value by considering only one tail of the distribution of the test statistic. For a test statistic with a Normal distribution the usual two- sided  $5\%$  cut- off point is 1.96, whereas a one- sided  $5\%$  cut- off is given by 1.64. The difference is not particularly large but can lead to a different interpretation in relation to fixed levels of statistical significance.

One- sided tests are rarely appropriate. Even when we have strong prior expectations, for example that a new treatment cannot be worse than an old one, we cannot be sure that we are right. If we could be sure we would not need to do an experiment! If it is felt that a one- sided test really is appropriate, then this decision must be made before the data are analysed; it must not depend on what the results were. The small number of one- sided tests that I have seen reported in published papers have usually yielded  $\mathbf{P}$  values between 0.025 and 0.05, so that the result would have been non- significant with a two- sided test. I doubt that most of these were pre- planned one- sided tests.

The estimation and hypothesis testing approaches will be compared in section 8.8. There is a close relation between the two, but only for a two- sided hypothesis test. Two- sided  $\mathbf{P}$  values will be used throughout this book, and I recommend that they are used routinely. In some places I quote more exact values than can be obtained from the tables in Appendix B. Many computer programs give exact  $\mathbf{P}$  values.


## 8.6 NON-PARAMETRIC METHODS

Although confidence intervals and hypothesis testing are rather different approaches to statistical analysis, they have a close mathematical link for the majority of statistical methods, because they are both based on the same statistical model and the same assumptions about sampling distributions. Theoretical distributions are described by quantities called parameters, notably the mean and standard deviation, so methods that use distributional assumptions are called parametric methods. There is another class of statistical methods which do not involve distributional assumptions which are called distribution- free or non- parametric methods. Because these methods are based on analysis of ranks rather than actual data, they are sometimes called rank methods. Unfortunately none of these three terms accurately describes all the methods usually considered to fall into this category. In this book I shall usually refer to these methods as

non- parametric as this is the term in most frequent use. Note that 'non- parametric' applies to the statistical method used to analyse data, and is not a property of the data.

As they do not usually involve any distributional assumptions, non- parametric methods are most often used to analyse data which do not meet the distributional requirements of parametric methods - usually that the data have a Normal distribution. Skewed data are commonly analysed by non- parametric methods, and methods using ranks are especially suitable for data which are scores rather than measurements. These could have many possible values, such as data from visual analogue scales, or only a few values, such as Apgar scores or stage of disease.

Table 8.1 shows fasting blood glucose data from a study of Type 1 diabetics (Thuesen et al., 1985) together with the ranks of the observations. When there are two or more identical values the average rank is

Table 8.1 Fasting blood glucose levels in 24 Type 1 diabetics (Thuesen et al., 1985)  

<table><tr><td>Blood glucose (mmol/l)</td><td>Rank order</td></tr><tr><td>4.2</td><td>1</td></tr><tr><td>4.9</td><td>2</td></tr><tr><td>5.2</td><td>3</td></tr><tr><td>5.3</td><td>4</td></tr><tr><td>6.7</td><td>5.5</td></tr><tr><td>6.7</td><td>5.5</td></tr><tr><td>7.2</td><td>7</td></tr><tr><td>7.5</td><td>8</td></tr><tr><td>8.1</td><td>9</td></tr><tr><td>8.6</td><td>10</td></tr><tr><td>8.8</td><td>11</td></tr><tr><td>9.3</td><td>12</td></tr><tr><td>9.5</td><td>13</td></tr><tr><td>10.3</td><td>14</td></tr><tr><td>10.8</td><td>15</td></tr><tr><td>11.1</td><td>16</td></tr><tr><td>12.2</td><td>17</td></tr><tr><td>12.5</td><td>18</td></tr><tr><td>13.3</td><td>19</td></tr><tr><td>15.1</td><td>20</td></tr><tr><td>15.3</td><td>21</td></tr><tr><td>16.1</td><td>22</td></tr><tr><td>19.0</td><td>23</td></tr><tr><td>19.5</td><td>24</td></tr></table>

given to each of the 'tied' observations concerned, as is shown for the two values of  $6.7 \mathrm{mmol / l}$ . Instead of analysing the actual observations using parametric methods we could analyse the ranks using non- parametric methods. For example, we might wish to compare the blood glucose data for two subgroups of the diabetics, for which the analysis would be based on the sums of the ranks for all subjects within each subgroup. The appropriate methods are discussed in the next chapter.

To compensate for the important advantage of being free of assumptions about the distribution of the data there is the disadvantage that rank methods tend to be more suited to hypothesis testing than estimation. Non- parametric estimates can be calculated, however, the best known example being the median, and it is also possible in some cases to calculate non- parametric confidence intervals. Estimation becomes difficult or impossible for more complex data structures and many problems cannot be handled at all using rank methods.

For simple problems, such as comparing one variable in two groups of subjects or relating two variables within one group the distribution free approach has definite advantages, and its use will be contrasted to the parametric approach in later chapters.

Non- parametric methods are mostly based on comparing sums of ranks. The sum of a set of observations is a simple multiple of their average, so the central limit theorem also applies to these rank sums. Thus unless the samples are small it is often possible to use a Normal approximation when carrying out a non- parametric test, making it easier to apply the method. It seems strange to use the Normal distribution in this way when the methods explicitly avoid having to make any assumptions about the specific nature of the distribution of the observations. It is important to distinguish the two uses of the Normal distribution in statistics: to describe the distribution of a set of observations and to describe (or approximate) the sampling distribution of some quantity of interest.


## 8.7 STATISTICAL MODELLING

Behind the ideas of estimation and hypothesis testing lies a general strategy for statistical analysis called modelling. A statistical model is a mathematical relationship between two or more variables that gives an approximate description of the observed data. We do not usually believe that the model describes the underlying mechanism of a relation between variables, but it is a simplification which is compatible with the data.

Most of the parametric methods described in this book fall into a unified theoretical framework known as linear models, where 'linear' means 'additive'. The idea is that the observed data can be explained by a model in which the effects of different influences are added. To return to the example of blood pressure given at the start of Chapter 3, a statistical

model for blood pressure might include contributions relating to age, sex, race, smoking, time of day, and so on.

model for blood pressure might include contributions relating to age, sex, race, smoking, time of day, and so on.For most analyses described in this book the underlying statistical model is very simple and will not usually be described, but I shall introduce models explicitly in Chapters 11 and 12. However, two key ideas associated with statistical models will be apparent throughout. First, certain assumptions are made when we fit a model, and it is important to try to verify that these are reasonable. An obvious common example is the assumption that the data have an approximately Normal distribution, some form of which appears in nearly all of the models described in this book. Second, it is also important to consider two aspects of how well the model 'fits' the data. We need to check that there are no systematic discrepancies, and we must also consider how useful the model is at predicting a value for an individual. For example, many researchers have fitted models to try to predict birthweight from maternal characteristics and fetal measurements. Although many variables are known to be related to birthweight, models that include all known influences do not allow us to predict birthweight at all accurately for an individual baby. In a sense to be defined in Chapter 11, the models account for only  $25 - 30\%$  of the variability in birthweight. Here we see again the distinction between estimation and hypothesis testing. The variables in the model are significantly associated with birthweight, both individually and collectively, but the estimates of birthweight derived from the model are too imprecise to be clinically useful (although they may be epidemiologically useful).


## 8.8 ESTIMATION OR HYPOTHESIS TESTING?

Over the last 40 years there has been a dramatic surge in the use of statistical methods in medical research, with widespread use of hypothesis tests and a trend towards more complex methods of analysis. Nowadays few research papers do not include hypothesis tests, but unfortunately their use is often at the expense of any other interpretation of the data. In particular it is common to see the results of some comparison expressed solely as a P value, or even just as 'significant' or 'not significant'. While P values are informative they tell only part of the story, and need to be accompanied by more direct information about what was actually observed.

Some research is purely exploratory, for example looking for possible associations worthy of more detailed study, but for most research the results cannot be meaningfully interpreted from a pronouncement of 'statistically significant'. As discussed above, it is not necessarily true that such a result is clinically significant, nor is a non- significant finding necessarily ignorable. Quantification of the results by simple estimates is an essential part of the analysis of data. Whether a clinician will use a new treatment that reduces blood pressure or the frequency of migraines will

depend on the amount of the reduction. It may also depend on how consistent the effect is. A drug that reduces everybody's incidence of migraines by  $30\%$  may be better than one which reduces the incidence by  $50\%$  for some patients but does nothing for others. A single number (the P value) cannot convey all the necessary information; the appropriate estimates and confidence intervals are needed too.

Most published research does include estimates of the effects of interest, and it has become standard practice to include  $\mathbf{P}$  values, but until recently the use of confidence intervals was rare. Lately, however, there has been a welcome move by several leading medical journals towards encouraging or even requiring authors to present confidence intervals in conjunction with their main findings (see Gardner and Altman, 1989a).


### 8.8.1 Relation between confidence intervals and statistical significance

Different though hypothesis testing and confidence intervals may appear there is in fact a close relation between them. The  $\mathbf{P}$  value will be less than 0.05 (i.e. 'significant') only when the  $95\%$  confidence interval does not include zero (or, more generally, the value specified in the null hypothesis). The reason for this relation is that both methods are based on similar aspects of the theoretical distribution of the test statistic. The same relation applies between the  $99\%$  confidence interval and the related significance test at the  $1\%$  level, and so on.

The confidence interval shows the uncertainty, or lack of precision, in the estimate of interest, and thus conveys more useful information than the  $\mathbf{P}$  value. Because of the relation described above, by presenting a confidence interval we also indicate whether  $\mathbf{P}$  is above or below the cut- off level of  $5\%$ . The presentation of both the actual  $\mathbf{P}$  value and the confidence interval is desirable, but if only one is given the  $\mathbf{P}$  value may be omitted - - it is less important, and in any case can be gauged roughly from the confidence interval.

The issues discussed in this section are considered at greater length by Cox (1982) and Gardner and Altman (1989b).


## 8.9 STRATEGY FOR ANALYSING DATA

I strongly recommend that a computer, or at least a programmable calculator, is used for statistical analysis. Chapter 6 presented various advantages, but also some drawbacks, of using a computer. Section 6.6 gave a strategy for analysing data using a computer, although the principles are not specific to analysis by computer.

One aspect not covered in Chapter 6 was how to tell which is the appropriate method of analysing a set of data. Chapters 9 to 12 describe a

large number of different methods of analysis. The titles of these chapters are descriptive of the problems tackled rather than the names of the methods:

Chapter Title

9 Comparing groups - continuous data

10 Comparing groups - categorical data

11 Relation between two continuous variables

12 Relation between several variables

Chapter 9 and 10 cover analyses where you have a single variable of interest for one, two or more groups. Within these chapters the distinction is made between observations made on different groups of individuals and observations made on more than one occasion on the same individuals - 'paired data'. Chapters 11 and 12, in contrast, cover analytes where we are interested in the inter- relationship between two or more variables for a single group of individuals. Note that in most studies information on a large number of variables is collected, but the variables are analyzed separately using the simpler techniques of Chapters 9 and 10. Chapter 12 gives guidance on when this is or is not a sensible approach.

Chapter 13 considers the analysis of survival times, which is a special case of the problems considered in Chapter 9, and requires special method of analysis, and more general problems in the analysis of time- related data. Chapter 14 discusses some specific common problems in the analysis of medical data. For many of the methods described in these chapters both confidence intervals and hypothesis tests are presented.


## 8.10 PRESENTATION OF RESULTS

The methods introduced in this chapter recur in several subsequent chapters so some general comments on presentation of results may be helpful.

Estimates and confidence intervals should be treated in the same way, means and standard deviations (see section 3.7). The percentage coverage of confidence intervals should be stated.

Where possible give actual P values rather than ranges such as P<0.05 No more than two significant figures need be quoted. as in P=0.14 P=0.012. P=0.001. It is not usually necessary to specify P below. 0.0001. If you obtain P from tables then you will cad up with a value between two limits, according to the values that are tabulated. We use the signs <' (less than) and >' (greater than) in expressions such as P<0.05 or 0.05 >P>0.01. It is convcational to use the shorter limits P<0.05 when P is between 0.01 and 0.05. as it is assumed that if P was less than 0.01 you would have used P<0.01. For values of P greater than 0.05 it is useful to be more specific than P>0.05. for example by P=0.15

or  $\mathbf{P} > 0.2$ . Do not use the abbreviation NS for not significant without defining the term (usually  $\mathbf{P} > 0.05$ ) and please do not use the appalling  $\mathbf{P} = \mathbf{NS}$ . It is generally assumed that  $\mathbf{P}$  values are two- sided unless stated otherwise. The use of one- sided tests should always be noted (and justified).


## 8.11 SUMMARY

Analysing your own data and being able to evaluate the medical literature depend upon understanding the basic ideas behind statistical analysis as well as being familiar with the statistical methods used.

In this chapter I have discussed in detail the idea of a sampling distribution relating to a parameter of interest, such as a mean or a proportion. A major topic covered was the central limit theorem, by which the sampling distribution of the mean of a sample approaches a Normal distribution as the sample size increases, regardless of the shape of the distribution of the data in the population. This result underlies many of the methods described in subsequent chapters.

I have also introduced the two main approaches to statistical inference - - estimation and hypothesis testing. The general principles outlined are fundamental to an appreciation of the remaining chapters of this book, and to understanding what statistical analysis and interpretation is all about. Published papers tend to present results in a shorthand way that can be opaque - for example as means and standard errors. It is important to know what can and cannot be inferred from these quantities, especially by constructing confidence intervals. Likewise, most published papers contain  $\mathbf{P}$  values but the interpretation of them is often faulty. It is important to understand the true meaning of the  $\mathbf{P}$  value, and to realize that statistical significance and clinical importance are not the same thing.

It may be helpful to re- read parts of this chapter after the next few chapters describing particular statistical methods.


## EXERCISES

8.1 There are two hospitals in a town. On average 45 babies are born each day in the larger hospital, and 15 in the smaller. The probability of a baby being a boy is about 0.52, and the probability of twins is about 0.012. On any day which hospital is more likely

(a) to have a set of twins delivered,

(b) to have more than  $60\%$  of babies being boys?

(No mathematics is required to answer these questions.)

(Based on Kahneman and Tversky, 1982)

8.2 Eight diabetic patients had plasma glucose levels (mmol/l) measured before and one hour after oral administration of  $100 \text{g}$  glucose (Feingold et al., 1989), with the following results

<table><tr><td rowspan="2">Patient</td><td rowspan="2">Before</td><td colspan="2">Plasma glucose (mmol/l)</td></tr><tr><td>After</td><td>Change</td></tr><tr><td>1</td><td>4.67</td><td>5.44</td><td>0.77</td></tr><tr><td>2</td><td>4.97</td><td>10.11</td><td>5.14</td></tr><tr><td>3</td><td>5.11</td><td>8.49</td><td>3.38</td></tr><tr><td>4</td><td>5.17</td><td>6.61</td><td>1.44</td></tr><tr><td>5</td><td>5.33</td><td>10.67</td><td>5.34</td></tr><tr><td>6</td><td>6.22</td><td>5.67</td><td>-0.55</td></tr><tr><td>7</td><td>6.50</td><td>5.78</td><td>-0.72</td></tr><tr><td>8</td><td>7.00</td><td>9.89</td><td>2.89</td></tr></table>

(a) Calculate the standard error of the mean change in plasma glucose.

(b) On the basis of these data, how many diabetic patients would need to be studied so that the width of the  $95\%$  confidence interval for the mean change in plasma glucose level was  $0.5 \text{mmol / l}$ ? (Assume that the Normal distribution is the appropriate sampling distribution for the change in plasma glucose.)

8.3 In a clinical trial in which a total of 100 patients are allocated to two treatments by simple randomization, show that the probability that the difference between the numbers of patients in the two treatment groups exceeds 20 is about  $5\%$ . (Hint: consider the distribution of the number of patients allocated to one of the groups.)

8.4 A controlled trial was performed to compare the corticosteroid prednisolone and placebo in patients with chronic active hepatitis positive for hepatitis B surface antigen (Lam et al., 1981). In response to a letter criticizing the analysis the author wrote: 'The one- tailed test was used in the calculations, since in a previous analysis major complications were encountered significantly more frequently in the steroid- treated group' (Ng et al., 1981). (This information had not been given in the original paper.)

Is this a valid justification for performing one- tailed tests? If not, why not?
