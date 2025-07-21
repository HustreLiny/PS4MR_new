# 12 Relation between several variables

Exploration of the data set is admirable, but the investigator should know that he is exploring and searching, not reviewing a confirmatory experiment.

Lachenbruch (1977)


## 12.1 INTRODUCTION

Chapters 9, 10 and 11 cover the basic statistical methods used to analyse the large majority of medical data sets. Few research reports do not make use of some of those techniques, and most will not go further. Most studies, however, obtain data on many variables, which are either analysed by a series of simple analyses or by rather more complicated statistical methods. In general it is preferable to use the more advanced methods where these are appropriate, rather than looking separately at several small parts of the data set.

This chapter builds on the methods of Chapters 9 to 11, by extending the ideas in those chapters to more complex data sets. Chapter 13 continues the process, but is devoted to the analysis of survival data, which poses several special problems even in simple comparisons.


## 12.2 ANALYSIS OF VARIANCE AND MULTIPLE REGRESSION

Chapter 9 introduced a variety of methods for comparing two or more groups with respect to a single continuous variable. In section 12.3 I shall show how these methods can be extended to consider data sets with two or more classifying variables, methods given the general name analysis of variance whether parametric or non- parametric. If there are two classifying variables the analysis is known as two way analysis of variance, and so on. These methods require the same number of observations in each 'cell' of the cross- classification, a condition often, but not always, met in experimental studies but rarely, if ever, true for observational studies. For

example, if we wish to compare birth weights of boys and girls with different lengths of gestation we cannot control the numbers of babies in each age- sex group, so we cannot use analysis of variance.

The way round this problem is, perhaps surprisingly, related to the technique of linear regression described in Chapter 11. I showed there how to describe the relation between two variables, or, more specifically, how the value of one variable can be predicted from the value of the other. This method too can be extended, to allow us to predict the value of a variable from the values of several other variables. In other words, we have a single dependent (outcome) variable and two or more explanatory (predictor) variables. The method is called multiple regression. The explanatory variables can be either continuous or binary (0- 1) or categorical. Multiple regression can thus be used to regress birth weight on sex and gestational age. It can be shown that all analysis of variance problems can also be analysed in the framework of multiple regression (see section 12.4), but for balanced data sets (usually from experiments) it is more common to keep to the analysis of variance approach.

The above discussion relates to the case where the outcome variable is continuous. In section 12.5 I shall show how a similar approach can be taken for a binary outcome variable, using multiple logistic regression. and in Chapter 13 the same general ideas will be used for the analysis of survival data.


## 12.3 TWO WAY ANALYSIS OF VARIANCE

In Chapter 9 I considered several problems involving the same measure­ ment taken on independent groups of individuals. Often more than one measurement is taken from each person, perhaps under different experi­ mental conditions, and we require a method that may be seen as a generalization of the paired t test. Data of this type can be dealt with by the method known as two way analysis of variance, which is used to analyse data which can be displayed within a cross- classification of two categorical variables, called 'factors'.

The general structure of such data sets is shown in Table 12.1 when each  $\mathbf{\hat{x}}^{\prime}$  indicates an observation. In this structure, we may have one or more observations for each combination of levels of the two factors A and B. I shall only consider the case where the number of observations in each cell is the same. I shall assume, therefore, that there are no missing observations.

This section deals with two types of study that fall into this framework The first is where two or more observations of the same variable are taken from the same individuals under different circumstances, for example where each patient receives more than one treatment. Here factor B in the diagram  represents  different  subjects.  There  may  be  more  than  on

Table 12.1 General structure of a two way cross-classification. Each  $\mathbf{x}$  represents a single observation, and x...x represents a series of observations  

<table><tr><td rowspan="2">Factor B</td><td colspan="6">Factor A</td></tr><tr><td>1</td><td>2</td><td>3</td><td></td><td></td><td>c</td></tr><tr><td>1</td><td>x...x</td><td>x...x</td><td>x...x</td><td>.</td><td>.</td><td>x...x</td></tr><tr><td>2</td><td>x...x</td><td>x...x</td><td>x...x</td><td>.</td><td>.</td><td>x...x</td></tr><tr><td>3</td><td>x...x</td><td>x...x</td><td>x...x</td><td>.</td><td>.</td><td>x...x</td></tr><tr><td></td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></tr><tr><td></td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></tr><tr><td>r</td><td>x...x</td><td>x...x</td><td>x...x</td><td>.</td><td>.</td><td>x...x</td></tr></table>

observation per subject on each treatment.

The second case is where there are two factors specifying the nature of the measurements, and each combination is given to one or more patients. For example we may have observations on blood pressure after two or more different treatments for males and females separately. Here factors A and B represent treatment and sex, and there are several different subjects for each combination. I shall consider one example of each in detail, and then discuss other designs.


### 12.3.1 Repeated observation

Table 12.2 shows the heart rate of nine patients with congestive heart

Table 12.2 Short-term effect of enalaprilat on heart rate (beats per minute) (Maskin et al., 1985)  

<table><tr><td rowspan="2">Subject</td><td colspan="6">Time (mins)</td></tr><tr><td>0</td><td>30</td><td>60</td><td>120</td><td>Mean</td><td>(SD)</td></tr><tr><td>1</td><td>96</td><td>92</td><td>86</td><td>92</td><td>91.50</td><td>(4.1)</td></tr><tr><td>2</td><td>110</td><td>106</td><td>108</td><td>114</td><td>109.50</td><td>(3.4)</td></tr><tr><td>3</td><td>89</td><td>86</td><td>85</td><td>83</td><td>85.75</td><td>(2.5)</td></tr><tr><td>4</td><td>95</td><td>78</td><td>78</td><td>83</td><td>83.50</td><td>(8.0)</td></tr><tr><td>5</td><td>128</td><td>124</td><td>118</td><td>118</td><td>122.00</td><td>(4.9)</td></tr><tr><td>6</td><td>100</td><td>98</td><td>100</td><td>94</td><td>98.00</td><td>(2.8)</td></tr><tr><td>7</td><td>72</td><td>68</td><td>67</td><td>71</td><td>69.50</td><td>(2.4)</td></tr><tr><td>8</td><td>79</td><td>75</td><td>74</td><td>74</td><td>75.50</td><td>(2.4)</td></tr><tr><td>9</td><td>100</td><td>106</td><td>104</td><td>102</td><td>103.00</td><td>(2.6)</td></tr><tr><td rowspan="2">Mean 
(SD)</td><td>96.56</td><td>92.56</td><td>91.11</td><td>92.33</td><td>93.14</td><td></td></tr><tr><td>(16.4)</td><td>(17.8)</td><td>(17.2)</td><td>(16.5)</td><td>(16.4)</td><td></td></tr></table>

failure before and shortly after administration of enalaprilat, an angiotensin- converting enzyme inhibitor. Measurements were taken before and at 30, 60 and 120 minutes after drug administration. This design appears similar to that analysed by one way analysis of variance in section 9.8, but here the measurements at the different times are on the same subjects. Thus this design should more appropriately be seen as a natural extension of the paired  $t$  test. The strength of this design is that comparisons between the sets of observations are based on within subject differences. Variation between subjects, which is usually considerable (see Table 12.2), does not affect our ability to distinguish differences between the sets of observations, which here relate to four time points.

In section 9.8 I showed how in one way analysis of variance the total variability is separated into between group and within group components. A similar approach is adopted in two way analysis of variance, but naturally it is a bit more complicated. In the present example, for the heart rate data shown in Table 12.2, we can divide the total variability into components due to variation between times and between subjects, and there is some remaining variation which we refer to as residual variation. This term carries the same meaning as in regression analysis, described in Chapter 11.

Table 12.3 shows the analysis of variance table for the heart rate data. The  $\pmb{F}$  values for testing the between subjects and between times variances (mean squares) are each obtained by dividing by the residual variance. The former is compared with the  $\pmb{F}$  distribution with 8 and 24 degrees of freedom, and the latter with that with 3 and 24 degrees of freedom. The between subject variation has an extremely small  $\mathbf{P}$  value, as is often the case with medical data. The null hypothesis that all subjects have the same heart rate is firmly rejected, but this is of no real interest. The purpose of this study was to investigate variation in heart rate over the two hours after administration of enalaprilat, which is examined by considering the 'between times' row of Table 12.3. The  $\mathbf{P}$  value of 0.018 indicates that we can reasonably reject the null hypothesis that there is no change in heart rate over the two hours. Table 12.2 shows the means for each time point.

Table 12.3 Analysis of variance of data in Table 12.2  

<table><tr><td>Source of variation</td><td>df</td><td>Sums of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Subjects</td><td>8</td><td>8966.556</td><td>1120.819</td><td>90.6</td><td>&amp;lt; 0.0001</td></tr><tr><td>Times</td><td>3</td><td>150.972</td><td>50.324</td><td>4.07</td><td>0.018</td></tr><tr><td>Residual</td><td>24</td><td>296.778</td><td>12.366</td><td></td><td></td></tr><tr><td>Total</td><td>35</td><td>9414.306</td><td></td><td></td><td></td></tr></table>

indicating that heart rate fell by an average four beats per minute (bpm) after 30 minutes, and remained fairly stable over the next 90 minutes. The average pattern is not obvious from examination of the raw data in the table.

Specific hypotheses relating to the time trend can be examined using the same approach as in one way analysis of variance. We could, for example, compare each pair of times, with a Bonferroni correction to allow for multiple testing, or look for a linear trend over time. We can also construct confidence intervals for the mean at any time or the difference between means. For all of these analyses it is essential that we use the correct variance, after the between subject variation has been removed, which is the residual variance.

The residual variance is 12.366 so the residual standard deviation is  $\sqrt{12.366} = 4.516$  bpm. By fitting the model implicit in the analysis of variance we have assumed that the true response pattern of heart rate over time is the same for each subject, and (equivalently) that the differences between subjects are the same at each time. Any departures from this model indicate random variation, for example that resulting from measurement error. The mean of all the observations was 93.14 bpm, and we can express the means for each column and row as differences from the overall mean. The value predicted in each cell is then obtained by adding the relevant row and column means, and subtracting the overall mean, as

Table 12.4 Predicted heart rate based on the two way analysis of variance model  

<table><tr><td rowspan="2">Subject</td><td colspan="5">Time (mins)</td><td rowspan="2">Difference from overall mean</td></tr><tr><td>0</td><td>30</td><td>60</td><td>120</td><td>Mean</td></tr><tr><td>1</td><td>94.92</td><td>90.92</td><td>89.47</td><td>90.69</td><td>91.50</td><td>-1.64</td></tr><tr><td>2</td><td>112.92</td><td>108.92</td><td>107.47</td><td>108.69</td><td>109.50</td><td>+16.36</td></tr><tr><td>3</td><td>89.17</td><td>85.17</td><td>83.72</td><td>84.94</td><td>85.75</td><td>-7.39</td></tr><tr><td>4</td><td>86.92</td><td>82.92</td><td>81.47</td><td>82.69</td><td>83.50</td><td>-9.64</td></tr><tr><td>5</td><td>125.42</td><td>121.42</td><td>119.97</td><td>121.19</td><td>122.00</td><td>+28.86</td></tr><tr><td>6</td><td>101.42</td><td>97.42</td><td>95.97</td><td>97.19</td><td>98.00</td><td>+4.86</td></tr><tr><td>7</td><td>72.92</td><td>68.92</td><td>67.47</td><td>68.69</td><td>69.50</td><td>-23.64</td></tr><tr><td>8</td><td>78.92</td><td>74.92</td><td>73.47</td><td>74.69</td><td>75.50</td><td>-17.64</td></tr><tr><td>9</td><td>106.42</td><td>102.42</td><td>100.97</td><td>102.19</td><td>103.00</td><td>+9.86</td></tr><tr><td>Mean</td><td>96.56</td><td>92.56</td><td>91.11</td><td>92.33</td><td>93.14</td><td></td></tr><tr><td>Difference from overall mean</td><td>3.42</td><td>-0.58</td><td>-2.03</td><td>-0.81</td><td></td><td></td></tr></table>

Table 12.5 Residuals from the analysis of variance, calculated as the difference between the entries in Tables 12.2 and 12.4  

