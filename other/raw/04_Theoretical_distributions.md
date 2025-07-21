# 4 Theoretical distributions

## 4.1 INTRODUCTION

The importance of variability in attributes or responses was emphasized in the previous chapter. Without such variability events would be entirely predictable, and there would be no need for statistical methods. Because there is variability, we need statistical analysis to unravel what is going on. For example, while it is now universally accepted that cigarette smoking is hazardous to health, realization that this was so did not come until much careful research was carried out beginning in the 1940s and 1950s (Doll and Hill, 1950). Although the risk of heart disease, lung cancer and other diseases is considerably increased by smoking, the effect was masked because the response to smoking is highly variable. Some heavy smokers live to 80 or 90, whereas many non- smokers die before they are 60. Clearly the ability to detect effects, whether in observational or experimental studies, depends upon both the magnitude of the effect on average, and the variability of the effect. We will see that the balance between these ideas is behind a large number of the main statistical methods.

Another essential concept in the application of statistical methods is that of probability. We frequently encounter probability in some form in everyday life. It may be reasonably explicit, such as the probability of winning a lottery, or implicit, such as the probability of crossing the road without getting run over. Often we need to judge probability in relation to a decision that has to be taken, for example, whether I take an umbrella when I go out will depend on my perception of the probability of rain. Most aspects of life can be shown to involve some probabilities, and medicine is no exception. What is the probability of a heart transplant patient living for two years? What is the probability that a patient will respond to a particular treatment? What is the probability that a patient with a pain in his stomach has an ulcer? Given appropriate data, statistical methods help to answer many questions like these. It must be remembered, though, that statistical analysis rarely leads to a definite answer, so that we should indicate (or at least be aware of) a degree of uncertainty in our answers.


## 4.2 PROBABILITY

First, we need to consider the mathematical nature of probability. For the purposes of the statistical methods described in this book I shall define the probability of some specific outcome as the proportion of times that that outcome would occur if we repeated the experiment or observation a large number of times. For example, we can estimate the probability that a baby is a boy by observing what proportion of a large number of babies are boys.

By definition a probability lies between 0 and 1; something that cannot happen has a probability of 0, while something that is certain to happen has a probability of 1. A probability is thus somewhat similar to a proportion or a percentage: an outcome with a probability of 0.2 means that there is a one in five, or a  $20\%$  chance of it happening. Probabilities are not usually expressed as a percentage. In practice we have to estimate most probabilities, as there is no way of knowing the true value.

There are two simple rules regarding probabilities that we need to consider at this stage:

1. For a given event, for any two outcomes that might happen the probability of either occurring is the sum of the individual probabilities.

For example, if the probability of an individual being blood group A is 0.43 and of being group B is 0.08, then the probability of being either A or B is 0.51. It follows that the probabilities of all possible outcomes must add up to 1, since one of these possibilities must occur. For example, the probabilities of being in the different blood groups are approximately

O:0.46;A:0.43;B:0.08;AB:0.03.

We assume here that all outcomes are mutually exclusive.

2. If we consider two or more different events which are independent of each other, then to get the probability of a combination of specific outcomes for each of the events we must multiply the individual probabilities of those outcomes.

The idea of independence is an essential statistical concept. By independent we mean that if we know the outcome of one event this tells us nothing about the other event. More formally, the probability of each possible outcome for the second event is the same regardless of the outcome for the first event, and so on. For example, if there are three people in a GP's waiting room, the probability that they are all blood group O is  $0.46\times 0.46\times 0.46 = 0.097$  , that is, there is less than one chance in ten. In this context independence requires the three people to be unrelated.

As we would expect, if two events are not independent, the multiplicative property does not apply. For example, if the probability of a man being more than six feet tall is 0.2, the probability that both he and his son are over six feet is not  $0.2\times 0.2 = 0.04$  because the heights of children tend to

be related to the heights of their parents. This idea is used in reverse in cases of uncertainty to investigate whether two events are independent. For example, in a case- control study patients with a disease (cases) are compared with people without the disease (controls) with respect to some possibly hazardous exposure earlier in their life. Women with cervical cancer may be compared with controls with respect to past use of oral contraceptives. If more cases had the exposure than controls then the probability of having been exposed is different for cases and controls and one suspects the exposure as a cause of the disease. Another way of looking at this is to say that having the disease and having had the exposure are not independent events.


## 4.3 SAMPLES AND POPULATIONS

Nearly all statistical analysis is based on the principle that one acquires data on a sample of individuals and uses the information to make inferences about all such individuals. This idea is probably most familiar in the context of opinion polls. The set of all subjects (or whatever is being investigated) is called the population of interest. In the previous chapter data were presented for 25 patients with cystic fibrosis and for 298 normal children aged 6 months to 6 years. Analysing the data from these samples enables us to make inferences about the population. For these studies the populations of interest were, respectively, all patients with cystic fibrosis and all children aged 6 months to 6 years. The way the sample is selected is clearly very important, and is discussed in the next chapter.