<table><tr><td rowspan="2">Subject</td><td colspan="5">Time (mins)</td></tr><tr><td>0</td><td>30</td><td>60</td><td>120</td><td>Mean</td></tr><tr><td>1</td><td>1.08</td><td>1.08</td><td>-3.47</td><td>1.31</td><td>0.00</td></tr><tr><td>2</td><td>-2.92</td><td>-2.92</td><td>0.53</td><td>5.31</td><td>0.00</td></tr><tr><td>3</td><td>-0.17</td><td>0.83</td><td>1.28</td><td>-1.94</td><td>0.00</td></tr><tr><td>4</td><td>8.08</td><td>-4.92</td><td>-3.47</td><td>0.31</td><td>0.00</td></tr><tr><td>5</td><td>2.58</td><td>2.58</td><td>-1.97</td><td>-3.19</td><td>0.00</td></tr><tr><td>6</td><td>-1.42</td><td>0.58</td><td>4.03</td><td>-3.19</td><td>0.00</td></tr><tr><td>7</td><td>-0.92</td><td>-0.92</td><td>-0.47</td><td>2.31</td><td>0.00</td></tr><tr><td>8</td><td>0.08</td><td>0.08</td><td>0.53</td><td>-0.69</td><td>0.00</td></tr><tr><td>9</td><td>-6.42</td><td>3.58</td><td>3.03</td><td>-0.19</td><td>0.00</td></tr><tr><td>Mean</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr></table>

shown in Table 12.4. Table 12.5 shows the differences between the observed data and the values fitted by the model, called residuals. These show the lack of fit of the model, and the variance of the residuals is the residual variance shown in the analysis of variance in Table 12.3. As already noted, these residuals correspond exactly to residuals from the equivalent regression analysis. The residual variance is an estimate of the variance of multiple measurements on a single patient at the same time (even though only one such measurement was made).


### 12.3.2 Assumptions

There is no requirement for the data to be Normally distributed, neither overall nor within a row or column. The residuals, however, are expected to have a Normal distribution, an assumption that can be examined by a Normal plot as in Figure 12.1. The  $W^{\prime}$  test for the heart rate residua. gives  $W^{\prime} = 0.977$  with  $\mathbf{P} = 0.5$  , and so we can be happy that our model s reasonable in this respect.

Even if the distribution of residuals is reasonably Normal it does not necessarily follow that the model is appropriate. Inspection of Table 12.5 shows some large values for subjects 4 and 9 and we might wish to consider the possibility that the response over time is not the same for all individuals. We cannot examine this possibility with these data, because there is only one observation per person at each time. If we had two or more observations for each person- time combination we would carry out a more comprehensive analysis. Specifically, we could examine the possible existence of a significant interaction between the two factors subject and time. An example of this more complex analysis is described below. If the

![](../images/12_Relation_between_several_variables/img1.jpg)  
Figure 12.1 Normal plot of residuals from analysis of variance of the data in Table 12.2.

distributional assumption of the analysis of variance is not met, we can perform a non- parametric analysis, as described in section 12.3.5.

A criticism of the heart rate data used to illustrate two way analysis of variance is that the observations relate to a sequence of repeated measurements in one experiment. Such data are not strictly appropriate for the analysis described. Some programs can perform a 'repeated measures' analysis of variance that is more correct for this type of data. Another way of looking at serial observations is described in section 14.6.


### 12.3.3 Replicated data

Analysis of variance can also be used to study measurement variability. Table 12.6 shows part of a large set of data from a study investigating the reproducibility of ultrasonic fetal head circumference data. Four observers each took three measurements on the same three fetuses. The observers were kept unaware of their previous measurements, in contrast to usual clinical practice. The structural difference between this data set and the heart rate data is the availability of three replicate readings per fetus. These enable us to investigate the possibility of an interaction between observers and fetuses; in other words, we can see if the differences between observers vary from fetus to fetus more than we expect just from chance variation. Interaction is more important when we investigate one or two factors of direct interest, such as treatment and dose. With this data

Table 12.6 Measurements of fetal head circumference (cm) by four observers  

<table><tr><td></td><td>Observer 1</td><td>Observer 2</td><td>Observer 3</td><td>Observer 4</td></tr><tr><td rowspan="3">Fetus 1</td><td>14.3</td><td>13.6</td><td>13.9</td><td>13.8</td></tr><tr><td>14.0</td><td>13.6</td><td>13.7</td><td>14.7</td></tr><tr><td>14.8</td><td>13.8</td><td>13.8</td><td>13.9</td></tr><tr><td rowspan="3">Fetus 2</td><td>19.7</td><td>19.8</td><td>19.5</td><td>19.8</td></tr><tr><td>19.9</td><td>19.3</td><td>19.8</td><td>19.6</td></tr><tr><td>19.8</td><td>19.8</td><td>19.5</td><td>19.8</td></tr><tr><td rowspan="3">Fetus 3</td><td>13.0</td><td>12.4</td><td>12.8</td><td>13.0</td></tr><tr><td>12.6</td><td>12.8</td><td>12.7</td><td>12.9</td></tr><tr><td>12.9</td><td>12.5</td><td>12.5</td><td>13.8</td></tr></table>

set we are not especially interested in these particular fetuses or observers, but wish to estimate the reproducibility of the measurements.

Table 12.7 shows the analysis of variance table for the head circumference data. Again the  $F$  values for testing each effect are obtained by dividing the mean squares by the residual mean square. The interaction between subjects and observers is not nearly significant  $(\mathbf{P} = 0.33)$ . If the interaction is not significant it is best to remove it from the model by pooling its sum of squares with the residual variation to give the simplified analysis shown in Table 12.8. In general, if the interaction is significant the main effects (here 'fetuses' and 'observers') do not have a simple interpretation because the effect of each depends upon the level of the other factor.

Using the residual variance from Table 12.8 we can calculate the residual standard deviation as  $\sqrt{0.080} = 0.283 \mathrm{cm}$ . Thus replicated measurements

Table 12.7 Results of two way analysis of variance of the head circumference data in Table 12.6  

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sums of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Fetuses</td><td>2</td><td>324.009</td><td>162.004</td><td>2113</td><td>&amp;lt; 0.001</td></tr><tr><td>Observers</td><td>3</td><td>1.199</td><td>0.400</td><td>5.21</td><td>0.006</td></tr><tr><td>Fetuses × Observers (Interaction)</td><td>6</td><td>0.562</td><td>0.094</td><td>1.22</td><td>0.33</td></tr><tr><td>Residual</td><td>24</td><td>1.840</td><td>0.077</td><td></td><td></td></tr><tr><td>Total</td><td>35</td><td>327.610</td><td></td><td></td><td></td></tr></table>

Table 12.8 Analysis of variance of the head circumference data omitting the interaction  

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sums of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Fetuses</td><td>2</td><td>324.009</td><td>162.004</td><td>2023</td><td>&amp;lt; 0.001</td></tr><tr><td>Observers</td><td>3</td><td>1.199</td><td>0.400</td><td>4.99</td><td>0.006</td></tr><tr><td>Residual</td><td>30</td><td>2.402</td><td>0.080</td><td></td><td></td></tr><tr><td>Total</td><td>35</td><td>327.610</td><td></td><td></td><td></td></tr></table>

of the same fetus by the same observer have an estimated standard deviation of only  $0.283\mathrm{cm}$  , which shows that measurement error is small. Notice that this most interesting aspect of the analysis is an estimation problem - the hypothesis tests are not really of interest.

The evaluation of  $F$  values in the analysis of variance differs according to whether the classifying variables are interesting in their own right or whether they are representative of a wider population. The analysis described assumes that we are interested in these particular fetuses and observers, which is probably untrue in this case. However, the analysis described corresponds exactly to multiple regression, and is more widely used.


### 12.3.4 Extensions

Some of the ideas of multi- way analysis of variance have been introduced by means of two simple data sets. As noted, both have features that make them slightly inappropriate for the methods used. The requirements are very strict, and are not often met perfectly by medical research data. An example of a more complex data set was given in section 5.4, where I described a study to investigate the possible difference in blood pressure between the left and right arms. Each subject had 16 measurements made, two for each combination of arm (left or right), observer and cuff. Thus the data were analysed by a four way analysis of variance.

For three way designs and above the same principles are involved. However, further problems may arise which are beyond the scope of this book, especially when the variables are not fully cross- classified. For example, if we measure a group of subjects' metabolic rates before and after each of two types of diet, we could analyse the data by a three way analysis of variance (with factors time, diet and subject). But if the two diets were given to different groups of subjects, as in a clinical trial, we cannot use that analysis, nor can we use a two way analysis. (We could, however, perform a one way analysis of variance - or a two sample  $t$  test - -

on the changes in metabolic rate in the two groups.) Some of the issues arising in more complex designs are discussed by Armitage and Berry (1987, Chapter 8). As with many of the more advanced methods introduced in this chapter, the advice of a statistician would be valuable.

More often, data from a multiple classification arise in an unstructured way, in which case we can analyse the data by multiple regression. described in section 12.4.


### 12.3.5 Non-parametric two way analysis of variance

The assumption that the residuals have a Normal distribution cannot be assessed before fitting the model. Sometimes, however, it can be seen from the raw data that the model will not fit well. In particular, wide variation in the standard deviations for each row or column will suggest problems with the parametric analysis of variance just described.

There is a non- parametric form of two way analysis of variance that can be used for data sets which do not fulfil the assumptions of the parametric method. The method, which is sometimes known as Friedman's two way analysis of variance, is purely a hypothesis test.

Table 12.9 shows some data from an experiment to compare the leakage from four different types of immersion suit during simulated underwater helicopter escapes. The wide variability of the SDs for the four suits suggests that a rank analysis would be advisable.

The values for the four suits are ranked for each subject as shown in Table 12.10. There are no ties in this data set, but if there are any ties we calculate average ranks in the usual way.

Table 12.9 Immersion suit leakage (g) during simulated helicopter underwater escape (Light et al., 1987)  

<table><tr><td rowspan="2">Subject</td><td rowspan="2">A</td><td colspan="3">Suit type</td></tr><tr><td>B</td><td>C</td><td>D</td></tr><tr><td>1</td><td>308</td><td>132</td><td>454</td><td>64</td></tr><tr><td>2</td><td>102</td><td>526</td><td>0</td><td>28</td></tr><tr><td>3</td><td>182</td><td>134</td><td>96</td><td>30</td></tr><tr><td>4</td><td>268</td><td>324</td><td>264</td><td>90</td></tr><tr><td>5</td><td>166</td><td>228</td><td>134</td><td>34</td></tr><tr><td>6</td><td>332</td><td>296</td><td>458</td><td>6</td></tr><tr><td>7</td><td>198</td><td>350</td><td>200</td><td>90</td></tr><tr><td>8</td><td>28</td><td>274</td><td>16</td><td>24</td></tr><tr><td>Mean</td><td>198</td><td>283</td><td>203</td><td>45.7</td></tr><tr><td>SD</td><td>103</td><td>127</td><td>179</td><td>31.6</td></tr></table>

Table 12.10 Ranks of the data in Table 12.9  

<table><tr><td rowspan="2">Subject</td><td rowspan="2">A</td><td rowspan="2">B</td><td colspan="3">Suit type</td></tr><tr><td>C</td><td>D</td><td></td></tr><tr><td>1</td><td>3</td><td>2</td><td>4</td><td>1</td><td></td></tr><tr><td>2</td><td>3</td><td>4</td><td>1</td><td>2</td><td></td></tr><tr><td>3</td><td>4</td><td>3</td><td>2</td><td>1</td><td></td></tr><tr><td>4</td><td>3</td><td>4</td><td>2</td><td>1</td><td></td></tr><tr><td>5</td><td>3</td><td>4</td><td>2</td><td>1</td><td></td></tr><tr><td>6</td><td>3</td><td>2</td><td>4</td><td>1</td><td></td></tr><tr><td>7</td><td>2</td><td>4</td><td>3</td><td>1</td><td></td></tr><tr><td>8</td><td>3</td><td>4</td><td>1</td><td>2</td><td></td></tr><tr><td>Total (R)</td><td>24</td><td>27</td><td>19</td><td>10</td><td></td></tr><tr><td>Mean rank</td><td>3.00</td><td>3.38</td><td>2.38</td><td>1.25</td><td></td></tr></table>

The analysis proceeds in a similar way to the Kruskal- Wallis non- parametric one way analysis of variance (described in section 9.8.6). If  $R_{i}$  is the sum of the ranks in the ith group, and we have  $k$  groups (here types of suit) and  $n$  subjects, then we calculate the statistic  $H$  defined by