We take samples to study because it is rarely, if ever, possible to study the whole population. We might be able to study all patients diagnosed as having cystic fibrosis in one country on a particular date, but they are still only a sample of all people with cystic fibrosis, restricted by time and geography, and undiagnosed cases are excluded. Fortunately we do not need to study the whole population, as a carefully chosen sample can yield reliable answers. We cannot usually count or identify all the members of the population, but the sample allows us to draw inferences about the population, both collectively and individually. For example, a study of the anti- hypertensive effect of a new drug would allows us to estimate (within limits) the possible benefit of the drug to future hypertensive patients not in the study.

The relation between sample and population is subject to uncertainty, and we use ideas of probability to indicate this uncertainty. The idea of a theoretical probability distribution is important in this context.


## 4.4 PROBABILITY DISTRIBUTIONS

In the previous chapter I discussed the idea of a distribution of observed data - an empirical distribution. Many statistical methods use the related

idea of a probability distribution which is specified mathematically. A probability distribution is used to calculate the theoretical probability of different values occurring, and is thus a theoretical equivalent of an empirical relative frequency distribution.

For example, if we know the mean and standard deviation of the height of adult men we can calculate the probability of being more than six feet tall if we assume that the distribution of height in the population is the same as a particular probability distribution. If we know from observation that the proportion of babies that are boys is 0.52, we can use this fact together with some mathematics to find the probability that a woman with four children has four daughters. The value 0.52 is a parameter of the probability distribution, as are the mean and standard deviation in the first example. All probability distributions are described by one or more parameters.

Many statistical methods are based on the assumption that the observed data are a sample from a population with a distribution that has a known theoretical form. If this assumption is reasonable (we cannot establish if it is true) then the statistical methods of analysis are simple to use and wide- ranging. If the distributional assumption is not reasonable and we proceed as if it were, then we may end up with misleading (and invalid) answers. When analysing data we have a choice between methods that make distributional assumptions, called parametric methods, and those which make no assumptions about distributions, called distribution- free or non- parametric methods.

The importance of probability distributions in statistical analysis reflects the dominance of parametric methods. First I shall consider probability distributions for continuous variables, for which one distribution in particular, the Normal distribution, is of fundamental importance. Later I shall look at probability distributions for discrete data.


## 4.5 THE NORMAL DISTRIBUTION

The Normal distribution is by far the most important probability distribution in statistics. It appears in some form in most of the following chapters, for reasons which are considered more fully in Chapter 8, so an understanding of its nature and role is essential. However, to emphasize that there is no implication that this distribution is more 'normal' than many others, I use a capital N for Normal. (It is also sometimes known as the Gaussian distribution, after the mathematician Gauss.)

In the previous chapter I showed how a histogram can be used to depict the distribution of a set of observations of a continuous variable. If there had been thousands of observations, and IgM had been recorded more precisely, the IgM values could be divided into many tiny intervals, and a histogram of the data would appear more like a smooth curve. So it is not

difficult to imagine that the histogram or frequency polygon of some observed data is an approximation to some 'underlying' smooth frequency distribution. For example, Figure 4.1 shows a histogram of serum albumin values in 216 patients with primary biliary cirrhosis, and Figure 4.2 shows a

![](../images/04_Theoretical_distributions/img1.jpg)  
Figure 4.1 Histogram of serum albumin values in 216 patients with primary biliary cirrhosis (from the study by Christensen et al., 1985)

![](../images/04_Theoretical_distributions/img2.jpg)  
Figure 4.2 Frequency polygon of serum albumin values in 216 patients with primary biliary cirrhosis.

frequency polygon of the same data, in which the effect is rather clearer.

frequency distributions for continuous measurements, such as in Figure 4.2, tend to have a single peak: they are called unimodal. They may be fairly symmetric, as here, or asymmetric, as with the IgM data discussed in Chapter 3. The Normal distribution is a probability distribution which is unimodal and symmetric; its shape is shown in Figure 4.3. Frequency distributions with two peaks are occasionally seen. These are called bimodal, and are usually the result of mixing subgroups with different means.

![](../images/04_Theoretical_distributions/img3.jpg)  
Figure 4.3 The Normal distribution.

Before considering how we make use of the Normal distribution there are some general points to note about continuous probability distributions. First, they usually have no upper limit and some have no lower limit either. In theory the Normal distribution extends from minus infinity  $(- \infty)$  to plus infinity  $(+\infty)$ . Second, the height of the frequency curve, which is called the probability density, cannot be taken as the probability of a particular value. This is because for a continuous variable there are infinitely many possible values so that the probability of any specific value is zero. The height of a curve is not of any practical use; its value is determined by the fact that the total area under the curve is always taken to be 1. As with histograms of observed data, we use a probability distribution by considering the area corresponding to a particular restricted range of values. Because the total area is 1 this area corresponds to the probability of those values. To take a simple example, the area to the left

of the mean of the Normal distribution is 0.5 (because of the symmetry) and this is the probability of being below the mean.


### 4.5.1 Using the Normal distribution

The mathematical equation of the Normal distribution is unpleasantly complicated, but we do not need to deal with it in order to use the Normal distribution, because the necessary information is readily available in tables. However, it is important to know that the Normal distribution is completely described by two parameters, the mean and the standard deviation. These are usually called  $\mu$  (mu) and  $\sigma$  (sigma) respectively. Figure 4.4(a) shows the Normal distribution in relation to these parameters. Whatever values the mean and standard deviation have, the Normal distribution is related to the mean and standard deviation in the manner shown in Figure 4.4(a). This feature is illustrated by Figures 4.4(b) and 4.4(c), which show Normal distributions with firstly mean 10 and standard deviation 2 and secondly mean 125 and standard deviation 8. Figure 4.5 shows the histogram of serum albumin shown in Figure 4.1 and the Normal distribution with the same mean and standard deviation. The two are clearly very similar.

As Figure 4.4(a) shows, any position along the horizontal axis can be expressed as a distance of a number of standard deviations (negative or positive) from the mean. This distance is known as a standard Normal deviate or Normal score. It is equivalent to looking at a Normal distribution with a mean of 0 and a standard deviation of 1, a special Normal distribution known as the standard Normal distribution. Any Normal distribution can be converted (or transformed) into a standard Normal distribution by subtracting the mean and dividing by the standard deviation.

One way that we use the Normal distribution is as follows. When a set of observations has a distribution that is similar to a Normal distribution we assume that in the population the distribution of the variable actually is Normal, and carry out calculations on this basis. For example, we can calculate the probability that a patient with primary biliary cirrhosis has a serum albumin level greater than  $42.0 \mathrm{g} / \mathrm{l}$  if we are willing to assume that, among the population of all patients with primary biliary cirrhosis, serum albumin has a Normal distribution.

Table B1 in Appendix B shows the lower tail areas of the standard Normal distribution. The lower tail means the area under the curve from  $- \infty$  up to the value of interest. This area is equivalent to the probability of a value lower than the specified value. This idea can also be expressed as the cumulative relative frequency distribution, which is shown in Figure 4.6. Table B1 is simply a more accurate version of the curve in Figure 4.6.

The area below  $- 1$  is 0.16 and the area below  $+1$  is 0.84, so that the

![](../images/04_Theoretical_distributions/img4.jpg)

![](../images/04_Theoretical_distributions/img5.jpg)

![](../images/04_Theoretical_distributions/img6.jpg)

![](../images/04_Theoretical_distributions/img7.jpg)  
Figure 4.5 Histogram of 216 serum albumin values and the Normal distribution with the same mean and standard deviation.

![](../images/04_Theoretical_distributions/img8.jpg)  
Figure 4.6 Cumulative Normal distribution fitted to serum albumin data.

area corresponding to the range  $- 1$  to  $+1$  is  $0.84 - 0.16 = 0.68$ . In other words, for data with an exactly Normal distribution there is a probability of 0.68 of being within one standard deviation of the mean. Repeating these calculations for other numbers of standard deviations we get

<table><tr><td>Range</td><td>Probability of being within range</td><td>outside range</td></tr><tr><td>mean ±1SD</td><td>0.683</td><td>0.317</td></tr><tr><td>mean ±2SD</td><td>0.954</td><td>0.046</td></tr><tr><td>mean ±3SD</td><td>0.9973</td><td>0.0027</td></tr></table>

These values can also be obtained from Table B2. In each case the probability of not being within the stated range is 1 minus the probability of being within the range. We can see that there is a minimal chance - - 0.0027 or  $0.27\%$ , or about 1 in 400 - that a value from a Normal distribution will be more than three standard deviations above or below the mean, agreeing with the visual impression gained from Figure 4.4. Of course, in very large samples we would expect several values to be this extreme.

The probability of being within two standard deviations of the mean is just over 0.95. In other words, about  $95\%$  of observations from a Normal distribution will be within the range mean  $- 2\mathrm{SD}$  to mean  $+2\mathrm{SD}$ , which agrees with the more general statement in the previous chapter. As we will see later, exactly  $95\%$  of the area under the Normal distribution curve actually falls in the slightly narrower range of mean  $\pm 1.96\mathrm{SD}$ .


### 4.5.2 An example

Returning to the serum albumin data, we can calculate the probability of a value being above 42.0 on the assumption that the true distribution is Normal. The mean serum albumin level was  $34.46\mathrm{g / l}$  and the standard deviation was  $5.84\mathrm{g / l}$ . We first calculate how many standard deviations from the mean the value of  $42\mathrm{g / l}$  is, which is given by

$$
\frac{42 - 34.46}{5.84} = 1.29.
$$

From Table B1 we find that the probability of being greater than 1.29 is 0.0985, so the probability of a value above  $42\mathrm{g / l}$  is  $10\%$ .

From Table B3 we can find the values which enclose a given percentage of the distribution - the central range. For example,  $90\%$  of the distribution lies within the range mean  $\pm 1.645\mathrm{SD}$ ,  $95\%$  within mean  $\pm 1.96\mathrm{SD}$ , and

$99\%$  within mean  $\pm 2.576\mathrm{SD}$ . For the serum albumin data we get the following ranges:

<table><tr><td>Central range</td><td>Serum albumin (g/l)</td></tr><tr><td>90%</td><td>24.85 to 44.07</td></tr><tr><td>95%</td><td>23.01 to 45.91</td></tr><tr><td>99%</td><td>19.39 to 49.53</td></tr></table>