$$
H = \frac{12}{n k(k + 1)}\sum_{i = 1}^{k}[R_{i} - n(k + 1) / 2]^{2}.
$$

The quantity  $n(k + 1) / 2$  is the expected value for  $R_{i}$  if the null hypothesis is true and all groups are the same. The test is thus based on the variation of the observed sums of ranks around the expected values, a common form of hypothesis test. Under the null hypothesis  $H$  has a  $x^{2}$  distribution with  $k - 1$  degrees of freedom. Again there is a simpler version of the formula for calculating  $H$ , which is

$$
H = \frac{12}{n k(k + 1)}\sum_{i = 1}^{k}R_{i}^{2} - 3n(k + 1).
$$

This method is not suitable for data where there is more than one observation in each cell of the two way table. It assumes that there are no ties in the data for each group, but will be little affected by a few ties.

Table 12.10 shows the sums of the ranks for each type of diving suit. We calculate  $H$  as:

$$
H = \frac{12}{8\times4\times5} [24^{2} + 27^{2} + 19^{2} + 10^{2}] - 3\times 8\times 5 = 12.45.
$$

Using Table B5 for the Chi squared distribution with three degrees of freedom we find  $\mathrm{P}< 0.01$ . (The exact value is 0.006. )

As with all comparisons of more than two groups, an overall significant  $\mathrm{P}$  value does not indicate where the differences lie, although in this case

inspection of the data shows clearly that suit D is far less leaky. Pairs of groups can be compared by Wilcoxon matched pair tests, making due allowance for multiple testing. Note, however, that the Friedman analysis with two groups is equivalent to an extension of the sign test rather than the Wilcoxon test.


## 12.4 MULTIPLE REGRESSION

None of the methods of statistical analysis discussed in previous chapters allows us to look at more than one or two variables at a time. Frequently, however, data are collected on many variables. In the previous section I showed how analysis of variance can be extended to situations where we have one measurement recorded for combinations of several categorical variables (factors). Analysis of variance can be used only for structured data sets, which arise from designed experiments. In observational studies we are often interested in the way one variable is influenced by several variables, but the data are unstructured. This section introduces the technique of multiple linear regression, which we use to analyse that type of data. We often refer to the method as multiple regression.

Chapter 11 dealt mainly with simple linear regression, the method we use to describe the linear relation between two continuous variables. As I noted in section 12.2, regression methods can be extended to the case where we wish to predict the value of one variable from values of two or more other variables. Multiple regression analysis yields a regression model in which the dependent (or outcome) variable is expressed as a combination of the explanatory variables (sometimes called predictor variables or covariates). As we will see, it is not necessary for the explanatory variables to be continuous.

For example, suppose we wish to predict an index of respiratory muscle strength PEmax (in cm  $\mathbf{H}_{2}\mathbf{O}$  ) from height (in cm) and weight (in kg). We would obtain a regression model like the following:

$$
\mathrm{PEmax} = 47.35 + 0.147\times \mathrm{height} + 1.024\times \mathrm{weight}.
$$

The numbers 0.147 and 1.024 are called the regression coefficients for height and weight. They indicate the predicted increase in PEmax for each unit increase in the explanatory variable, here  $1\mathbf{cm}$  and  $1\mathbf{kg}$  respectively. The value of 47.35 is the constant, corresponding to PEmax when weight and height are both zero. Like the intercept in linear regression, it is not usually of great interest.

From the analysis we also obtain standard errors for each regression coefficient, from which we can calculate the statistical significance of a variable and a confidence interval for the regression coefficient. As with analysis of variance and linear regression, the residual variance provides a measure of how well the model fits the data.

There are several situations in which we may wish to perform a multiple regression analysis:

1. we may wish to remove the possible effects of other 'nuisance' variables from a study of the relation between just two variables;

2. we may be exploring possible prognostic variables with little or no prior information of which variables are important;

3. we may wish to develop a prognostic index from several explanatory variables for predicting the dependent variable of interest.

In practice it is not always easy to distinguish these possibilities and one analysis may incorporate all three ideas. The method of analysis is the same in each case.

An example of the first of the above possibilities is given by a study of the effect of parental birth weight on infant birth weight. Langhoff- Roos et al. (1987) analysed data for 276 Swedish infants with birth weights exceeding  $2500 \mathrm{g}$  born at 37- 41 weeks of gestation. An initial multiple regression analysis considered just three 'fetal factors' - maternal birth weight, paternal birth weight and fetal sex. The regression coefficients for maternal and paternal birth weights were  $0.214 \mathrm{g}$  (SE  $0.062 \mathrm{g}$ ) and  $0.122 \mathrm{g}$  (SE  $0.049 \mathrm{g}$ ) respectively, both highly statistically significant. They then carried out an analysis incorporating maternal pre- pregnancy weight and height, number of previous children, weight gain during pregnancy and maternal smoking, all of which are known to be associated with birth weight. This larger analysis assessed whether the observed association between infant birth weight and parents' birth weight could be 'explained' by some subtle inter- relationships between parental birth weights and the additional variables. For example, it might be that mothers who had had low birth weights are more likely to smoke.

The regression coefficients for maternal and paternal birth weights in the larger analysis were  $0.187 \mathrm{g}$  (SE  $0.062 \mathrm{g}$ ) and  $0.157 \mathrm{g}$  (SE  $0.047 \mathrm{g}$ ) respectively. Both are still highly significant and the magnitudes of the coefficients are little changed. We can conclude that the relation between parental and infant birth weights cannot be explained by variation in the other variables, and thus can infer that the association is a real one. Given the nature of the data we may reasonably also infer that the association is causal. However, the association is weak, as we shall see below. As with simple linear regression, the regression coefficients are interpreted as the estimated increase in the outcome variable for an increase of one unit in the predictor variable. In this example it is helpful to multiply by 100, so that the regression coefficients are interpreted as indicating an increase of  $19 \mathrm{g}$  and  $16 \mathrm{g}$  in infant birth weight for every extra  $100 \mathrm{g}$  of maternal and paternal birth weight respectively. Notice that to interpret the coefficients we need to know the units of measurement.

Multiple regression is relatively straightforward when we know which

variables we wish to have in the model. Difficulties occur when we wish to identify from a large number of variables those which are related to the dependent variable, and also assess how well the model obtained fits the data. We are thus trying to carry out exploratory and confirmation analyses on the same data. Problems arise particularly from the way in which multiple significance testing is used.