We can thus use the Normal distribution to estimate the centiles of the distribution of the variable in the population. We could have calculated the observed centiles of the sample data and used these values as estimates of the population centiles, but when the data are near to Normal the use of the Normal distribution is more reliable, especially in the tails of the distribution. It is also easier, requiring just two values and a table of the Normal distribution rather than the complete set of raw data values. Figure 4.5 showed that the distribution of the 216 serum albumin values was very similar to the Normal distribution with the same mean and standard deviation. We can use the procedure just described to calculate from the Normal distribution the number of values expected in each interval of the histogram. For example, the number expected in the interval 26.0 to  $28.0 \mathrm{g / l}$  is the probability of being in that interval multiplied by 216. The standard Normal deviates for 26.0 and 28.0 are

$$
\begin{array}{c}\frac{26.0 - 34.46}{5.84} = -1.45 \\ \frac{28.0 - 34.46}{5.84} = -1.11 \end{array}
$$

From Table B1 we get lower tail areas of 0.0735 and 0.1335, giving a probability of  $0.1335 - 0.0735 = 0.0600$  of being between 26.0 and 28.0. The expected number of observations in this interval is thus  $216 \times 0.0600 = 13.0$ . Table 4.1 shows the results of similar (but more precise) calculations for the whole range of values, giving observed frequencies and the frequencies expected if the population distribution of serum albumin was a Normal distribution with the same mean  $(34.46 \mathrm{g / l})$  and standard deviation  $(5.84 \mathrm{g / l})$ . Note that expected numbers are usually quoted as fractions even though the observed frequencies must be whole numbers.

I observed in section 4.4 that the widely- used parametric methods of statistical analysis incorporate important assumptions about the distribution of data. In most cases the distribution involved is the Normal distribution. which is one of the reasons why it is the most important distribution in

Table 4.1 Distribution of serum albumin in 216 patients with primary biliary cirrhosis together with expected frequencies based on a Normal distribution with the same mean and standard deviation  

<table><tr><td>Serum albumin (g/l)</td><td>Observed frequency</td><td>Expected frequency</td></tr><tr><td>&amp;lt; 20</td><td>0</td><td>1.4</td></tr><tr><td>20-</td><td>2</td><td>2.1</td></tr><tr><td>22-</td><td>6</td><td>4.4</td></tr><tr><td>24-</td><td>7</td><td>8.0</td></tr><tr><td>26-</td><td>9</td><td>13.1</td></tr><tr><td>28-</td><td>21</td><td>19.1</td></tr><tr><td>30-</td><td>20</td><td>24.7</td></tr><tr><td>32-</td><td>28</td><td>28.5</td></tr><tr><td>34-</td><td>39</td><td>29.2</td></tr><tr><td>36-</td><td>28</td><td>26.7</td></tr><tr><td>38-</td><td>22</td><td>21.8</td></tr><tr><td>40-</td><td>12</td><td>15.8</td></tr><tr><td>42-</td><td>11</td><td>10.2</td></tr><tr><td>44-</td><td>4</td><td>5.9</td></tr><tr><td>46-</td><td>3</td><td>3.0</td></tr><tr><td>48-</td><td>1</td><td>1.4</td></tr><tr><td>50-</td><td>1</td><td>0.6</td></tr><tr><td>52-</td><td>1</td><td>0.2</td></tr><tr><td>54-</td><td>0</td><td>0.1</td></tr><tr><td>56-</td><td>1</td><td>0.0</td></tr><tr><td>Total</td><td>216</td><td>216.2</td></tr></table>

statistics. Although many measurements do have a reasonably Normal distribution, such as human height, many do not, such as human weight or serum cholesterol. There are various ways in which data may deviate from Normality, notably by being asymmetric or skewed. The IgM data shown in Figure 3.3 illustrated positive skewness. It should not be assumed that a set of observations is approximately Normal - this must be established. One common type of skewed distribution closely related to the Normal distribution is the Lognormal distribution, which is discussed in the next section.


### 4.5.3 Sampling variation

Figure 4.5 showed a visual comparison of a set of observations of serum albumin and the Normal distribution having the same mean and standard deviation. The question of whether data are close enough to a Normal

distribution is important, and will be considered at various points in the following chapters.

Although formal methods can be used (described in Chapter 7), whether a set of observations are reasonably Normal is often a matter of judge­ ment, usually by visual inspection of a histogram. It is instructive to look at distributions obtained by taking random samples from a Normal distribu­ tion to give a reference against which to judge a set of observed data. Figure 4.7 shows frequency histograms of 16 samples of 50 observations sampled at random from the standard Normal distribution. Each sample is equivalent to considering 50 individuals sampled from a population known to have a Normal distribution for the variable of interest. There is considerable irregularity in the distributions of these samples, with the key properties of unimodality and symmetry generally absent. This figure should be borne in mind when considering whether observed data might have come from a Normal distribution, especially when the sample size is small.

![](../images/04_Theoretical_distributions/img9.jpg)  
Figure 4.7 Distributions of 16 samples of size 50 from the Normal distribution.


## 4.6 THE LOGNORMAL DISTRIBUTION

In section 3.4 we saw that in some circumstances a set of data with a positively skewed distribution can be transformed into a symmetric distribution by taking logarithms. Taking logs of data with a skewed distribution will often give a distribution that is near to Normal. Figure 4.8 shows a histogram of serum bilirubin levels in the same 216 patients with primary

![](../images/04_Theoretical_distributions/img10.jpg)  
Figure 4.8 Histogram of serum bilirubin values in 216 patients with primary biliary cirrhosis with fitted Normal distribution (from the study by Christensen et al., 1985).

biliary cirrhosis (PBC). The mean and standard deviation are 60.7 and  $77.9 \mu \mathrm{mol} / \mathrm{l}$  respectively. The superimposed best- fitting Normal distribution (with the same mean and standard deviation) is a terrible fit to the data because of the extreme skewness. If we take logs (to base e) of the data we get a much more symmetric distribution with a mean of 3.55 and a standard deviation of  $1.03 \log \mu \mathrm{mol} / \mathrm{l}$ . Figure 4.9 shows a histogram of  $\log_{e}$  serum bilirubin with the fitted Normal distribution, which is a much better fit. Figure 4.10 shows the raw data with the 'back- transformation' of the fitted Normal distribution function. The fitted curve is an example of the Lognormal distribution function. Data with a Lognormal distribution can be transformed to Normality by taking logarithms.

With skewed data like the serum bilirubin measurements log transformation will often produce approximate Normality. We can then perform our calculations on the log data and transform the answers back to the original scale. For example, we may wish to use our data to estimate the values enclosing  $95\%$  of serum bilirubin levels for all patients with PBC. Assuming a Lognormal distribution, we can make our calculations from the Normal distribution with mean 3.547 and standard deviation 1.030 (these being more accurate values than those shown above). In log units,  $95\%$  of the distribution will be expected to be between mean  $- 1.96 \mathrm{SD}$  and mean  $+1.96 \mathrm{SD}$ . These values are

$$
3.547 + (1.96 \times 1.030) = 5.566.
$$

![](../images/04_Theoretical_distributions/img11.jpg)  
Figure 4.9 Histogram of log serum bilirubin with fitted Normal distribution (logarithms to base e).

![](../images/04_Theoretical_distributions/img12.jpg)  
Figure 4.10 Histogram of serum bilirubin with fitted Lognormal distribution.

The antilogs of these values (using the function  $\mathbf{e}^{x}$ ) are  $\mathbf{e}^{1.528} = 4.61$  and  $\mathbf{e}^{5.566} = 261.4 \mu \mathrm{mol} / \mathrm{l}$ . The antilog of the mean of the log data is  $\mathbf{e}^{3.547} = 34.7 \mu \mathrm{mol} / \mathrm{l}$ , which is the geometric mean of the data. All of these values are depicted in a box- and- whisker diagram in Figure 4.11.

It should not be assumed that data with a skewed distribution can be transformed to approximate Normality. This must be established, perhaps visually as in Figure 4.9 or formally using the methods described in section 7.5.

![](../images/04_Theoretical_distributions/img13.jpg)  
Figure 4.11 Box-and-whisker diagram of serum bilirubin showing  $95\%$  central range derived from fitting a Normal distribution to log data.


## 4.7 THE BINOMIAL DISTRIBUTION

The simplest probability distribution for discrete data is when there are only two possibilities. The probability of being in blood group B is about 0.08 so the probability of being group O, A or AB is 0.92. For a group of unrelated people, we can work out the probability of different numbers of people being in blood group B. The probability of two people both being in blood group B is thus  $0.08 \times 0.08 = 0.0064$ , and the probability of neither being in blood group B is  $0.92 \times 0.92 = 0.8464$ . We multiply the probabilities because the blood groups of two unrelated people are independent. The probability of only one of the two being in blood group B is more complicated, because there are two ways in which this could happen. Thus the probability of exactly one of two people being in blood group B  $= 2 \times 0.08 \times 0.92 = 2 \times 0.0736 = 0.1472$ .

We can summarize the possibilities as follows:

64 Theoretical distributions

![](../images/04_Theoretical_distributions/img14.jpg)  
Figure 4.12 shows the probability distribution of the number of people out of two in blood group B. This distribution is a simple example of the Binomial distribution. To get the three probabilities shown we had to make three simple calculations. However, if we extend this simple calculation to consider the number of people out of four it is not so easy. Each person is either group B or not group B so there are  $2 \times 2 \times 2 \times 2$  possible orderings, which is 16. The number of possible orderings for  $n$  people is  $2^{n}$ , so if we have seven people for example, there are 128 possible orderings.

Fortunately, we can bypass most of the calculations by using a general formula. As it is rather complicated, the details are given in section 4.9. Using the formula one can calculate the probability of different numbers of outcomes of a particular type in a series of events from the probability of one such outcome. For example, Figure 4.13 shows the probability

![](../images/04_Theoretical_distributions/img15.jpg)  
Figure 4.12 Binomial distribution of number of people out of two in blood group B.

distribution for the number of individuals out of 10 being of blood group B. (The calculations are shown in section 4.9. ) The distribution is asymmetric, but as the sample size increases the Binomial distribution becomes

![](../images/04_Theoretical_distributions/img16.jpg)  
Figure 4.13 Binomial distribution showing the number of subjects out of ten in blood group B based on the probability of being in blood group B of 0.08.

![](../images/04_Theoretical_distributions/img17.jpg)  
Figure 4.14 Binomial distribution showing the number of subjects out of 100 in blood group B based on the probability of being in blood group B of 0.08.