Multiple regression analysis will be illustrated using data from a study of 25 patients with cystic fibrosis (O'Neill et al., 1983), some of which were

Table 12.11 Data for 25 patients with cystic fibrosis (O'Neill et al., 1983)  

<table><tr><td>Sub</td><td>Age</td><td>Sex</td><td>Height</td><td>Weight</td><td>BMP</td><td>FEV1</td><td>RV</td><td>FRC</td><td>TLC</td><td>PEmax</td></tr><tr><td>1</td><td>7</td><td>0</td><td>109</td><td>13.1</td><td>68</td><td>32</td><td>258</td><td>183</td><td>137</td><td>95</td></tr><tr><td>2</td><td>7</td><td>1</td><td>112</td><td>12.9</td><td>65</td><td>19</td><td>449</td><td>245</td><td>134</td><td>85</td></tr><tr><td>3</td><td>8</td><td>0</td><td>124</td><td>14.1</td><td>64</td><td>22</td><td>441</td><td>268</td><td>147</td><td>100</td></tr><tr><td>4</td><td>8</td><td>1</td><td>125</td><td>16.2</td><td>67</td><td>41</td><td>234</td><td>146</td><td>124</td><td>85</td></tr><tr><td>5</td><td>8</td><td>0</td><td>127</td><td>21.5</td><td>93</td><td>52</td><td>202</td><td>131</td><td>104</td><td>95</td></tr><tr><td>6</td><td>9</td><td>0</td><td>130</td><td>17.5</td><td>68</td><td>44</td><td>308</td><td>155</td><td>118</td><td>80</td></tr><tr><td>7</td><td>11</td><td>1</td><td>139</td><td>30.7</td><td>89</td><td>28</td><td>305</td><td>179</td><td>119</td><td>65</td></tr><tr><td>8</td><td>12</td><td>1</td><td>150</td><td>28.4</td><td>69</td><td>18</td><td>369</td><td>198</td><td>103</td><td>110</td></tr><tr><td>9</td><td>12</td><td>0</td><td>146</td><td>25.1</td><td>67</td><td>24</td><td>312</td><td>194</td><td>128</td><td>70</td></tr><tr><td>10</td><td>13</td><td>1</td><td>155</td><td>31.5</td><td>68</td><td>23</td><td>413</td><td>225</td><td>136</td><td>95</td></tr><tr><td>11</td><td>13</td><td>0</td><td>156</td><td>39.9</td><td>89</td><td>39</td><td>206</td><td>142</td><td>95</td><td>110</td></tr><tr><td>12</td><td>14</td><td>1</td><td>153</td><td>42.1</td><td>90</td><td>26</td><td>253</td><td>191</td><td>121</td><td>90</td></tr><tr><td>13</td><td>14</td><td>0</td><td>160</td><td>45.6</td><td>93</td><td>45</td><td>174</td><td>139</td><td>108</td><td>100</td></tr><tr><td>14</td><td>15</td><td>1</td><td>158</td><td>51.2</td><td>93</td><td>45</td><td>158</td><td>124</td><td>90</td><td>80</td></tr><tr><td>15</td><td>16</td><td>1</td><td>160</td><td>35.9</td><td>66</td><td>31</td><td>302</td><td>133</td><td>101</td><td>134</td></tr><tr><td>16</td><td>17</td><td>1</td><td>153</td><td>34.8</td><td>70</td><td>29</td><td>204</td><td>118</td><td>120</td><td>134</td></tr><tr><td>17</td><td>17</td><td>0</td><td>174</td><td>44.7</td><td>70</td><td>49</td><td>187</td><td>104</td><td>103</td><td>165</td></tr><tr><td>18</td><td>17</td><td>1</td><td>176</td><td>60.1</td><td>92</td><td>29</td><td>188</td><td>129</td><td>130</td><td>120</td></tr><tr><td>19</td><td>17</td><td>0</td><td>171</td><td>42.6</td><td>69</td><td>38</td><td>172</td><td>130</td><td>103</td><td>130</td></tr><tr><td>20</td><td>19</td><td>1</td><td>156</td><td>37.2</td><td>72</td><td>21</td><td>216</td><td>119</td><td>81</td><td>85</td></tr><tr><td>21</td><td>19</td><td>0</td><td>174</td><td>54.6</td><td>86</td><td>37</td><td>184</td><td>118</td><td>101</td><td>85</td></tr><tr><td>22</td><td>20</td><td>0</td><td>178</td><td>64.0</td><td>86</td><td>34</td><td>225</td><td>148</td><td>135</td><td>160</td></tr><tr><td>23</td><td>23</td><td>0</td><td>180</td><td>73.8</td><td>97</td><td>57</td><td>171</td><td>108</td><td>98</td><td>165</td></tr><tr><td>24</td><td>23</td><td>0</td><td>175</td><td>51.1</td><td>71</td><td>33</td><td>224</td><td>131</td><td>113</td><td>95</td></tr><tr><td>25</td><td>23</td><td>0</td><td>179</td><td>71.5</td><td>95</td><td>52</td><td>225</td><td>127</td><td>101</td><td>195</td></tr></table>

Sub Subject number

Sex 0 = male, 1 = female

BMP Body mass (Weight/Height) as a percentage of the age- specific median n normal individuals

FEV Forced expiratory volume in 1 second

RV Residual volume

FRC Functional residual capacity

TLC Total lung capacity

PEmax Maximal static expiratory pressure (cm H:O)

shown in Table 3.1. Table 12.11 shows the dependent variable, PEmax, which is a measure of malnutrition in these patients, and various possible explanatory variables, several of which relate to body size or lung function.


### 12.4.1 Categorical variables

If we include in the regression model a binary variable having values 0 or 1 for each individual, for example indicating non- smokers and smokers, the regression coefficient indicates the average difference in the dependent variable between the groups defined by the binary variable, adjusted for any differences between the groups with respect to the other variables in the model. This is because the difference between the codes for the groups is one. If the model contains two explanatory variables, one of which is continuous and the other binary, then we can think of the analysis as fitting two parallel lines representing simple linear regression of the dependent variable on the continuous independent variable for each of the two groups. This analysis is known as analysis of covariance; it was also discussed briefly in section 11.12.1.

We can also deal with categorical variables that have more than two categories. For example, if we have a variable for marital status coded 1 for married, 2 for single, and 3 for divorced, widowed or separated, then if we were to put this variable in an analysis as it stands we would be imposing the unreasonable assumption that the relation was linear with the codes 1, 2 and 3. We can get round this by creating two new binary variables (often called dummy variables), for example defined as:

1. 1 if single, 0 otherwise; 2. 1 if divorced, widowed or separated, 0 otherwise.

For a married person both of these variables will be zero. If the variable (1) is significant then the dependent variable is significantly different between those who are married or single, and similarly for (2). In general we need  $k - 1$  dummy variables for  $k$  categories. It is often best to fit all or none of the dummy variables to get an overall assessment of whether that categorical variable is associated with the dependent variable, but it is sometimes reasonable to consider dummy variables as separate entities.

If the categories are ordered, then we must as usual take note of this in the analysis. The above approach does not meet this requirement, but it may be reasonable to use the variable as it stands, with the codes given. For example, we may have a variable coded 1 to 4 representing progressive stages of disease. This is the same as investigating a linear trend, as was described for one way analysis of variance and the Chi squared test for trend (see section 11.15). We can also use this approach as an alternative way of dealing with continuous variables, especially when the relation with the dependent variable is clearly non- linear. We could, for example, create

a new variable with codes from 1 to 5 indicating different age groups. The number of cigarettes smoked per day is often treated in this way.


### 12.4.2 Different approaches to choosing a model

Sometimes we know in advance which variables we wish to include in a multiple regression model. Here it is straightforward to fit a regression model containing all of those variables. The study of parental birth weight was of this type. Variables that are not significant can be omitted and the analysis redone. There is no hard rule about this, however. Sometimes it is desirable to keep a variable in a model because past experience shows that it is important. In large samples the omission of non- significant variables will have little effect on the other regression coefficients. The strategy will also depend upon the purpose of the analysis. If the aim is to identify important predictor variables then it makes sense to omit variables that do not contribute much to the model, which are usually taken to be those for which the  $\mathbf{P}$  value exceeds 0.05. I discuss these issues further in section 12.4.10.

The statistical significance of each variable in the multiple regression model is obtained simply by calculating the ratio of the regression coefficient to its standard error and relating this value to the  $t$  distribution with  $n - k - 1$  degrees of freedom, where  $n$  is the sample size and  $k$  is the number of variables in the model. The  $t$  statistic, which is calculated as  $b / s e(b)$ , where  $b$  is the regression coefficient, is equal to the square root of the  $F$  statistic for the extra variability explained by the present model in comparison with the model excluding that particular variable. The latter approach must be used to assess the combined effect of a set of dummy variables representing a categorical variable.

In medical research it is more common to be faced with several contenders from which we wish to obtain the model which is, in some sense, best. By 'best' we refer to the ability of the model to predict the dependent variable or, equivalently, to explain variation in that variable. There are several ways of trying to find the best model, none of which can be taken as clearly better than the rest. Some subjective assessment may be necessary, especially when different approaches yield different answers. This chapter is intended as an introduction, so that the following exposition should not be taken as a comprehensive discussion of the many issues. Interpretation of multiple regression models will be discussed after the various strategies have been introduced.


### 12.4.3 Forward stepwise regression

The first step in many analyses of multivariate data is to examine the simple relation between each potential explanatory variable and the

Table 12.12 Results of separately regressing PEmax on each explanatory variable  

<table><tr><td>Explanatory variable</td><td>Regression coefficient</td><td>Standard error</td><td>t</td><td>P</td></tr><tr><td>Age</td><td>4.055</td><td>1.088</td><td>3.73</td><td>0.0011</td></tr><tr><td>Sex</td><td>-19.045</td><td>13.176</td><td>-1.45</td><td>0.16</td></tr><tr><td>Height</td><td>0.932</td><td>0.260</td><td>3.59</td><td>0.0016</td></tr><tr><td>Weight</td><td>1.187</td><td>0.301</td><td>3.94</td><td>0.0006</td></tr><tr><td>BMP</td><td>0.639</td><td>0.565</td><td>1.13</td><td>0.27</td></tr><tr><td>FEV1</td><td>1.354</td><td>0.555</td><td>2.44</td><td>0.023</td></tr><tr><td>RV</td><td>-0.123</td><td>0.077</td><td>-1.59</td><td>0.12</td></tr><tr><td>FRC</td><td>-0.319</td><td>0.145</td><td>-2.20</td><td>0.038</td></tr><tr><td>TLC</td><td>-0.358</td><td>0.404</td><td>-0.89</td><td>0.38</td></tr></table>

outcome variable of interest ignoring all the other variables. In other words, we carry out linear regression analyses on each variable in turn. Table 12.12 summarizes these analyses for the data in Table 12.11. Five of the nine variables are significantly associated with PEmax  $(\mathbf{P}< 0.05)$

Forward stepwise regression analysis uses this analysis as its starting point. The method can be broken down into a few simple steps:

(a) Find the single variable that has the strongest association with the dependent variable and enter it into the model

The variable with strongest association is that with the most significant slope (i.e. that with the smallest  $\mathbf{P}$  value). This is equivalent to finding the variable that is most highly correlated with the dependent variable.

(b) Find the variable among those not in the model that, when added to the model so far obtained, explains the largest amount of the remaining variability

The method for carrying out this step is given below. It is equivalent to finding the variable with the largest correlation (ignoring sign) with the residuals from the model so far.

(c) Repeat step 
(b) until the addition of an extra variable is not statistically significant at some chosen level such as  $P = 0.05$

We need to stop the process at some point otherwise we will end up with all the variables in the model. As well as having an unusable model, we will have 'overfitted' the data, in a sense described in section 12.4.6. Unfortunately, the cut- off of  $\mathbf{P} = 0.05$  (or any other) is arbitrary and not directly related to how well the model fits the data.

We will see how the stepwise procedure works by finding a model to

predict PEmax using the data in Table 12.11. Note first that for the purposes of the first step we do not need to perform nine separate regression analyses (Table 12.12), but can get the same information from looking at the correlation matrix shown in Table 12.13. It is useful to look at the correlation matrix anyway, because it also shows the correlations among the explanatory variables. For this data set, there are many large correlation coefficients: from Table B7  $r = 0.505$  corresponds to  $\mathbf{P} = 0.01$ . Figure 12.2 shows a graphical representation of the correlation matrix, with each small panel showing the relevant scatter diagram. We can see that there are no obvious outliers in the data, but the distribution of body mass

Table 12.13 Correlation matrix for PEmax and nine potential explanatory variables  

<table><tr><td></td><td>PEmax</td><td>Age</td><td>Sex</td><td>Height</td><td>Weight</td><td>BMP</td><td>FEV1</td><td>RV</td><td>FRC</td></tr><tr><td>Age</td><td>0.613</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Sex</td><td>-0.289</td><td>-0.167</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Height</td><td>0.599</td><td>0.926</td><td>-0.168</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Weight</td><td>0.635</td><td>0.906</td><td>-0.190</td><td>0.921</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>BMP</td><td>0.230</td><td>0.378</td><td>-0.138</td><td>0.441</td><td>0.673</td><td></td><td></td><td></td><td></td></tr><tr><td>FEV1</td><td>0.453</td><td>0.294</td><td>-0.528</td><td>0.317</td><td>0.449</td><td>0.546</td><td></td><td></td><td></td></tr><tr><td>RV</td><td>-0.316</td><td>-0.552</td><td>0.271</td><td>-0.570</td><td>-0.622</td><td>-0.582</td><td>-0.666</td><td></td><td></td></tr><tr><td>FRC</td><td>-0.417</td><td>-0.639</td><td>0.184</td><td>-0.624</td><td>-0.617</td><td>-0.434</td><td>-0.665</td><td>0.911</td><td></td></tr><tr><td>TLC</td><td>-0.182</td><td>-0.469</td><td>0.024</td><td>-0.457</td><td>-0.418</td><td>-0.365</td><td>-0.443</td><td>0.589</td><td>0.704</td></tr><tr><td></td><td>PEmax</td><td>Age</td><td>Sex</td><td>Height</td><td>Weight</td><td>BMP</td><td>FEV1</td><td>RV</td><td>FRC</td></tr></table>

![](../images/12_Relation_between_several_variables/img2.jpg)  
Figure 12.2 Scatter diagrams corresponding to Table 12.13.

percentage (BMP) is rather odd. Tables 12.12 and 12.13 both show that the most predictive single variable is weight. Table 12.14 shows the analysis of variance table for this linear regression analysis.

The best variable to include with weight turns out to be BMP. The regression model is shown in Table 12.15, in the usual style of presenting a multiple regression model, together with the analysis of variance table. The  $t$  test for each variable indicates whether omitting that variable would lead to a significant loss of information. It is equivalent to this square root of the  $F$  value associated with the improvement in how well the model fits the data compared with the model without that variable. Thus the  $t$  test for BMP in the top half of Table 12.15 is exactly equivalent to the  $F$  test

Table 12.14 Regression analysis of PEmax on weight  

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sum of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Regression on weight</td><td>1</td><td>10 827.16</td><td>10 827.16</td><td>15.56</td><td>0.0006</td></tr><tr><td>Residual</td><td>23</td><td>16 005.48</td><td>695.89</td><td></td><td></td></tr><tr><td>Total</td><td>24</td><td>26 832.64</td><td></td><td></td><td></td></tr></table>

Residual  $\mathrm{SD} = \sqrt{695.89} = 26.38$

Table 12.15 Regression analysis of PEmax on weight and BMP  

<table><tr><td>Variable</td><td>Coefficient b</td><td>Standard error se(b)</td><td>t</td><td>P</td></tr><tr><td>Constant</td><td>124.830</td><td>37.479</td><td></td><td></td></tr><tr><td>Weight</td><td>1.640</td><td>0.390</td><td>4.21</td><td>0.0004</td></tr><tr><td>BMP</td><td>-1.005</td><td>0.581</td><td>-1.73</td><td>0.10</td></tr></table>

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sum of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Regression on weight</td><td>1</td><td>10 827.16</td><td>10 827.16</td><td>15.56</td><td>0.0006</td></tr><tr><td>Addition of BMP</td><td>1</td><td>1 914.94</td><td>1 914.94</td><td>2.99</td><td>0.10</td></tr><tr><td>Residual</td><td>22</td><td>14 090.54</td><td>640.48</td><td></td><td></td></tr><tr><td>Total</td><td>24</td><td>26 832.64</td><td></td><td></td><td></td></tr></table>

Residual  $\mathrm{SD} = \sqrt{640.48} = 25.31$

in the lower part. We can see that the additional effect of BMP over that achieved by including only weight in the model is not statistically significant at the  $5\%$  level, but is significant at the  $10\%$  level. If, as is usual, the  $5\%$  or  $1\%$  level is used, we would conclude that the 'best' model is that including just weight. If we were using a  $10\%$  level for including variables, we would add BMP to the model and continue the analysis. The choice of significance level is discussed below.

Forward stepwise regression is available as an option in some of the larger statistical packages. It can be carried out using any program for multiple regression, most simply by calculating the correlations between the residuals from the model so far obtained and all those variables not so far included in the model.


### 12.4.4 Backward stepwise regression

As its name implies, with the backward stepwise method we approach the problem from the other direction. The argument is put forward that we have collected data on these variables because we believe them to be potentially important explanatory variables. Therefore we should fit the full model, including all of these variables, and then remove unimportant variables one at a time until all those remaining in the model contribute significantly. We use the same criterion, say  $\mathbf{P}< 0.05$ , to determine significantly. At each step we remove the variable with the smallest contribution to the model (or the largest  $\mathbf{P}$  value) as long as that  $\mathbf{P}$  value is greater than the chosen level.

Table 12.16 Backward stepwise regression model to predict PEmax  

<table><tr><td>Variable</td><td>Coefficient b</td><td>Standard error se(b)</td><td>t</td><td>P</td></tr><tr><td>Constant</td><td>126.334</td><td>34.720</td><td></td><td></td></tr><tr><td>Weight</td><td>1.536</td><td>0.364</td><td>4.22</td><td>0.0004</td></tr><tr><td>BMP</td><td>-1.465</td><td>0.579</td><td>2.53</td><td>0.019</td></tr><tr><td>FEV1</td><td>1.109</td><td>0.514</td><td>2.16</td><td>0.043</td></tr></table>

Analysis of variance:

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sum of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Regression</td><td>3</td><td>15 294.46</td><td>5089.15</td><td>9.28</td><td>0.0004</td></tr><tr><td>Residual</td><td>21</td><td>11 538.18</td><td>549.44</td><td></td><td></td></tr></table>

Residual SD = √549.44 = 23.44

The final backward stepwise model obtained in this way includes weight, BMP and  $\mathbf{FEV}_{1}$ , as shown in Table 12.16, together with the analysis of variance table for the three variable model.

For this data set, when we use the  $5\%$  significance level as the criterion for inclusion of a variable in the model we get different models by the forward and backward stepwise approaches. The two methods often yield the same model, but differences are not uncommon. Neither approach is more correct than the other. In this case, we might choose the larger model as it includes three variables all significant at the  $5\%$  level. On the other hand, it is peculiar to include both weight and BMP in the model, and the negative coefficient for BMP (which is positively correlated with PEmax) might suggest a degree of overfitting. This example shows that P values alone cannot choose an appropriate model.


### 12.4.5 All subsets regression

A third approach to selecting the 'best' model is to examine every possible model. It is easy to compare all models including the same number of variables by their  $R^{2}$  statistics (see below), although we may wish to impose a condition that every variable in the model should be statistically significant at some pre- chosen level. Comparing models with different numbers of variables is more difficult, as we expect  $R^{2}$  to increase as we continue to add more variables. One solution is to use a statistic called  $C_{p}$ , which incorporates a penalty for each additional variable in the model. Using this method for the illustrative data set yields the same model as the backward stepwise approach, shown in Table 12.16. All subsets regression is not widely used, partly because it requires much more computing.


### 12.4.6 Goodness-of-fit

We can assess how well a model 'fits' the data or, equivalently, how well the model predicts the dependent variable, by considering the proportion of the total sum of squares that can be explained by the regression. For example, in Table 12.16 the sum of squares due to the model is 15294.46, so that the proportion of the variation explained is 15294.46/26832.64 = 0.57. This statistic is called  $R^{2}$ , and is often expressed as a percentage, here  $57\%$ .

Even when none of the possibly explanatory variables is related to the dependent variable, the expected value of  $R^{2}$  will increase as more variables are added to the model. We thus cannot use  $R^{2}$  as a criterion for deciding which variables should be in the model, as we would end up with all the variables. This full model might fit the observed data almost exactly, yet may be a worse predictor of the relation in the population than a model with fewer variables. Some programs produce an adjusted  $R^{2}$ ,

which compensates for the expected chance prediction when the null hypothesis is true, and is thus more appropriate. The adjusted  $R^{2}$  for the model in Table 12.16 is  $51\%$ . Unlike  $R^{2}$ , adjusted  $R^{2}$  can drop when a variable is added to the model.

When we perform linear regression,  $R^{2}$  is exactly the same as  $r^{2}$ , the square of the Pearson correlation coefficient. For multiple regression models, the value of  $R$  is called the multiple correlation coefficient by analogy, but it must not be interpreted in the same way. The  $F$  test is the only way to assess whether a model explains a significant proportion of variability – using tables of  $r$  to assess the significance of  $R$  is completely invalid and wildly misleading.

$R^{2}$  assesses crudely how well the model fits the data overall, but we should also examine how well the model predicts values of the dependent variable for individuals. In other words we should study the residuals.


### 12.4.7 Analysis of residuals

The residual standard deviation is a measure of the average difference between the observed  $y$  values and those predicted or fitted by the model. The multiple regression model can be written

$$
y_{f i t} = b_{0} + b_{1}x_{1} + b_{2}x_{2} + \ldots
$$

where  $b_{0}$  is the intercept;  $b_{1}, b_{2}$ , etc. are the regression coefficients;  $x_{2}$ , etc. are the individual's values of the variables in the model; and  $y_{f i t}$  is the fitted or predicted value. The residuals are given by  $y_{o b s} - y_{f i t}$ , where  $y_{o b s}$  is the observed value of the dependent variable. We cannot plot the original multi- dimensional data, but we can examine plots of the residuals to see if the model is reasonable. Specifically, we ought to check that the residuals have a Normal distribution and that the model is an equally good fit throughout the range of values of the dependent variable.

As with linear regression (section 11.10) several plots are possible:

1. We can produce a Normal plot of the residuals, to check the overall fit and verify that the residuals have an approximately Normal distribution. The Normal plot may identify outliers for further investigation. Such observations may have unremarkable values of all the variables, but a peculiar combination of them.

2. We can plot the residuals against each of the explanatory variables in turn. We expect to see no association if the true relation is linear. As with simple linear regression, a curved pattern indicates that transformation or a non-linear term may be required.

3. We can plot the residuals against the observed values of  $y$ , but this plot will show a strong negative correlation and will not be very helpful. The correlation does not indicate lack of fit.

4. More usefully, we can plot the residuals against the fitted values. No pattern should be discernible. In particular, the variability of the residuals should be constant across the range of the fitted values.

The Normal plot for the residuals from the three variable model for PEmax is very straight (Figure 12.3), and provides no reason to question the validity of the analysis.

![](../images/12_Relation_between_several_variables/img3.jpg)  
Figure 12.3 Normal plot of residuals from regression model in Table 12.16.


### 12.4.8 Prognostic index

We can use the multiple regression equation to obtain a predicted value of the dependent  $(y)$  variable for any individual with cystic fibrosis. For example, using the model in Table 12.16 the predicted PEmax for an individual is:

$$
y_{f i t} = 126.334 + 1.536\times \mathrm{weight} - 1.465\times \mathrm{BMP} + 1.109\times \mathrm{FEV}_{1}.
$$

Another way of thinking of the predicted value,  $y_{f i t}$ , is as a prognostic value or prognostic index. If the model explains a high proportion of the variability in the dependent variable, high and low predicted values will indicate widely differing prognoses. This terminology is more commonly used in connection with logistic regression (section 12.5) and regression models for analysing survival data (Chapter 13).

Note that unlike the case for linear regression, it is difficult to calculate the standard error of  $y_{f i t}$  because it depends upon the distance of each of

the predictor variables from its mean and also the interrelations between the variables. Some statistical packages can perform these calculations, however, so that a confidence interval can be obtained.


### 12.4.9 Relation to partial correlation

In section 11.5 I described the calculation of the partial correlation coefficient to examine the relation between two variables after adjusting for the effect of a third variable. I noted that it is more usual to use multiple regression for this type of problem. In fact, the two analyses are exactly equivalent.

The illustrative example was based on data in Table 11.2. The partial correlation between blood viscosity and fibrinogen adjusted for haematocrit (PCV), denoted  $r(\mathbf{V}\mathbf{F}|\mathbf{P})$  , was 0.212. Table 12.17 shows analysis of variance tables for linear regression of blood viscosity on PCV, and multiple regression with fibrinogen added to the model. The proportion of the residual sum of squares from the first model that is explained by adding fibrinogen is

$$
\frac{2.7209 - 2.5982}{2.7209} = 0.045
$$

Table 12.17 Regression analyses of blood viscosity in Table 11.2 (a) Regression of blood viscosity on haematocrit (PCV)  

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sum of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Regression on PCV</td><td>1</td><td>9.2295</td><td>9.2295</td><td>101.8</td><td>&amp;lt; 0.001</td></tr><tr><td>Residual</td><td>30</td><td>2.7209</td><td>0.0907</td><td></td><td></td></tr><tr><td>Total</td><td>31</td><td>11.9504</td><td></td><td></td><td></td></tr></table>

(b) Regression of blood viscosity on PCV and fibrinogen  

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sum of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Regression on PCV</td><td>1</td><td>9.2295</td><td>9.2295</td><td>103.0</td><td>&amp;lt; 0.001</td></tr><tr><td>Addition of fibrinogen</td><td>1</td><td>0.1227</td><td>0.1227</td><td>1.37</td><td>0.25</td></tr><tr><td>Residual</td><td>29</td><td>2.5982</td><td>0.0896</td><td></td><td></td></tr><tr><td>Total</td><td>31</td><td>11.9504</td><td></td><td></td><td></td></tr></table>

which is equal to  $0.212^{2}$  - it is the square of the partial correlation coefficient. The hypothesis of no relation between fibrinogen and blood viscosity after adjusting for PCV gives  $\mathbf{P} = 0.25$  by either approach. The multiple regression approach is more informative as we have an estimated regression coefficient and can examine the residuals.


### 12.4.10 Comments

It is not possible here to discuss in detail many of the important issues that affect multiple regression analysis and its interpretation, but the following brief comments indicate areas of interest or difficulty.

When there is a large number of potential explanatory variables we expect some of them to be significant just by chance. There is no completely satisfactory way of searching for the most suitable model without incurring the penalty of an over- optimistic answer. With many candidates for inclusion in the model, some researchers use the results of univariate analyses to decide which variables should be explored in the multivariate analysis. This strategy saves nothing with forward stepwise regression, but may dramatically cut computing time (and costs) for backwards stepwise or all subsets regression. I do not recommend preselection, but if it is used, selection should be based on a lax criterion, say  $\mathbf{P}< 0.2$  or even higher, because variables may contribute to a multiple regression model in unforeseen ways due to complex interrelationships among the variables. As an example, the cystic fibrosis data set gave  $\mathbf{P} = 0.27$  for BMP on its own, but  $\mathbf{P} = 0.019$  for the same variable in the multiple regression model.

Because of the multiple testing at each step, a model derived by stepwise (or all subsets) regression is likely to be over- optimistic with respect to the importance of each variable and the goodness- of- fit, particularly in small samples. Where the number of variables being considered is large and the sample size is small, it is often possible to find a model that appears to fit remarkably well. However, a model containing, say, seven variables fitted to 18 observations will be extremely unreliable. One solution is to suggest that multiple regression should not be applied to small data sets. In addition, it is useful to decide in advance the maximum size of model that is acceptable. I have found the square root of the sample size a useful rule of thumb here, but even that may be over- generous. Alternatively, it is sometimes suggested that the number of variables examined should be restricted. Again there is no rule, but a guideline might be to look at no more than  $n / 10$  variables, where  $n$  is the sample size. With this approach, the illustrative analysis of the data in Table 12.11 would not be acceptable, and nor would many published multiple regression analyses.

When the sample is very large statistical significance can be achieved for tiny effects. For example, Rantakallio and Mäkinen (1984) fitted a model

to data from 9795 infants on the number of teeth at one year of age. Six of the 15 variables were statistically significant  $(\mathbf{P}< 0.05)$  , one being the sex of the child  $(\mathbf{P}< 0.001)$  . The regression coefficient was  $- 0.051$  , indicating a mean difference of one- twentieth of a tooth in favour of boys. The value of  $R^{2}$  for this model was only  $3.1\%$  .

Automatic procedures for selecting a model are useful, but a degree of common sense is required. For example, sometimes there is an accumulation of evidence that a particular variable is prognostically important for the outcome being analysed. It is not sensible to omit, say, age or smoking in such circumstances because P was 'only' 0.07.

A definite advantage of using automatic selection can be seen when independent variables are highly correlated. Table 12.12 shows that both height and weight are highly correlated with PEmax. If we put weight and height in the model together, however, something strange happens. Table 12.18 shows the model with just height and weight. Neither variable appears to contribute significantly, yet the model explains  $40\%$  of the variability of PEmax. The reason is that height and weight are very highly correlated (  $r = 0.92$  in Table 12.13) and thus explain much the same variability in PEmax. The values of  $R^{2}$  are  $40.4\%$  for weight,  $35.9\%$  for height, and  $40.5\%$  for weight and height together. In fact, adding height gains us nothing and obscures the effect of weight by reducing its regression coefficient and increasing its standard error. It is a major advantage of stepwise regression that this type of misleading finding cannot occur.

Table 12.18 Regression of PEmax on weight and height  

<table><tr><td>Variable</td><td>Coefficient b</td><td>Standard error se(b)</td><td>t</td><td>P</td></tr><tr><td>Constant</td><td>47.355</td><td>73.462</td><td></td><td></td></tr><tr><td>Weight</td><td>1.024</td><td>0.787</td><td>1.30</td><td>0.21</td></tr><tr><td>Height</td><td>0.147</td><td>0.655</td><td>0.22</td><td>0.82</td></tr></table>

The multiple regression model incorporates some subtle unstated assumptions. Firstly, it is assumed that the relation between the dependent variable and each continuous explanatory variable is linear. We can examine this assumption for any variable, by plotting the residuals against that variable. Any curvature in the pattern will indicate that a non- linear relation is more appropriate - transformation of the explanatory variable may help here. Secondly, it is assumed that the effects of each variable are independent, so that the effect of one variable is the same regardless of the values of the other variables in the model. If we suspect, for example, that

the relation between height and lung function may be different for males and females then we need to consider the possibility of adding an interaction term to the model. Note that interaction is a quite different concept from the correlation between two variables. The interaction between two variables (continuous or binary) is examined by creating a new variable which is their product and adding this to the model. The effect is tested via the  $F$  statistic for the improved fit. The new variable makes the contribution of each variable to the prediction dependent upon the value of the other variable. I do not recommend the investigation of all interactions, which would greatly increase the risk of a spurious finding. Occasionally, however, a particular interaction may be of prior interest.

The question of how well the model fits the data was discussed in section 12.4.6. The statistics  $R^{2}$  and adjusted  $R^{2}$  are one way of assessing goodness of fit, but they are measures of the correlation between the observed and predicted values of the dependent  $(y)$  variable. We cannot get any idea of the accuracy of prediction for an individual from the significance of variables nor from  $R^{2}$ , however large it is. As with ordinary linear regression, the residual standard deviation gives a measure of the discrepancies between the observed and predicted  $y$  values, from which a  $95\%$  prediction or confidence interval can be obtained.

Lastly, because of the risk that the model may be over- optimistic, it is desirable to assess the predictive capability of a model on a new, independent set of data, but this is not usually possible.


### 12.4.11 Presentation of results

When reporting the results of multiple regression analysis details should be given about the strategy adopted (such as forward stepwise regression) and all the variables which were included in the analysis - not just those in the final model. For categorical variables, especially those featuring in models that are described, it is essential to explain the coding used. For example, there are numerous ways of categorizing the number of cigarettes smoked daily.

For each model described in detail the regression coefficients and their standard errors should be given. The residual standard deviation should be given and  $R^{2}$  or, preferably, adjusted  $R^{2}$  may be useful too.


## 12.5 LOGISTIC REGRESSION

The preceding section dealt with multiple regression with a continuous dependent variable, extending the methods of linear regression introduced in Chapter 11. In many studies the outcome variable of interest is the presence or absence of some condition, such as responding to treatment or having a myocardial infarction. We cannot use ordinary multiple (linear)

regression for such data, but instead we can use a similar approach known as multiple linear logistic regression or just logistic regression.

The basic principle of logistic regression is much the same as for ordinary multiple regression. The main difference is that instead of developing a model that uses a combination of the values of a group of explanatory variables to predict the value of a dependent variable, we instead predict a transformation of the dependent variable.

Before explaining the method it is useful to recall that if we have a binary variable and give the categories numerical values of 0 and 1, usually representing 'No' and 'Yes' respectively, then the mean of these values in a sample of individuals is the same as the proportion of individuals with the characteristic. We might expect, therefore, that the appropriate regression model would predict the proportion of subjects with the feature of interest (or, equivalently, the probability of an individual having that characteristic) for any combination of the explanatory variables in the model. In practice a statistically preferable method is to use a transformation of this proportion, as described below. One reason is that otherwise we might predict impossible probabilities outside the range 0 to 1.

The transformation we use is called the logit transformation, written  $\mathrm{logit}(p)$ . Here  $p$  is the proportion of individuals with the characteristic. For example, if  $p$  is the probability of a subject having a myocardial infarction, then  $1 - p$  is the probability that they do not have one. The ratio  $p / (1 - p)$  is called the odds and thus

$$
\mathrm{logit}(p) = \log_{\mathrm{e}}\left(\frac{p}{1 - p}\right)
$$

is the log odds. If, from our model, we wish to compare predictions for subjects with or without a particular characteristic, such as age greater than 50, we will estimate  $l_{1} = \mathrm{logit}(p_{1})$  for one group of subjects and  $l_{2} = \log \mathrm{it}(p_{2})$  for the other. Then we have

$$
\begin{array}{l}{{l_{1}-l_{2}=\mathrm{logit}(p_{1})-\mathrm{logit}(p_{2})=\mathrm{log}\left(\frac{p_{1}}{1-p_{1}}\right)-\mathrm{log}\left(\frac{p_{2}}{1-p_{2}}\right)}}\\ {{\mathrm{~}=\mathrm{log}\left[\frac{p_{1}(1-p_{2})}{p_{2}(1-p_{1})}\right],}}\end{array}
$$

which is the log of the odds ratio. As described in section 10.11.2, the odds ratio is an important method for relating disease to exposure in epidemiological studies. The estimated value of  $p$  can be derived from  $\mathrm{logit}(p)$ , and always lies in the range 0 to 1. If  $l = \mathrm{logit}(p)$ , then we have  $\mathrm{e}^{l} = p / (1 - p)$  and thus  $p = \mathrm{e}^{l} / (1 + \mathrm{e}^{l})$ .

Table 12.19 summarizes some data relating hypertension to smoking, obesity and snoring in 433 men aged 40 or over. We can use logistic regression to see which of the factors smoking, obesity and snoring are predictive of hypertension. The full model is shown in Table 12.20(a). The

Table 12.19 Hypertension in men aged  $^{40 + }$  in relation to smoking, obesity and snoring (Norton and Dunn, 1985)  

<table><tr><td>Smoking*</td><td>Obesity*</td><td>Snoring*</td><td>Number of men</td><td>Number (%) of men with hypertension</td></tr><tr><td>0</td><td>0</td><td>0</td><td>60</td><td>5 (8%)</td></tr><tr><td>1</td><td>0</td><td>0</td><td>17</td><td>2 (11%)</td></tr><tr><td>0</td><td>1</td><td>0</td><td>8</td><td>1 (13%)</td></tr><tr><td>1</td><td>1</td><td>0</td><td>2</td><td>0 (0%)</td></tr><tr><td>0</td><td>0</td><td>1</td><td>187</td><td>35 (19%)</td></tr><tr><td>1</td><td>0</td><td>1</td><td>85</td><td>13 (15%)</td></tr><tr><td>0</td><td>1</td><td>1</td><td>51</td><td>15 (29%)</td></tr><tr><td>1</td><td>1</td><td>1</td><td>23</td><td>8 (35%)</td></tr><tr><td></td><td></td><td></td><td>Total433</td><td>79 (18%)</td></tr></table>

\*Codes are O for No, 1 for Yes

Table 12.20 Logistic regression analysis of the hypertension data in Table 12.19 (a) All variables  

<table><tr><td></td><td>Regression coefficient b</td><td>Standard error se(b)</td><td>z</td><td>P</td></tr><tr><td>Constant</td><td>-2.378</td><td>0.380</td><td></td><td></td></tr><tr><td>Smoking (x1)</td><td>-0.068</td><td>0.278</td><td>0.24</td><td>0.81</td></tr><tr><td>Obesity (x2)</td><td>0.695</td><td>0.285</td><td>2.44</td><td>0.015</td></tr><tr><td>Snoring (x3)</td><td>0.872</td><td>0.398</td><td>2.19</td><td>0.028</td></tr></table>

(b) Omitting smoking

<table><tr><td></td><td>Regression coefficient b</td><td>Standard error se(b)</td><td>z</td><td>P</td></tr><tr><td>Constant</td><td>-2.392</td><td>0.376</td><td></td><td></td></tr><tr><td>Obesity (x1)</td><td>0.695</td><td>0.285</td><td>2.44</td><td>0.015</td></tr><tr><td>Snoring (x2)</td><td>0.866</td><td>0.397</td><td>2.18</td><td>0.029</td></tr></table>

significance of each variable can be assessed by treating  $z = b / se(b)$  as a standard Normal deviate; the  $\mathbf{P}$  values are shown in the table. Clearly smoking has no association with hypertension, but both obesity and snoring

seem to be independently prognostic. Omission of smoking (Table 12.20b) makes a minimal difference to the other coefficients. The analyses presented relate only to the main effects of obesity, smoking and snoring. Ideally we should also investigate the possibility that there may be an important interaction between two of these factors, for example that the effect of smoking is different for snorers and non- snorers. We can do this very simply if we have coded the binary variables as 0 or 1, by creating a new variable that is the product of the two variables that we are interested in. So we can create a new variable by multiplying together the values of smoking and snoring, and add this variable to the model. In fact, in this data set neither this nor any other interaction term is anywhere near to statistical significance.

The regression equation for the model with three variables is

$$
\mathrm{logit}(p) = -2.378 - 0.068x_{1} + 0.695x_{2} + 0.872x_{3}.
$$

The estimated probability of having hypertension can be calculated from any combination of the three variables smoking, obesity and snoring. Specifically, we can compare the predicted probabilities for different groups, such as snorers and non- snorers. Setting  $x_{3}$  first to 1 and then to 0 we have

$$
\mathrm{logit}(p_{s}) = -2.378 - 0.068x_{1} + 0.695x_{2} + 0.872
$$

and

$$
\mathrm{logit}(p_{n s}) = -2.378 - 0.068x_{1} + 0.695x_{2}
$$

where  $x_{1}$  and  $x_{2}$  are the coded values of smoking and obesity. Thus we have  $\mathrm{logit}(p_{s}) - \mathrm{logit}(p_{n s}) = 0.872$  . As noted earlier, this expression is the log odds ratio, so that the odds ratio for hypertension associated with snoring is  $\mathbf{e}^{0.872} = 2.39$  . We can therefore obtain the estimated odds ratio for a variable directly from its regression coefficient. The interpretation of the odds ratio was discussed in section 10.11.2. We can consider it as a measure of the estimated probability, or risk, of hypertension among snorers in relation to the risk among non- snorers.

Clearly for any binary variable the odds ratio can be estimated from the regression coefficient  $b$  as  $O R = \mathbf{e}^{b}$  . We can use the standard error of  $b$  to get a confidence interval for  $b$  and thus for  $\mathbf{e}^{b}$  . The standard error of the regression coefficient for snoring was 0.398 (Table 12.20a) and a confidence interval is obtained by taking  $b$  to have an approximately Normal sampling distribution. A  $95\%$  confidence interval for  $b$  is thus given by

$$
0.872 - (1.96\times 0.398)\qquad \mathrm{to}\qquad 0.872 + (1.96\times 0.398)
$$

that is, from 0.09 to 1.65. The  $95\%$  confidence interval for the odds ratio is thus from  $\mathbf{e}^{0.09}$  to  $\mathbf{e}^{1.65}$  , that is, from 1.10 to 5.22. We are thus  $95\%$  sure that the risk of hypertension in snorers compared with non- snorers lies in

the range 1.1 to 5.2, which is rather a wide range, but just excludes the value 1.0 that indicates no increased risk.


### 12.5.1 Computing

Logistic regression appears very similar to ordinary multiple regression, but the computing method is different. For each individual the dependent variable (hypertension in the example) is either 0 or 1 by definition, for which  $\mathrm{logit}(p) = \log [p / (1 - p)]$  is minus infinity or infinity respectively. The method of analysis uses an iterative procedure whereby the answer is obtained by several repeated cycles of calculation using an approach known as maximum likelihood. Because of this extra complexity, logistic regression is only found in large statistical packages or those primarily intended for the analysis of epidemiological studies. The same stepwise options that were discussed for ordinary multiple regression can be used for multiple logistic regression.


### 12.5.2 Discrimination

A logistic regression model enables us to predict the probability of a particular outcome in relation to several prognostic variables. In other words, it allows us to distinguish those patients likely or unlikely to have the condition, and as such can be a diagnostic aid. The statistical term for this type of analysis is discriminant analysis. An alternative method of discriminant analysis, which can be extended to more than two outcomes, is discussed in section 12.6.

As with multiple regression (see section 12.4.8) we can use the logistic regression model as a prognostic or diagnostic index. If we define  $L$  as the logit of the probability  $p$  that an individual will have the characteristic of interest, then

$$
L = \log \left(\frac{p}{1 - p}\right) = b_{0} + b_{1}x_{1} + b_{2}x_{2} + \ldots +b_{k}x_{k}
$$

where there are  $k$  variables in the model. We can calculate  $L$  for all the subjects in the study and compare the distributions among those with and without the characteristic. From these we can discover how good the separation is between the two groups, and can determine the best cut- off point to maximize the discrimination. If all the explanatory variables are binary, as in the hypertension data, then there are only a few possible values for  $L$ . For example, the model shown in Table 12.20(b) allows only four groups, defined by presence or absence of obesity and snoring. There are thus only four possible values for  $L$ , each leading to an estimated probability of hypertension. These are shown in Table 12.21 together with the observed proportions with hypertension in the four groups. The

Table 12.21 Predicted probability of hypertension  $(p)$  and observed proportions  

<table><tr><td>Obesity</td><td>Snoring</td><td>L</td><td>p</td><td>Observed proportion</td></tr><tr><td>No</td><td>No</td><td>-2.392</td><td>0.08</td><td>0.09 (7/77)</td></tr><tr><td>Yes</td><td>No</td><td>-1.697</td><td>0.15</td><td>0.09 (1/11)</td></tr><tr><td>No</td><td>Yes</td><td>-1.526</td><td>0.18</td><td>0.18 (48/272)</td></tr><tr><td>Yes</td><td>Yes</td><td>-0.831</td><td>0.30</td><td>0.31 (23/74)</td></tr></table>

agreement is excellent. It is clear, however, that we could not predict hypertension with any accuracy using information about obesity and snoring, even though we can say that hypertension is much more common if both are present than if neither is. To be useful diagnostically, we would need much greater variation in the risk of hypertension among groups.

If one or more of the variables in the model is continuous the values of the score,  $L$  , will have a continuous distribution. The question that then arises is: How different are the distributions in the groups defined by the outcome variable? If there is little overlap, we can choose a cut- off that will give us good discrimination, but if there is considerable overlap the model will not be clinically useful. We are thus using the model to create a diagnostic test; this problem is discussed further in section 14.4.

Peeters et al. (1987) examined the predictive values of a positive test result in screening for breast cancer by mammography. Over a ten year period 801 women had positive mammography results and were referred for clinical examination. Breast cancer was histologically confirmed within one year in 302 women, 10 women were excluded for various reasons, and 489 women were classified as having had a false positive mammography result. The researchers compared the 302 true positives with the 489 false positives to see if they could improve the diagnosis by incorporating other information including epidemiological characteristics. Fifteen variables were examined of which five - age at referral, body mass index, menopausal status, breast complaints, and Wolfe classification of the contralateral breast - were significantly related to risk of cancer  $(\mathbf{P}< 0.01)$  . Multiple logistic regression analysis yielded a model containing just two significant variables, age at referral (in years) and breast complaints (No or Yes; this refers to previous history of pain, skin problems, and so on). Their regression model to predict  $p$  , the probability of being a true positive, was

$$
\mathrm{logit}(p) = 4.005 + 0.0606x_{1} + 0.8398x_{2}
$$

where  $x_{1}$  is age and  $x_{2}$  is breast complaints  $(\mathbf{No} = 0$  ,  $\mathbf{Y}\mathbf{e}\mathbf{s} = 1)$  . For each woman the researchers evaluated  $p$  , the probability of being diagnosed as having breast cancer predicted by their model. They divided these probabi

Table 12.22 Distribution of 787 mammography test results in relation to predicted probability of being a true positive (Peeters et al., 1987). (Four cases with missing data excluded)  

<table><tr><td rowspan="3">Test result</td><td colspan="11">Probability of a true positive test result</td></tr><tr><td>0.0</td><td>0.1</td><td>0.2</td><td>0.3</td><td>0.4</td><td>0.5</td><td>0.6</td><td>0.7</td><td>0.8</td><td>0.9</td><td></td></tr><tr><td>-0.1</td><td>-0.2</td><td>-0.3</td><td>-0.4</td><td>-0.5</td><td>-0.6</td><td>-0.7</td><td>-0.8</td><td>-0.9</td><td>-1.0</td><td></td></tr><tr><td>Negative (N = 487) 
(False positive)</td><td>0</td><td>68</td><td>167</td><td>99</td><td>75</td><td>51</td><td>22</td><td>3</td><td>2</td><td>0</td><td></td></tr><tr><td>Positive (N = 300) 
(True positive)</td><td>0</td><td>10</td><td>55</td><td>56</td><td>80</td><td>56</td><td>28</td><td>9</td><td>5</td><td>1</td><td></td></tr><tr><td>Observed proportions of true positives</td><td>-</td><td>0.13</td><td>0.25</td><td>0.36</td><td>0.52</td><td>0.52</td><td>0.56</td><td>0.75</td><td>0.75</td><td></td><td></td></tr></table>

lities into ten equal intervals and examined the frequencies of positive and negative diagnoses in the ten groups, to get the results shown in Table 12.22. As they observed, the considerable overlap of the distributions means that the model cannot help to distinguish false positives from true positives. A model that is highly significant does not guarantee good discrimination. Indeed, this type of finding is common, and discrimination good enough to aid diagnosis is rare.

A counter- example is given by a study of anti- smoking advice given by general practitioners in Australia (Richmond et al., 1988). They developed a model using six variables to predict which smokers would abstain for six months, with correct prediction for 73/100 patients. This finding suggests that those patients predicted as unlikely to abstain could receive more intensive counselling. It also indicates that the adequacy of a model depends on the clinical situation:  $73\%$  accuracy was good in this study, but would be awful in many circumstances (see discussion of diagnostic tests in section 14.4). It is worth noting that we would be right half the time by guessing at random.

It is not always desirable to impose a cut- off between high and low risk groups, but rather it may be better to calculate a risk score. This was the approach used to produce the 'ready reckoner' for identifying men at high risk of heart attack, described in sections 1.1 and 1.4.1. The risk score was calculated by taking

$7 \times$  years of smoking cigarettes

$+6.5 \times$  mean blood pressure (mmHg)

$+270$  if the man recalls a diagnosis of ischaemic heart disease

$+150$  if there was evidence of angina (from a questionnaire)

$+ 85$  if either parent had died of heart trouble

$+ 150$  if he was diabetic

(Shaper et al., 1986). Here the numbers used to derive the score were derived from the logistic regression coefficients, with slight modification to make a score of 1000 correspond to the cut- off for  $20\%$  of men with the highest risk. The score was calculated for each of the 7506 men included in the analysis. Table 12.23 shows the scores corresponding to selected centiles of the distribution, together with the estimated risk of ischaemic heart disease.

Table 12.23 Risk scores and estimated risk at selected centiles of the distribution of risk among 7506 men aged 40-59 (Shaper et al., 1986)  

<table><tr><td>Centile of distribution of risk scores</td><td>Risk score</td><td>Estimated rate of risk per 1000 men per year</td></tr><tr><td>10</td><td>647</td><td>1.8</td></tr><tr><td>20</td><td>713</td><td>2.4</td></tr><tr><td>30</td><td>766</td><td>3.1</td></tr><tr><td>40</td><td>812</td><td>3.9</td></tr><tr><td>50</td><td>856</td><td>4.8</td></tr><tr><td>60</td><td>898</td><td>5.8</td></tr><tr><td>70</td><td>944</td><td>7.1</td></tr><tr><td>80</td><td>1000</td><td>9.2</td></tr><tr><td>90</td><td>1091</td><td>13.5</td></tr></table>


### 12.5.3 Comments

With the exception of the method used to derive the regression model and the method for testing the significance of individual variables, fitting a logistic regression model is subject to the same difficulties as discussed in section 12.4.10 for ordinary multiple regression. The other main difference is that we cannot use scatter plots to plot the residuals because all of the observed data values are 0 or 1. The simplest solution is to divide the data into groups, as in Tables 12.21 and 12.22, and compare the observed and predicted proportions. Formal methods exist for assessing goodness- of- fit, but they are beyond the scope of this book.


## 12.6 DISCRIMINANT ANALYSIS

As noted at the beginning of section 12.5, there is another (older) method for using several variables to help distinguish groups, known as discrimi

nant analysis. The usual situation is that we wish to be able to find some combination of variables that classifies a large proportion of subjects into the correct group, so that we can have a good chance of allocating (diagnosing) new subjects correctly. Simultaneously we usually wish to choose for the discrimination a subset of useful variables from a larger set of candidates. Discriminant analysis is more complicated than multiple regression, and I do not recommend that it is used without prior experience or expert assistance. In most cases discriminant analysis is used as an exploratory technique, so it is valuable to have an independent data set on which to assess how good the model is.

The basic idea of discriminant analysis is as follows. We first find the combination of variables that maximises the separation between the groups, as with logistic regression. With more than two groups we can further separate the groups by constructing a second combination of the same variables. These combinations are called canonical variates or discriminant functions. The method is perhaps best understood by considering a graph showing the results of an analysis. The method is based on the strong assumption that all of the variables have a Normal distribution with the same standard deviation within each group. It is generally agreed that some departure from this principle is acceptable, for example to include a few binary variables, but as usual it is difficult to say how much flexibility can be granted before the method becomes unreliable.

Thompson et al. (1985) carried out a study to try to differentiate diagnoses of ulcerative colitis, Crohn's disease and other forms of inflammatory bowel disease using rectal biopsy measurements. Seventy- five biopsies were studied, comprising 20 patients with normal biopsies, 20 with ulcerative colitis, 20 with Crohn's disease and 15 with culture positive diarrhoea. Stepwise discriminant analysis on 12 variables yielded a model comprising five variables, all highly statistically significant  $(\mathbf{P}< 0.001)$ .

Figure 12.4 shows the first two discriminant functions for the 75 observations, with superimposed circles indicating the areas in which we would expect (on the basis of the model)  $80\%$  of observations for each group. It is clear that the circle for the Crohn's disease group overlaps those for the other groups, so that we cannot use the model to get a reliable diagnosis. Of the 75 observations, the model correctly predicted 19/20  $(95\%)$  of the normal group, 9/20  $(45\%)$  with Crohn's disease, 14/20  $(70\%)$  with ulcerative colitis, and 12/15  $(80\%)$  with infective diarrhoea. We would expect the model to do worse when a completely new set of cases are examined, and Thompson et al. found only 14 out of a new series of 24 cases were correctly 'diagnosed' by the model, a  $58\%$  success rate compared with  $72\%$  on the original set.

Sample size is again an issue, and it has been suggested that there should be at least five times as many subjects per group as variables examined (Lachenbruch, 1977).

![](../images/12_Relation_between_several_variables/img4.jpg)  
Figure 12.4 Discriminant functions from data of Thompson et al. (1985).

Discriminant analysis is a complex technique, and more detailed discussion is inappropriate in this book. More details can be found in some textbooks, or in the useful papers by Lachenbruch (1977) and Brown (1984). When there are only two groups discriminant analysis usually gives similar answers to logistic regression analysis (see section 12.5.2).


## 12.7 OTHER METHODS

It is important to be aware that there are many other complex statistical methods that are not covered by introductory books. Other multivariate methods exist, such as cluster analysis and factor analysis. There is a vast time series methodology for dealing with long series of observations. There are important methods adapted from industrial quality control for assessing whether there has been a (sudden) change in the level of a variable, with applications in monitoring kidney transplants or detecting the time of ovulation from daily body temperature measurements. There are special methods for dealing with multi- way frequency tables - crosstabulations of three or more categorical variables. And there are many other specialized techniques.

While complicated problems do not necessarily require a complicated statistical analysis, it is unwise to try to force a complex problem to fit into the framework of a more familiar simpler technique. Expert statistical advice should be sought if at all possible.

# EXERCISES

12.1 The table below shows data from an experiment to compare resting metabolic rates  $(\mathrm{kcal} / \mathrm{min})$  in five volunteers each given two diets, a normal diet and an overfeeding diet which contained  $50\%$  more energy (Welle et al., 1986). Data were collected before and after eating, a meal.

<table><tr><td>Subject</td><td>Diet</td><td>Before meal</td><td>After meal</td></tr><tr><td rowspan="2">1</td><td>N</td><td>1.47</td><td>1.78</td></tr><tr><td>O</td><td>1.72</td><td>2.49</td></tr><tr><td rowspan="2">2</td><td>N</td><td>1.42</td><td>1.68</td></tr><tr><td>O</td><td>1.44</td><td>1.87</td></tr><tr><td rowspan="2">3</td><td>N</td><td>1.10</td><td>1.26</td></tr><tr><td>O</td><td>1.11</td><td>1.36</td></tr><tr><td rowspan="2">4</td><td>N</td><td>0.84</td><td>1.11</td></tr><tr><td>O</td><td>0.90</td><td>1.29</td></tr><tr><td rowspan="2">5</td><td>N</td><td>0.91</td><td>1.09</td></tr><tr><td>O</td><td>1.00</td><td>1.25</td></tr></table>

N: Normal diet; O: Overfed diet

(a) What methods of analysis could be used to examine the difference between the metabolic rates in relation to diet:

(i) for the post-prandial data;

(ii) for the change between pre- and post- prandial resting metabolic rates;

(b) Carry out an analysis to see if there is a significant difference between the two diets in the change between pre- and post-prandial resting metabolic rates.

12.2 Using the data in Table 12.11, find a suitable multiple regression model to predict functional residual capacity (FRC) from age, sex, height, weight and  $\mathrm{FEV}_{1}$ . Check that the residuals from this model have a nearly Normal distribution.

12.3 Data from 37 patients receiving a non- depleted allogeneic bone marrow transplant were examined to see which variables were associated with the development of acute graft- versus- host disease (GvHD) (Bagot et al., 1988). The table below shows separately for the groups who did not and did develop GvHD, the age of the recipient and

donor, the type of leukaemia, whether or not the donor had been pregnant and an index of mixed epidermal cell- lymphocyte reactions. Donor pregnancy (Preg) is coded 0 for No and 1 for Yes. Type of leukaemia is coded 1 (acute myeloid leukaemia - AML), 2 (acute lymphocytic leukaemia - ALL) or 3 (chronic myeloid leukaemia - CML). Each group is ordered by their index values. (Also shown is the survival time, which is not used here.)

<table><tr><td>Patient</td><td>Recipient age</td><td>Donor age</td><td>Type</td><td>Preg</td><td>Index</td><td>Survival time (days)</td></tr><tr><td>Patients without GvHD</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>27</td><td>23</td><td>2</td><td>0</td><td>0.27</td><td>95</td></tr><tr><td>2</td><td>13</td><td>18</td><td>2</td><td>0</td><td>0.31</td><td>1385*</td></tr><tr><td>3</td><td>19</td><td>19</td><td>1</td><td>0</td><td>0.39</td><td>465</td></tr><tr><td>4</td><td>21</td><td>22</td><td>2</td><td>0</td><td>0.48</td><td>810</td></tr><tr><td>5</td><td>28</td><td>38</td><td>2</td><td>0</td><td>0.49</td><td>1497*</td></tr><tr><td>6</td><td>22</td><td>20</td><td>2</td><td>0</td><td>0.50</td><td>1181</td></tr><tr><td>7</td><td>19</td><td>19</td><td>2</td><td>0</td><td>0.81</td><td>993*</td></tr><tr><td>8</td><td>20</td><td>23</td><td>2</td><td>0</td><td>0.82</td><td>138</td></tr><tr><td>9</td><td>33</td><td>36</td><td>1</td><td>0</td><td>0.86</td><td>266</td></tr><tr><td>10</td><td>18</td><td>19</td><td>1</td><td>0</td><td>0.92</td><td>579*</td></tr><tr><td>11</td><td>17</td><td>20</td><td>2</td><td>0</td><td>1.10</td><td>600*</td></tr><tr><td>12</td><td>31</td><td>21</td><td>3</td><td>0</td><td>1.52</td><td>1182*</td></tr><tr><td>13</td><td>23</td><td>38</td><td>2</td><td>0</td><td>1.88</td><td>841*</td></tr><tr><td>14</td><td>17</td><td>15</td><td>2</td><td>0</td><td>2.01</td><td>1364*</td></tr><tr><td>15</td><td>26</td><td>16</td><td>2</td><td>0</td><td>2.40</td><td>695*</td></tr><tr><td>16</td><td>28</td><td>25</td><td>1</td><td>0</td><td>2.45</td><td>1378*</td></tr><tr><td>17</td><td>24</td><td>21</td><td>1</td><td>1</td><td>2.60</td><td>736*</td></tr><tr><td>18</td><td>18</td><td>20</td><td>2</td><td>0</td><td>2.64</td><td>1504*</td></tr><tr><td>19</td><td>24</td><td>25</td><td>1</td><td>1</td><td>3.78</td><td>849</td></tr><tr><td>20</td><td>20</td><td>24</td><td>3</td><td>0</td><td>4.72</td><td>1266*</td></tr><tr><td>Patients with GvHD</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>21</td><td>23</td><td>35</td><td>1</td><td>1</td><td>1.10</td><td>186</td></tr><tr><td>22</td><td>21</td><td>35</td><td>2</td><td>1</td><td>1.16</td><td>41</td></tr><tr><td>23</td><td>21</td><td>23</td><td>3</td><td>0</td><td>1.45</td><td>667*</td></tr><tr><td>24</td><td>33</td><td>43</td><td>3</td><td>0</td><td>1.50</td><td>112</td></tr><tr><td>25</td><td>29</td><td>24</td><td>3</td><td>1</td><td>1.85</td><td>572*</td></tr><tr><td>26</td><td>42</td><td>35</td><td>2</td><td>1</td><td>2.30</td><td>45</td></tr><tr><td>27</td><td>27</td><td>31</td><td>3</td><td>0</td><td>2.34</td><td>1019*</td></tr><tr><td>28</td><td>43</td><td>29</td><td>2</td><td>1</td><td>2.44</td><td>479</td></tr><tr><td>29</td><td>22</td><td>20</td><td>1</td><td>0</td><td>3.70</td><td>190</td></tr><tr><td>30</td><td>35</td><td>39</td><td>1</td><td>1</td><td>3.73</td><td>100</td></tr><tr><td>31</td><td>16</td><td>14</td><td>1</td><td>0</td><td>4.13</td><td>177</td></tr></table>

<table><tr><td>Patient</td><td>Recipient age</td><td>Donor age</td><td>Type</td><td>Preg</td><td>Index</td><td>Survival time (days)</td></tr><tr><td>32</td><td>39</td><td>35</td><td>2</td><td>1</td><td>4.52</td><td>80</td></tr><tr><td>33</td><td>28</td><td>25</td><td>3</td><td>1</td><td>4.52</td><td>142</td></tr><tr><td>34</td><td>29</td><td>32</td><td>3</td><td>0</td><td>4.71</td><td>1105*</td></tr><tr><td>35</td><td>23</td><td>19</td><td>3</td><td>0</td><td>5.07</td><td>803*</td></tr><tr><td>36</td><td>33</td><td>34</td><td>3</td><td>0</td><td>9.00</td><td>1126*</td></tr><tr><td>37</td><td>19</td><td>20</td><td>1</td><td>0</td><td>10.11</td><td>114</td></tr></table>

(a) Use appropriate tests to compare the first five variables in the two groups. Which variables are significantly associated with the development of graft versus host disease  $(\mathbf{P}< 0.05)$  ?

(b) Use multiple logistic regression to see which variables are significantly related to GvHD (with  $\mathbf{P}< 0.05)$  . (Hint: Create two new 'dummy' variables indicating disease groups 2 and 3, and use log transformed index values.)

(c) Calculate the odds ratio for the risk of GvHD in relation to each binary variable in the model, with a  $90\%$  confidence interval.

12.4 Multiple logistic regression was used to construct a prognostic index to predict significant coronary artery disease from data on 348 patients with valvular heart disease who had undergone routine coronary arteriography before valve replacement (Ramsdale et al., 1982). Forward stepwise selection was used, using  $\mathbf{P}< 0.01$  as the criterion for including variables. The prognostic index obtained was based on a model containing seven variables.

(a) The regression coefficient for a family history of ischaemic heart disease (coded  $0 = \mathbf{No}$ $1 = \mathbf{Y}\mathbf{e}s$  ) was 1.167. What is the estimated odds ratio for having significant coronary artery disease associated with a positive family history?

(b) One of the variables in the model was the estimated total number of cigarettes ever smoked, calculated as the average number smoked annually  $\times$  the number of years smoking. The regression coefficient was 0.0106 per 1000 cigarettes. What total number of cigarettes ever smoked carries the same risk as a family history of ischaemic heart disease? Convert this figure into years of smoking 20 cigarettes per day.

(c) What is the odds ratio for major coronary artery disease for someone with a family history of ischaemic heart disease who had smoked 20 cigarettes a day for 30 years compared with a non-smoker with no family history?

12.5 For lung transplantation it is desirable for the donor's lungs to be of a similar size as those of the recipient. Total lung capacity (TLC) is difficult to measure, so it is useful to be able to predict TLC from other information. The following table shows the pre- transplant TLC of 32 recipients of heart- lung transplants, obtained by whole- body plethysmography, and their age, sex and height (Otulana et al., 1989).

<table><tr><td></td><td>Age</td><td>Sex</td><td>Height TLC 
(cm)</td><td>(l)</td><td>Age</td><td>Sex</td><td>Height TLC 
(cm)</td><td>(l)</td><td></td></tr><tr><td>1</td><td>35</td><td>F</td><td>149</td><td>3.40</td><td>17</td><td>30</td><td>F</td><td>172</td><td>6.30</td></tr><tr><td>2</td><td>11</td><td>F</td><td>138</td><td>3.41</td><td>18</td><td>21</td><td>F</td><td>163</td><td>6.55</td></tr><tr><td>3</td><td>12</td><td>M</td><td>148</td><td>3.80</td><td>19</td><td>21</td><td>F</td><td>164</td><td>6.60</td></tr><tr><td>4</td><td>16</td><td>F</td><td>156</td><td>3.90</td><td>20</td><td>20</td><td>M</td><td>189</td><td>6.62</td></tr><tr><td>5</td><td>32</td><td>F</td><td>152</td><td>4.00</td><td>21</td><td>34</td><td>M</td><td>182</td><td>6.89</td></tr><tr><td>6</td><td>16</td><td>F</td><td>157</td><td>4.10</td><td>22</td><td>43</td><td>M</td><td>184</td><td>6.90</td></tr><tr><td>7</td><td>14</td><td>F</td><td>165</td><td>4.46</td><td>23</td><td>35</td><td>M</td><td>174</td><td>7.00</td></tr><tr><td>8</td><td>16</td><td>M</td><td>152</td><td>4.55</td><td>24</td><td>39</td><td>M</td><td>177</td><td>7.20</td></tr><tr><td>9</td><td>35</td><td>F</td><td>177</td><td>4.83</td><td>25</td><td>43</td><td>M</td><td>183</td><td>7.30</td></tr><tr><td>10</td><td>33</td><td>F</td><td>158</td><td>5.10</td><td>26</td><td>37</td><td>M</td><td>175</td><td>7.65</td></tr><tr><td>11</td><td>40</td><td>F</td><td>166</td><td>5.44</td><td>27</td><td>32</td><td>M</td><td>173</td><td>7.80</td></tr><tr><td>12</td><td>28</td><td>F</td><td>165</td><td>5.50</td><td>28</td><td>24</td><td>M</td><td>173</td><td>7.90</td></tr><tr><td>13</td><td>23</td><td>F</td><td>160</td><td>5.73</td><td>29</td><td>20</td><td>F</td><td>162</td><td>8.05</td></tr><tr><td>14</td><td>52</td><td>M</td><td>178</td><td>5.77</td><td>30</td><td>25</td><td>M</td><td>180</td><td>8.10</td></tr><tr><td>15</td><td>46</td><td>F</td><td>169</td><td>5.80</td><td>31</td><td>22</td><td>M</td><td>173</td><td>8.70</td></tr><tr><td>16</td><td>29</td><td>M</td><td>173</td><td>6.00</td><td>32</td><td>25</td><td>M</td><td>171</td><td>9.45</td></tr></table>

(a) How well can an individual's lung capacity be predicted from a multiple regression model including age, sex and height?

(b) Compare the result just obtained with that derived from linear regression on height alone.

(c) Calculate the  $95\%$  prediction interval from the linear regression on height for someone with average height.

(d) How could we investigate whether the relation between lung capacity and height is the same for males and females?