more symmetric and gradually begins to look like a Normal distribution. Figure 4.14 shows that the Binomial distribution for the number of people in blood group B in a sample of 100 is almost symmetric.

The Binomial distribution is sometimes used to compare an observed set of data with the expected distribution. Its main use, however, is in the analysis of data where there are only two possibilities, such as whether or not someone suffers from asthma. Here we are interested in the proportion of subjects with asthma. Data of this type occur frequently in medical research, and we often wish to compare the proportion of events of a certain type occurring in different groups of subjects. The sample sizes in the groups are often large enough for the Binomial distribution to be very like a Normal distribution with the same mean and standard deviation, which simplifies analysis (see Chapter 10).


## 4.8 THE POISSON DISTRIBUTION

A different type of discrete data arises when we count the number of occurrences of an event, perhaps for different subjects or for units of time. Examples of data like this are the daily number of new cases of breast cancer notified to a cancer registry, and the number of abnormal cells in a fixed area of histological slides from a series of liver biopsies.

The theoretical situation giving rise to data of this type is easiest to describe in relation to events occurring over time (or space) at a fixed rate on average, but where each event occurs independently and at random. Such data will have a Poisson distribution. For example, the daily number of new registrations of cancer may be 2.2 on average, but on any day there may be no new cases or there may be several. If we assume that the conditions for a Poisson distribution hold, we can calculate the probability of any number of new cases on a single day. These probabilities are shown in Figure 4.15 (and the calculations are shown in section 4.9).

The Poisson distribution is very asymmetric when its mean is small, as here, but with a large mean, such as 50, it becomes nearly symmetric. In fact, like the Binomial distribution, it becomes more like a Normal distribution. Note that the Poisson distribution has no theoretical maximum value, but the probabilities tail off towards zero very quickly.

Table 4.2 shows some data that might be expected to follow a Poisson distribution. The table gives the number of crimes per day in three small areas of India from 1978 to 1982, on days where there was either a full moon or a new moon. Also shown are the expected number of days with different numbers of crimes, based on Poisson distributions with the same means as the observed data. The similarity between the observed and expected frequencies is clear, especially for the new moon days, demonstrating that these data are close to a Poisson distribution.

The Poisson distribution is completely described by a single parameter.

![](../images/04_Theoretical_distributions/img18.jpg)  
Figure 4.15 Poisson distribution with mean 2.2.

Table 4.2 Number of crimes per day in three areas of India during 1978 to 1982 (Thakur and Sharma, 1984) showing observed frequencies (Obs) and expected frequencies using the Poisson distribution (Exp)  

<table><tr><td rowspan="2">Number of crimes</td><td colspan="2">Full moon days</td><td colspan="2">New moon days</td></tr><tr><td>Obs</td><td>Exp</td><td>Obs</td><td>Exp</td></tr><tr><td>0</td><td>40</td><td>45.2</td><td>114</td><td>112.8</td></tr><tr><td>1</td><td>64</td><td>63.1</td><td>56</td><td>56.4</td></tr><tr><td>2</td><td>56</td><td>44.3</td><td>11</td><td>14.1</td></tr><tr><td>3</td><td>19</td><td>20.7</td><td>4</td><td>2.4</td></tr><tr><td>4</td><td>1</td><td>7.1</td><td>1</td><td>0.3</td></tr><tr><td>5</td><td>2</td><td>2.0</td><td>0</td><td>0.0</td></tr><tr><td>6</td><td>0</td><td>0.5</td><td>0</td><td>0.0</td></tr><tr><td>7</td><td>0</td><td>0.1</td><td>0</td><td>0.0</td></tr><tr><td>8</td><td>0</td><td>0.0</td><td>0</td><td>0.0</td></tr><tr><td>9</td><td>1</td><td>0.0</td><td>0</td><td>0.0</td></tr><tr><td>Total</td><td>183</td><td>183.0</td><td>186</td><td>186.0</td></tr><tr><td>Mean</td><td></td><td>1.40</td><td></td><td>0.50</td></tr><tr><td>SD</td><td></td><td>1.16</td><td></td><td>0.75</td></tr></table>

the mean, as is shown in section 4.9, because the variance of the Poisson distribution turns out to be the same as the mean. It follows that data from different sources will have very similar distributions if they can both be

Table 4.3 Comparison of distributions of crimes on new moon days (Thakur and Sharma, 1984) and number of deaths per day in a Montreal hospital in 1971 (Zweig and Csank, 1978)  

<table><tr><td rowspan="2">n</td><td colspan="2">Crimes on new moon days in India</td><td colspan="2">Deaths per day in a hospital in Montreal</td><td>Expected distribution Poisson (0.51)</td></tr><tr><td>%</td><td>Frequency</td><td>%</td><td>Frequency</td><td>%</td></tr><tr><td>0</td><td>61.3</td><td>114</td><td>60.3</td><td>220</td><td>60.0</td></tr><tr><td>1</td><td>30.1</td><td>56</td><td>31.0</td><td>113</td><td>30.6</td></tr><tr><td>2</td><td>5.9</td><td>11</td><td>6.3</td><td>23</td><td>7.8</td></tr><tr><td>3</td><td>2.2</td><td>4</td><td>2.2</td><td>8</td><td>1.3</td></tr><tr><td>4+</td><td>0.5</td><td>1</td><td>0.3</td><td>1</td><td>0.2</td></tr><tr><td>Total</td><td>100.0</td><td>186</td><td>100.0</td><td>365</td><td>99.9%</td></tr><tr><td>Mean</td><td></td><td>0.505</td><td></td><td>0.512</td><td></td></tr><tr><td>SD</td><td></td><td>0.752</td><td></td><td>0.736</td><td></td></tr></table>

considered to be close to Poisson and have the same mean. Table 4.3 shows that the relative frequency distribution of the number of crimes on new moon days in India is virtually identical to the distribution of the number of deaths per day in a hospital in Montreal. Both observed sets of data are very close to a Poisson distribution with a mean of 0.51.

The Poisson distribution is appropriate for studying rare events. We can consider the problem as being the same as that of the Binomial distribution where the probability of the outcome of interest is very small but there are a large number of events. The Poisson distribution is not used greatly in medical research although, like the Binomial distribution, it is used implicitly in some other types of statistical analysis.


## 4.9 MATHEMATICAL CALCULATIONS

(This section gives the mathematical calculations relating to the sections on the Binomial and Poisson distributions. It can be omitted without loss of continuity.)


### 4.9.1 Binomial distribution

To take an example, suppose we wish to calculate the probability of different numbers of individuals out of ten being blood group B, for which  $p = 0.08$ . The probability of, say, a particular 4 of the 10 people being blood group B is  $p^{4}(1 - p)^{6}$ , so that the probability of any 4 being blood group B is this probability multiplied by the number of ways of choosing 4 people from 10.

In general, suppose we have  $n$  'events' and wish to calculate the probability of 0, 1, 2, up to  $n$  of them being a specific type, where  $p$  is the overall probability of this type of outcome. Then the Binomial probability of  $r$  such events is given by

$$
{\binom{n}{r}}p^{r}(1-p)^{n-r}
$$

where  $\binom{n}{r}$  is the number of ways of choosing  $r$  items from  $n$ , and is a number we have to calculate.

We can evaluate  $\binom{n}{r}$  simply by using the following relations:

$$
\begin{array}{l}{{\binom{n}{0}=1;}}\\ {{\binom{n}{r}=\binom{n}{r-1}\times(n-r+1)/r;}}\end{array}
$$

and

(iii)  $\binom{n}{n- r}=\binom{n}{r}$ .

So we have

$$
\begin{align*}
\binom{10}{0} &= 1 \\
\binom{10}{1} &= \binom{10}{0} \times \frac{10}{1} = 10 = \binom{10}{9} \\
\binom{10}{2} &= \binom{10}{1} \times \frac{9}{2} = 45 = \binom{10}{8} \\
\binom{10}{3} &= \binom{10}{2} \times \frac{8}{3} = 120 = \binom{10}{7} \\
\binom{10}{4} &= \binom{10}{3} \times \frac{7}{4} = 210 = \binom{10}{6} \\
\binom{10}{5} &= \binom{10}{4} \times \frac{6}{5} = 252
\end{align*}
$$


The probability that 4 of the 10 people are blood group B is thus

$$
210(0.08)^{4}(0.92)^{6} = 0.00522
$$

or  $0.5\%$ . Figure 4.13 shows the complete distribution.

The general formula for the coefficients  $\binom{n}{r}$  is

70 Theoretical distributions

$$
{\binom{n}{r}}={\frac{n!}{r!(n-r)!}}
$$

where  $n!$  (pronounced n factorial) is equal to  $1\times 2\times 3\times \ldots \times n$  (see Appendix A). Note that  $0! = 1$  (see Appendix A). The coefficients  $\binom{n}{r}$  can be obtained from tables of  $\log{\binom{n}{r}}$  (Lentner, 1982, pp. 74- 81), or calculated in the way described above.

If the true proportion of events of interest is  $p$ , then in a sample of size  $n$  the mean of the Binomial distribution is  $np$  and the standard deviation is  $\sqrt{np(1 - p)}$ .


### 4.9.2 Poisson distribution

The general Poisson formula for the probability of  $k$  events is  $\mathrm{e}^{- \mu} \mu^{k} / k!$  where  $\mu$  (the greek letter mu) is the mean and  $\mathrm{e}$  is a mathematical constant approximately equal to 2.718 (see Appendix A). The standard deviation is  $\sqrt{\mu}$ .

If the conditions for a Poisson distribution hold, the probability of getting no new cases on a day is

$$
P(0) = \mathrm{e}^{-\mu}.
$$

The Poisson distribution that will fit the data best has the same mean as that of the observations: 2.2. So here  $P(0)$  is  $\mathrm{e}^{- 2.2} = 0.111$ . Rather than use the complicated formula above we can calculate  $P(1)$ ,  $P(2)$ , etc. from the relation  $P(i) = mP(i - 1) / i$ , where  $m$  is the sample mean. So we have

$$
\begin{array}{r l} & {P(1) = 2.2\times 0.111 / 1 = 0.244}\\ & {P(2) = 2.2\times 0.244 / 2 = 0.258}\\ & {P(3) = 2.2\times 0.268 / 3 = 0.197}\\ & {P(4) = 2.2\times 0.197 / 4 = 0.108}\\ & {P(5) = 2.2\times 0.108 / 5 = 0.048}\\ & {P(6) = 2.2\times 0.048 / 6 = 0.017}\\ & {P(7) = 2.2\times 0.017 / 7 = 0.005}\\ & {P(8) = 2.2\times 0.005 / 8 = 0.002} \end{array}
$$

and so on. The distribution is shown in Figure 4.15.

Note that this is a good example of the need to keep full numerical precision through a series of calculations, because any error caused by

rounding would affect all subsequent calculations. The figures shown above have, however, been rounded to clarify the presentation.


## 4.10 THE UNIFORM DISTRIBUTION

A different problem is that of determining whether there is a seasonal variation in the onset of a disease. If there is no seasonal variation we would expect little variation in the number of new cases each month. For example, if a diabetes clinic in a district general hospital registers 126 new cases in a year, and if there were no seasonality for the onset of diabetes, then we would expect to have one- twelfth of 126 or 10.5 new cases in every month. (We could make a slight correction for the variation in the number of days in a month.) In practice natural variability will lead to some variation in the monthly accrual of new cases, but this will be unsystematic if there is no seasonality, whereas there will be some systematic trend if there is seasonality. The theoretical Uniform distribution, which has the same relative frequency for each month, is used for examining such data. Statistical analysis of periodic variation is discussed in section 14.7.


## 4.11 CONCLUDING REMARKS

Theoretical distributions feature in some way in a large proportion of statistical analysis. The Normal distribution is by far the most important of those discussed. Apart from the assumptions of many analyses that the data follow a Normal distribution, there is also a central role for the Normal distribution in many methods of statistical inference, as described in Chapter 8.

There are many other probability distributions not discussed in this chapter. Most of these are of specialized use and will not appear in this book, but three are important in statistical analyses described in later chapters: the  $t$  distribution, the  $F$  distribution and the Chi squared distribution.


## EXERCISES

4.1 Assuming that the height of adult males has a Normal distribution, what proportion of males will be more than two standard deviations above the mean height?

4.2 The probability of being blood group B is 0.08. What is the probability that if one pint of blood is taken from each of 100 unrelated blood donors fewer than three pints of group B blood will be obtained?

4.3 The probability of a baby being a boy is 0.52. For six women delivering consecutively in the same labour ward on one day, which of the following exact sequences of boys and girls is most likely and which least likely?

**GBGBGB BBBGGG GBBBBB**

4.4 The Binomial distribution with  $p = 0.15$  and  $n = 10$  is as follows:

<table><tr><td>r</td><td>Probability</td><td>r</td><td>Probability</td></tr><tr><td>0</td><td>0.1969</td><td>6</td><td>0.0012</td></tr><tr><td>1</td><td>0.3474</td><td>7</td><td>0.0001</td></tr><tr><td>2</td><td>0.2759</td><td>8</td><td>0.0000</td></tr><tr><td>3</td><td>0.1298</td><td>9</td><td>0.0000</td></tr><tr><td>4</td><td>0.0401</td><td>10</td><td>0.0000</td></tr><tr><td>5</td><td>0.0085</td><td></td><td></td></tr></table>

(a) If  $15\%$  of all pregnancies result in miscarriages, what is the probability that more than half of a group of ten pregnant women will have a miscarriage?

(b) Among groups of users of video display terminals there are 20000 large enough for ten women to become pregnant in one year. If we call six or more miscarriages out of 10 a 'cluster', how many clusters would we expect in one year, assuming that there is no increased risk of miscarriage associated with using a terminal? (Based on Blackwell and Chang, 1988)

4.5 If an infection is present in a school it would be expected to spread to  $10\%$  of the children

(a) How many children should be tested to have a probability of 0.95  $(95\%)$  of detecting the infection if it is there? (Hint: consider the probability of all the children in the sample being negative to the test if the infection is present in the school.)

(b) What is the effect of the number of children in the school on this calculation?

4.6 Over a 25 year period the mean height of adult males increased from  $175.8 \mathrm{cm}$  to  $179.1 \mathrm{cm}$ , but the standard deviation stayed at  $5.84 \mathrm{cm}$ . The minimum height requirement for men to join the police force is  $172 \mathrm{cm}$ . What proportion of men would be too short to become policemen at the beginning and end of the 25 year period, assuming that the height of adult males has a Normal distribution?

4.7 A researcher plans to measure blood pressure in a number of subjects. He proposes to take three measurements, but intends to discard the

third measurement as unreliable if it does not fall between the first two measurements. Assuming that the subjects' blood pressure stays constant during the measuring, what is the probability that for a given subject the third value will not lie between the other two? (Hint: the answer does not depend upon the variability of blood pressure measurements.) Comment on the researcher's proposal.

4.8 In Britain the commonest autosomal recessive disorder is cystic fibrosis, with about one in 2000 live births being affected. If both parents are heterozygous for the abnormal gene there is a 1 in 4 chance of their child having cystic fibrosis.

(a) What is the probability that a couple who are both heterozygous will have two unaffected children?

(b) If they have four unaffected children, what is the probability that their fifth child would be unaffected?

(c) About one in 22 people is heterozygous for cystic fibrosis. In a hospital where there are 3500 births a year, what is the expected number of babies per year affected by cystic fibrosis (assuming that there is no genetic counselling)?
