# 3 Describing Data

## 3.1 INTRODUCTION

If there is one key concept underlying the subject of statistics, it is that of variability. In medicine we can see this most obviously in the way people differ in their physiological, biochemical and other characteristics and also in their variable responses to disease and to therapy. We also often encounter variability between machines that are supposed to be identical, and between different observers. There are sometimes many sources of variability present at once. For example, if I have my blood pressure measured the value recorded by my GP will depend greatly on some unknown underlying 'true' value, but it will also relate to the time of day, whether I was late and had to run to the surgery, the type of sphygmomanometer being used, whether I was anxious about the outcome, and so on. When many people have their blood pressure measured other factors will affect between- subject variability, such as age, sex and race.

In general we can divide variability into that due to known causes and that which is unexplained. Thus, for example, in a study of men aged 25 to 65 part of the variability in their blood pressures may be ascribed to their age, but most of the rest is unexplained. We often refer to this unexplained variability as random variation.

In any study we will usually want to summarize some of the data in a simple way. Sometimes this will be as far as the statistical analysis goes, but often it is a first step. For categorical variables, such as sex and blood group, it is straightforward to present the number in each category, usually indicating the frequency or percentage of the total number of patients. When shown graphically this is called a bar diagram. Figure 3.1 shows a bar diagram of general aviation accident rates in 1974 by occupation (Booze, 1977). A similar diagram can also be used to relate frequencies (or rates) to values of another variable. For example, Figure 3.2 shows perinatal mortality per 1000 births in England and Wales in 1979 by day of the week. The higher mortality rates at the weekend are clearly seen. It is very important that the vertical axis of a bar diagram starts at zero, otherwise the visual impression is misleading, with the differences between groups being exaggerated.

![](../images/03_Describing_data/img1.jpg)  
Figure 3.1 Bar diagram showing general aviation accident rates (per 1000) in 1974 by occupation (Booze, 1977).

![](../images/03_Describing_data/img2.jpg)  
Figure 3.2 Perinatal mortality in England and Wales in 1979 by day of the week (Macfarlane and Mugford, 1984).

For continuous variables, such as age and serum bilirubin, there will be a large number of different observed values, so an alternative approach is needed. The remainder of this chapter concentrates on ways of describing and summarizing such data both numerically and graphically.

In this chapter I shall introduce some mathematical notation for the first

time. Further explanation of this notation can be found in Appendix A at the end of the book.


## 3.2 AVERAGES

The obvious first step when describing a set of observations of a continuous variable is to calculate the average value. In colloquial use the word 'average' does not have a precise meaning, but in statistics there are several so- called 'measures of central tendency' that are precisely defined and which can be taken as the average or typical value.

The most common of these is the arithmetic mean, usually just called the mean, which is the sum of all the observations divided by the number of observations. Table 3.1 shows age and lung function data for 25 patients with cystic fibrosis. The variable shown is the maximal static inspiratory

Table 3.1 Age and PImax in 25 patients with cystic fibrosis (O'Neill et al., 1983)  

<table><tr><td>Subject</td><td>Age 
(years)</td><td>PImax 
(cm H2O)</td></tr><tr><td>1</td><td>7</td><td>80</td></tr><tr><td>2</td><td>7</td><td>85</td></tr><tr><td>3</td><td>8</td><td>110</td></tr><tr><td>4</td><td>8</td><td>95</td></tr><tr><td>5</td><td>8</td><td>95</td></tr><tr><td>6</td><td>9</td><td>100</td></tr><tr><td>7</td><td>11</td><td>45</td></tr><tr><td>8</td><td>12</td><td>95</td></tr><tr><td>9</td><td>12</td><td>130</td></tr><tr><td>10</td><td>13</td><td>75</td></tr><tr><td>11</td><td>13</td><td>80</td></tr><tr><td>12</td><td>14</td><td>70</td></tr><tr><td>13</td><td>14</td><td>80</td></tr><tr><td>14</td><td>15</td><td>100</td></tr><tr><td>15</td><td>16</td><td>120</td></tr><tr><td>16</td><td>17</td><td>110</td></tr><tr><td>17</td><td>17</td><td>125</td></tr><tr><td>18</td><td>17</td><td>75</td></tr><tr><td>19</td><td>17</td><td>100</td></tr><tr><td>20</td><td>19</td><td>40</td></tr><tr><td>21</td><td>19</td><td>75</td></tr><tr><td>22</td><td>20</td><td>110</td></tr><tr><td>23</td><td>23</td><td>150</td></tr><tr><td>24</td><td>23</td><td>75</td></tr><tr><td>25</td><td>23</td><td>95</td></tr></table>

pressure (PImax) and is an index of respiratory muscle strength. The sum of the PImax values is 2315, so the mean is  $2315 / 25 = 92.6 \mathrm{~cm} \mathrm{H}_{2} \mathrm{O}$ . The mean is the value usually meant when talking about 'the average'. The mean is sometimes indicated by  $\bar{x}$  (pronounced 'x bar'), but this shorthand notation is best avoided other than in equations.

The other frequently used measure is the median. This is the value that comes half- way when the data are ranked in order. For the PImax data in Table 3.1 there are 25 observations, so the median is the 13th value in order. If we rank the PImax values in ascending order we get

<table><tr><td>Rank</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>PImax</td><td>40</td><td>45</td><td>70</td><td>75</td><td>75</td><td>75</td><td>75</td><td>80</td><td>80</td><td>80</td><td>85</td><td>95</td><td>95</td></tr><tr><td>Rank</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td></td></tr><tr><td>PImax</td><td>95</td><td>95</td><td>100</td><td>100</td><td>100</td><td>110</td><td>110</td><td>110</td><td>120</td><td>125</td><td>130</td><td>150</td><td></td></tr></table>

and we can see that the median is  $95 \mathrm{~cm} \mathrm{H}_{2} \mathrm{O}$ . More easily, we can see immediately from Table 3.1 that the median age of these patients was 14 years. When there is an even number of observations the median is defined as the average of the two central values: if we had 24 observations the median would be the average of the 12th and 13th values in an ordered listing of the observations. There are usually equal numbers of observations above and below the median. However, when there is more than one observation equal to the median, as for the PImax data, this may not be exactly true.

The median is especially useful when some extreme data values are censored. If observations are not recorded precisely when they are above a certain level or below a level of detection, we cannot calculate the mean, but we can calculate the median if we have definite values for over half the subjects. The median is also valuable in the analysis of survival times, which is considered in Chapter 13.

The mean and the median are both widely used to describe the average or typical value of a set of data. The mean is much more frequently used because this ties in well with the most common types of statistical analysis, but the median is in no way inferior as a descriptive statistic and in some circumstances it is much more useful than the mean, as we shall see later. In some situations we calculate another measure known as the geometric mean, which is usually close to the median. Its use is described in section 3.4.4.

A final indicator of the centre of a set of data is the mode which is simply the most common value observed. The mode is rarely of any practical use for continuous data.


## 3.3 DESCRIBING VARIABILITY

The second aspect of describing a set of observations of a continuous

variable is to assess the variability of the observations in some way. Any set of data will contain many different values, for example the PImax data shown above. We are interested in the way these values are distributed - - are they all similar or do they vary a lot? There are several ways of tackling this problem. I shall look first at graphical methods, and then consider numerical methods.


### 3.3.1 Histogram

A simple graphical way of depicting a complete set of observations is by means of the histogram in which the number (or frequency) of observations is plotted for different values or groups of values. Table 3.2 shows the frequency distribution of the immunoglobulin IgM in 298 healthy children aged 6 months to 6 years, and Figure 3.3 shows a histogram of

Table 3.2 Concentrations of serum IgM in 298 children aged 6 months to 6 years (Isaacs et al., 1983)  

<table><tr><td>IgM 
(g/l)</td><td>Number of Children</td></tr><tr><td>0.1</td><td>3</td></tr><tr><td>0.2</td><td>7</td></tr><tr><td>0.3</td><td>19</td></tr><tr><td>0.4</td><td>27</td></tr><tr><td>0.5</td><td>32</td></tr><tr><td>0.6</td><td>35</td></tr><tr><td>0.7</td><td>38</td></tr><tr><td>0.8</td><td>38</td></tr><tr><td>0.9</td><td>22</td></tr><tr><td>1.0</td><td>16</td></tr><tr><td>1.1</td><td>16</td></tr><tr><td>1.2</td><td>6</td></tr><tr><td>1.3</td><td>7</td></tr><tr><td>1.4</td><td>9</td></tr><tr><td>1.5</td><td>6</td></tr><tr><td>1.6</td><td>2</td></tr><tr><td>1.7</td><td>3</td></tr><tr><td>1.8</td><td>3</td></tr><tr><td>2.0</td><td>3</td></tr><tr><td>2.1</td><td>2</td></tr><tr><td>2.2</td><td>1</td></tr><tr><td>2.5</td><td>1</td></tr><tr><td>2.7</td><td>1</td></tr><tr><td>4.5</td><td>1</td></tr></table>

![](../images/03_Describing_data/img3.jpg)  
Figure 3.3 Frequency histogram of IgM concentrations in 298 children aged 6 months to 6 years (Isaacs et al., 1983).

these values. If there are many different values it is often desirable to group observations before constructing a histogram in order to get a better visual impression. Unless the sample is very large somewhere around 8 to 15 groups will usually suffice for a satisfactory display. This will depend upon the actual data, for it is desirable to keep the groupings simple. Although we could group the IgM data in intervals of, say, 0.25, this goes beyond the precision of the data. Better is the grouping in intervals of 0.2 shown in Figure 3.4. Note that the width of each vertical bar covers the range of values that have been grouped. So, for example, when we group 0.1 and 0.2 we are actually including values between 0.05 and 0.25 even though the data were not recorded that accurately. A histogram is similar to a bar diagram, but because the frequencies relate to a continuous variable adjacent bars of a histogram should touch.

The bars in histograms are usually all the same width, because the groupings are the same size. If the groups are not the same size this should be allowed for by remembering that it is the area of each bar that is proportional to the frequency, not its height. This principle is illustrated on data showing the age distribution of road accident casualties in the London borough of Harrow in 1985. Table 3.3 shows the data as presented. Most of the casualties were adults, with the greatest number in the age range 25 to 59. Clearly the widths of the groupings vary considerably, from 1 to 35 years in fact, and this must be taken account of in a histogram of the data. Note that in order to include the  $60+$  age group in a histogram we have to assume a reasonable upper age limit - here it will be taken as 80.

![](../images/03_Describing_data/img4.jpg)  
Figure 3.4 As Figure 3.3 but data grouped in intervals of  $0.2 \text{g / l}$ .

Table 3.3 Road accident casualties in the London Borough of Harrow in 1985 (excluding 65 with unknown age)  

<table><tr><td>Age</td><td>Frequency</td></tr><tr><td>0- 4</td><td>28</td></tr><tr><td>5- 9</td><td>46</td></tr><tr><td>10-15</td><td>58</td></tr><tr><td>16</td><td>20</td></tr><tr><td>17</td><td>31</td></tr><tr><td>18-19</td><td>64</td></tr><tr><td>20-24</td><td>149</td></tr><tr><td>25-59</td><td>316</td></tr><tr><td>60+</td><td>103</td></tr><tr><td>Total</td><td>815</td></tr></table>

First, consider what happens if we ignore the above warning and draw a histogram where, for each age group, the height indicates the frequency shown in Table 3.3 and the width shows the age range - this is shown in Figure 3.5. This histogram suggests that accident victims are much less likely to be 16 and 17 year olds than adults, whereas we would probably expect the opposite to be true. We get the correct picture by making the frequencies correspond to the area of each bar rather than its height, as is shown in Figure 3.6. What we have done is consider the number of casualties per year of age - where we don't have this explicitly we take the

![](../images/03_Describing_data/img5.jpg)  
Figure 3.5 Incorrect histogram of road accident data of Table 3.3.

![](../images/03_Describing_data/img6.jpg)  
Figure 3.6 Correct histogram of road accident data.

average value in that age group. Figure 3.6 shows a true impression of the data, from which we can see that road accident casualties are more likely to be aged 16 to 24 than any other age group.

Note that this histogram just shows the observed numbers of casualties. It does not indicate the risk of a road accident for people of varying age - for this we would also need to know the age distribution of the population. and would need to assume that all casualties lived in Harrow and that no Harrow residents had accidents elsewhere.

It is sometimes more useful to show the proportion of the sample in each interval. All the frequencies are converted into percentages by dividing by the sample size and multiplying by 100. Figure 3.7(a) shows the resulting relative frequency histogram for the IgM data, which differs from Figure 3.3 only in the way the vertical axis is labelled. An alternative way of plotting the data is to join the mid- points of the tops of all the vertical bars of the histogram; this is called a frequency polygon. Figure 3.7(b) shows such a plot for the same data.

![](../images/03_Describing_data/img7.jpg)  
Figure 3.7 IgM data in Figure 3.3 shown as (a) Relative frequency histogram, (b) Relative frequency polygon.

The vertical axis of a histogram must start at zero, and there should not be any breaks in the scale. Otherwise the visual impression will be misleading. Likewise three- dimensional effects should not be used.


### 3.3.2 Stem-and-leaf diagram

A clever modification of the histogram called a stem- and- leaf diagram allows all the actual observations to be shown too. Figure 3.8 shows the PImax data from Table 3.1 redrawn as a stem- and- leaf diagram. The raw data can be reconstructed by joining the numbers on the left (the stems) to each of the numbers on the right (the leaves) on the same row. This is a very economical way of reproducing the raw data, and is more useful than a simple list of the data.

4 05 5 6 7 05555 8 0005 9 5555 10 000 11 000 12 05 13 0 14 15 0

The stem- and- leaf diagram works well in many circumstances, especially where there are many different values, but the best format depends on the nature of the data and the sample size. The IgM data in Table 3.2 cannot be made into a successful stem- and- leaf diagram using five 'stems' (0, 1, 2, 3, 4), but we can split each group to get a useful diagram, as in Figure 3.9.

![](../images/03_Describing_data/img8.jpg)


### 3.3.3 Cumulative frequencies

3.3.3 Cumulative frequenciesWe saw earlier how the distribution of a sample of observations can be shown as the percentage of the sample with values in each of several small ranges. This was shown in the relative frequency histogram in Figure 3.7. We can take this idea a stage further by considering for each group the proportion of subjects in that group or a lower one. Thus we calculate the cumulative frequency at each level - the proportion of observations less than or equal to each value. The calculations are shown in Table 3.4. The cumulative relative frequencies can be plotted in a histogram, as in Figure 3.10(a). However, for cumulative frequencies there is no need to group the data like this because we can plot the cumulative frequencies directly, as in Figure 3.10(b). This plot can be used either to see what percentage of

Table 3.4 Cumulative frequency distribution of 298 IgM values  

<table><tr><td>IgM g/l</td><td>Frequency</td><td>Relative Frequency %</td><td>Cumulative Frequency</td><td>Cumulative Relative Frequency %</td></tr><tr><td>0.1</td><td>3</td><td>1.0</td><td>3</td><td>1.0</td></tr><tr><td>0.2</td><td>7</td><td>2.3</td><td>10</td><td>3.4</td></tr><tr><td>0.3</td><td>19</td><td>6.4</td><td>29</td><td>9.7</td></tr><tr><td>0.4</td><td>27</td><td>9.1</td><td>56</td><td>18.8</td></tr><tr><td>0.5</td><td>32</td><td>10.7</td><td>88</td><td>29.5</td></tr><tr><td>0.6</td><td>35</td><td>11.7</td><td>123</td><td>41.3</td></tr><tr><td>0.7</td><td>38</td><td>12.8</td><td>161</td><td>54.0</td></tr><tr><td>0.8</td><td>38</td><td>12.8</td><td>199</td><td>66.8</td></tr><tr><td>0.9</td><td>22</td><td>7.4</td><td>221</td><td>74.2</td></tr><tr><td>1.0</td><td>16</td><td>5.4</td><td>237</td><td>79.5</td></tr><tr><td>1.1</td><td>16</td><td>5.4</td><td>253</td><td>84.9</td></tr><tr><td>1.2</td><td>6</td><td>2.0</td><td>259</td><td>86.9</td></tr><tr><td>1.3</td><td>7</td><td>2.3</td><td>266</td><td>89.3</td></tr><tr><td>1.4</td><td>9</td><td>3.0</td><td>275</td><td>92.3</td></tr><tr><td>1.5</td><td>6</td><td>2.0</td><td>281</td><td>94.3</td></tr><tr><td>1.6</td><td>2</td><td>0.7</td><td>283</td><td>95.0</td></tr><tr><td>1.7</td><td>3</td><td>1.0</td><td>286</td><td>96.0</td></tr><tr><td>1.8</td><td>3</td><td>1.0</td><td>289</td><td>97.0</td></tr><tr><td>2.0</td><td>3</td><td>1.0</td><td>292</td><td>98.0</td></tr><tr><td>2.1</td><td>2</td><td>0.7</td><td>294</td><td>98.7</td></tr><tr><td>2.2</td><td>1</td><td>0.3</td><td>295</td><td>99.0</td></tr><tr><td>2.5</td><td>1</td><td>0.3</td><td>296</td><td>99.3</td></tr><tr><td>2.7</td><td>1</td><td>0.3</td><td>297</td><td>99.7</td></tr><tr><td>4.5</td><td>1</td><td>0.3</td><td>298</td><td>100.0</td></tr><tr><td>Total</td><td>298</td><td>99.9</td><td></td><td></td></tr></table>

![](../images/03_Describing_data/img9.jpg)  
Figure 3.10 IgM data shown as (a) Cumulative relative frequency histogram, (b) Cumulative distribution.

observations lie above or below any chosen level, or to find the values which a given percentage of children's IgM values lie above or below. For example, we can easily see that the median IgM concentration was  $0.7 \text{g / l}$ . This information cannot be obtained from a histogram or cumulative histogram if values have been grouped.

Cumulative frequencies are especially useful for comparing the distribution of values in two or more different groups of individuals. Figure 3.11(a) shows relative frequency histograms for the age at first tooth eruption of 1568 children of smokers and 1576 non- smokers. Figure 3.11(b) shows cumulative histograms of the same data. Figure 3.11(c) shows cumulative frequency polygons of the same data. Because we are considering cumulative frequencies we join the right- hand points of the vertical bars rather than the mid- points as in Figure 3.7(b). This plot shows that the difference between the groups is not as great as was suggested in Figure 3.11(b) – the two groups were side by side in the previous plot, which can lead to a misleading visual impression. We can easily see from Figure 3.11(c) that the median age at first tooth eruption was about one week earlier in the children of smokers.


## 3.4 QUANTIFYING VARIABILITY

Graphical methods are important for examining the variability of data, but it is necessary also to have a numerical way of summarizing the amount of variability. Used in conjunction with the mean, this would provide an informative but brief summary of a set of observations. There are three main approaches to quantifying the variability of a set of data. We can either quote the range of all the values, specific values derived from the cumulative frequency distribution, or we can obtain a numerical measure of the dispersion of the observations around the mean.


### 3.4.1 Range

The simplest way to describe the spread of a set of data is to quote the lowest and highest values. These values are known as the range. The range of the IgM data was 0.1 to  $4.5 \mathrm{g} / \mathrm{l}$ . This is not a satisfactory summary, because it takes account of only the most extreme (and perhaps most peculiar) values at each end of the data, and the way the intermediate values are distributed will not influence the range. Thus for the IgM data we have no idea that 4.5 was considerably more than the second highest value of  $2.7 \mathrm{g} / \mathrm{l}$ . Mainly for this reason the range is not widely used.


### 3.4.2 Centiles

By specifying two values that encompass most rather than all of the data values we get round much of the difficulty. For example, we could calculate the values between which  $90\%$  of the observations lie. The value below which a given percentage of the values occur is called a centile or percentile, and corresponds to a value with a specified cumulative relative frequency.

![](../images/03_Describing_data/img10.jpg)

We require the 5th and 95th centiles of the distribution of IgM values. From the last column of Table 3.4 we can see that the cumulative relative frequency passes  $5\%$  somewhere in the group of IgM values of  $0.3 \mathrm{g / l}$ , and  $95\%$  is reached at the value of  $1.6 \mathrm{g / l}$ .

A more correct general approach is to calculate the ranks of the required observations, which we do by taking the necessary percentages of the sample size plus one. Here we need the values with ranks  $0.05 \times 299 = 14.95$  and  $0.95 \times 299 = 284.05$ . This calculation usually leads to non- integer values, so we may need to interpolate. For example we want the value of IgM 0.95 of the way between the 14th and 15th observations in rank order. As these are, from Table 3.4, both equal to  $0.3 \mathrm{g / l}$  the 5th centile is  $0.3 \mathrm{g / l}$ , and likewise the 95th centile is  $1.7 \mathrm{g / l}$ . However, if we want the 10th centile, we would need the IgM value corresponding to a rank of  $0.10 \times 299 = 29.9$ . The observations with ranks 29 and 30 are 0.3 and  $0.4 \mathrm{g / l}$  and we take the value nine- tenths of the way between these values, by calculating  $0.3 + 0.9 (0.4 - 0.3) = 0.39 \mathrm{g / l}$ . The values 0.3 and 1.7 are thus the 5th and 95th centiles of the observed distribution of IgM in this sample of children and these two values thus specify what we can call a  $90\%$  central range—the range within which the central  $90\%$  of values lie (i.e. excluding  $5\%$  at each end of the distribution).

Other centiles can be quoted rather than the 5th and 95th. The most common alternative is to quote a  $95\%$  central range ( $2\frac{1}{2}$ th and  $97\frac{1}{2}$ th centiles), but an  $80\%$  central range (10th and 90th centiles) is sometimes used. The 50th centile is another name for the median, as half of the observations are less than (and greater than) this value. The 25th and 75th centiles are known as quartiles; these values together with the median divide the data into four equally populated subgroups. The numerical difference between the 25th and 75th centiles is the inter- quartile range, and is occasionally used to describe variability.

A simple but useful semi- graphical way of summarizing data using centiles is the box- and- whisker plot. Figure 3.12 shows a box- and- whisker plot for the IgM data. The box indicates the lower and upper quartiles and the central line is the median. The points at the ends of the 'whiskers' are the  $2\frac{1}{2}\%$  and  $97\frac{1}{2}\%$  values, although the whiskers sometimes indicate the extreme values. For a single set of data a histogram is more informative, but several sets of data can be summarized economically using the box- and- whisker plot. Sometimes any values outside the range of the whiskers are plotted individually.


### 3.4.3 Standard deviation

The alternative approach to quantifying variability is based on the idea of averaging the distance each value is from the mean. For an individual with

![](../images/03_Describing_data/img11.jpg)  
Figure 3.12 Box-and-whisker plot of the IgM data, showing the  $2\frac{1}{2}$ , 25, 50, 75 and  $97\frac{1}{2}\%$  cumulative relative frequencies (centiles).

an observed value  $x_{i}$  the distance from the mean  $\bar{x}$  is  $x_{i} - \bar{x}$ , and if we have  $n$  observations we have a set of  $n$  such distances, one for each individual. For observations below the mean the difference will be negative. We can calculate the average distance between the observations and their mean, but the sum of these distances,  $\Sigma (x_{i} - \bar{x})$ , is always zero because of the way the mean is calculated from the individual observations. However, if we square the distances before we sum them we get a quantity that must be positive. The average of these squared differences thus gives a measure of individual deviations from the mean. This quantity is called the variance, and is defined as

$$
\frac{\sum_{i = 1}^{n}(x_{i} - \bar{x})^{2}}{n - 1}.
$$

Note that we divide by  $n - 1$  rather than the more obvious  $n$ . Dividing by  $n$  gives the variance of the observations around the sample mean, but we virtually always consider our data as a sample from some larger population, and wish to use the sample data to estimate the variability in the population. Dividing by  $n - 1$  gives us a better estimate of the population variance, although clearly for large samples the difference is negligible.

The variance will turn up in later chapters, notably when discussing the technique known as analysis of variance. For our present purpose, the

variance is not a suitable measure for describing variability because it is not in the same units as the raw data. We do not, for example, wish to express the variability of a set of blood pressure measurements in square mm Hg. The obvious solution to this problem is to take as our measure the square root of the variance. We call this quantity the standard deviation. The standard deviation is usually abbreviated to sd or SD or  $s$  or  $\sigma$  (the Greek letter sigma), and is defined as

$$
\sqrt{\frac{\sum_{i = 1}^{n}(x_{i} - x)^{2}}{n - 1}}.
$$

Standard deviation is not a good name for this statistic as there is nothing 'standard' about it. It may more reasonably be thought of as approximately the average deviation (or distance) of the observations from the mean.

Many calculators can calculate the standard deviation, by means of a key marked  $s$  or  $\sigma$ . (The use of the Greek  $\sigma$  here rather than  $s$  is not strictly correct, as will be explained in the next chapter. If there are keys marked  $\sigma_{n}$  and  $\sigma_{n - 1}$  the latter should be used.)

However, should we wish to do the calculation ourselves there is a much easier formula to use, which is mathematically equivalent:

$$
s = \sqrt{\frac{\Sigma x^{2} - (\Sigma x)^{2} / n}{n - 1}}.
$$

(Note the simplification of the  $\Sigma$  notation, as described in Appendix A.) Using this formula we can calculate the standard deviation from the sum of the observations,  $\Sigma x$ , and the sum of the squares of the observations,  $\Sigma x^{2}$ . We do not need to calculate the individual distances from the mean.

For example, for the PImax data shown in Table 3.1 the sum of the data and the sum of the squares of the data are

$$
\sum x = 2315 \qquad \text{and} \qquad \sum x^{2} = 229275
$$

so the mean PImax is  $2315 / 25 = 92.60 \text{cm} \text{H}_{2} \text{O}$  and the standard deviation is

$$
\begin{array}{c}{{s=\sqrt{\frac{229275-2315^{2}/25}{24}}.}}\\ {{=24.92\mathrm{cm}\mathrm{H}_{2}\mathrm{O}.}}\end{array}
$$

Note that I shall keep an extra decimal place at present for the mean and standard deviation because I shall be doing some further calculations. One decimal place would be sufficient when reporting these results.

The standard deviation has an important role in data analysis, but here we are concerned with its value as a descriptive statistic. In fact, although the standard deviation is widely used for this purpose it is useful only indirectly for describing the variability of a set of data. We can say, for example, that in many circumstances the large majority (about  $95\%$  ) of a set of observations will be within two standard deviations of the mean. The appropriateness of this statement depends on the shape of the distribution of the data. If the distribution is reasonably symmetric then the above statement will usually be true.

For the PImax data in Figure 3.8 the mean was 92.60 and the standard deviation was  $24.92 \mathrm{cm} \mathrm{H}_2\mathrm{O}$ . The values that are two standard deviations either side of the mean are  $92.60 - 2(24.92) = 42.76 \mathrm{cm} \mathrm{H}_2\mathrm{O}$  and  $92.60 + 2(24.92) = 142.44 \mathrm{cm} \mathrm{H}_2\mathrm{O}$ . (We often use the expression 'mean  $\pm 2\mathrm{SD}$ ' to mean both of these values, i.e. the mean 'plus or minus' twice the standard deviation.) All but two of the 25 observations were within this range; we would expect to find on average one observation outside the range mean  $\pm 2\mathrm{SD}$  (i.e. about  $5\%$  of 25).


### 3.4.4 Skewed distributions

For data which do not have a symmetric distribution we need to be careful when using the standard deviation in the way just described. For example, the IgM data in Figure 3.3 clearly have an asymmetric distribution- - there is a long right- hand 'tail'. This is called a skewed distribution. The mean and standard deviation of the IgM data are 0.80 and  $0.47 \mathrm{g} / \mathrm{l}$  respectively. Calculating the mean  $\pm 2\mathrm{SD}$  gives the values  $- 0.14$  and 1.74. The lower value is negative, which is not a possible value of IgM. The upper value of 1.74 is exceeded by 12 of the observations,  $4\%$  of the total. The two values clearly do not describe the range of the bulk of the data very well. Although they still include about  $95\%$  of the observations, the exclusions are all in one tail.

For measurements that cannot be negative, which is usually the case, we can infer that the data have a skewed distribution if the standard deviation is more than half the mean. There is no guarantee that the converse is true, however, but a histogram will quickly reveal whether the data are skewed or not. Skewness like that of the IgM data is called positive skewness and is common. The opposite phenomenon, with an extended left hand tail, is called negative skewness and is rare.

In general, when we have data with a skewed distribution we use other ways of describing the data. There are two main possibilities. The first is to transform the data mathematically so that the transformed data have a more nearly symmetric distribution. The most frequent device is to take logarithms (logs) of the data. The rationale for this approach will be

discussed in Chapter 7. We can see that it works well here, however, from Figure 3.13 which shows a histogram of  $\log_{10} \mathrm{IgM}$  values. The mean and SD of the log data are  $- 0.158$  and  $0.238$  respectively, so that the values mean  $\pm 2 \mathrm{SD}$  are  $- 0.63$  and  $+0.32$ . These values are indicated in Figure 3.13. They cut off 10 values in the lower tail of the distribution and 6 in the upper tail, and thus give a range of values encompassing  $282 / 298$  or  $94.6\%$  of the observations. The cut- off values can be 'back- transformed' to the original scale giving  $0.23$  and  $2.08$ , and reference to Table 3.2 shows the 16 values outside these limits. If we back- transform (or 'antilog') the mean of the log data we get a quantity known as the geometric mean. The geometric mean of the  $\mathrm{IgM}$  data is thus  $10^{- 0.158} = 0.695 \mathrm{g} / \mathrm{l}$ . Where log transformation successfully removes skewness the geometric mean will be similar to the median, and will be less than the mean of the raw data. The standard deviation of the log data cannot be meaningfully back- transformed.

Note that log data can be negative, and that it does not matter whether logs to base e or base 10 are used. In this example, logs to base 10 were used, with the function  $10^{x}$  used for the back- transformation. Log transformation is only useful for removing positive skewness.

The alternative approach to describing the distribution of skewed data is to calculate the centiles corresponding to a chosen central range. For example, to get the values that enclose  $95\%$  of the observations we need to calculate the  $2\frac{1}{2}$ th and  $97\frac{1}{2}$ th centiles. Using the method described in the

![](../images/03_Describing_data/img12.jpg)  
Figure 3.13 Frequency histogram of  $\log_{10} \mathrm{IgM}$  showing the values of mean  $\pm 2 \mathrm{SD}$ .

previous section, these values are obtained by interpolation as 0.2 and  $2.0 \mathrm{g / l}$ . These values of 0.2 and  $2.0 \mathrm{g / l}$  are called empirical centiles as opposed to the earlier values of 0.23 and 2.08 (obtained from the mean  $\pm 2 \mathrm{SD}$  of the log data), which are estimated centiles. The two methods agree well for these data. Likewise the median IgM value is  $0.7 \mathrm{g / l}$ , which is very close to the geometric mean.


### 3.4.5 Comment

The standard deviation is one of the key quantities in statistical analysis. Its value for describing variability is conditional on the distribution of the data. Although it is always valid to calculate the standard deviation we can infer that about  $95\%$  of the observations were in the interval mean  $\pm 2 \mathrm{SD}$  only if we know (or assume) that the distribution of the data was reasonably symmetric. In fact, as happens with the IgM data, the range mean  $\pm 2 \mathrm{SD}$  may include about  $95\%$  of the observations even when the distribution is skewed. However, while we may reasonably use just the mean and SD to summarize such data, the skewness will be hidden. For skewed data, it is preferable to use the median and a  $90\%$  or  $95\%$  central range to summarize a set of observations. However, it is not practical to quote centiles for small samples, so the range can be given. Otherwise, the standard deviation can be used. It has the advantage of using each observation directly and it is easier to calculate (by computer) for large amounts of data.

The question of the shape of the distribution of one's data is of fundamental importance when choosing a method of analysis, as will be seen in later chapters.


## 3.5 TWO VARIABLES


### 3.5.1 Describing data in two or more groups

In many studies comparisons are made between different groups. For example, two groups of patients may be given different treatments and the outcomes observed. It is desirable in such studies to demonstrate that the characteristics of the two groups of subjects were comparable at the start of the study. As an example, Table 3.5 shows the characteristics of the groups of subjects in a clinical trial comparing short- wave diathermy treatment, osteopathic treatment, and an ineffective placebo treatment in patients with non- specific low back pain (Gibson et al., 1985). The characteristics of the three groups at the start of the study (often called 'baseline' values) are shown as numbers and percentages for categorical variables, and as means and standard deviations for the two continuous variables. This information

is usually sufficient to judge the comparability of the groups. I shall consider how we assess whether they are comparable in Chapter 15. For the moment we can see that the mean duration of pain had a skewed distribution as the mean is a lot less than twice the standard deviation in all three groups.

Table 3.5 Details of patients in each treatment group in a study of low back pain (Gibson et al., 1985)  

<table><tr><td rowspan="2"></td><td colspan="3">Treatment group</td></tr><tr><td>Short-wave diathermy</td><td>Osteopathy</td><td>Placebo</td></tr><tr><td>Number of patients</td><td>34</td><td>41</td><td>34</td></tr><tr><td>Sex</td><td>16F/18M</td><td>21F/20M</td><td>11F/23M</td></tr><tr><td>Mean age (SD)</td><td>35 (16)</td><td>34 (14)</td><td>40 (16)</td></tr><tr><td>Mean duration of pain in weeks (SD)</td><td>18 (11)</td><td>16 (14)</td><td>17 (11)</td></tr><tr><td>Median pain score at pre-sentation (range)*</td><td>45 (5-82)</td><td>35 (4-90)</td><td>48 (10-96)</td></tr><tr><td>Radiological abnormalities of the spine</td><td>12 (34%)</td><td>12 (29%)</td><td>11 (32%)</td></tr></table>

\*Visual analogue scale

Sometimes we wish to show graphically the distribution of a continuous variable in two or more groups. This can be done by means of a separate histogram for each group, these being aligned vertically, but there is a rather clearer format that shows all the observations. Figure 3.14 shows the distribution of uric acid in a group of women before, during and after pregnancy (Lind et al., 1984). All the data are shown in the graph, and the authors have also given the mean, standard deviation and number of observations at each stage. This informative figure thus effectively incorporates a table while using little extra space. Bar diagrams are often used to show means and standard deviations in each group. This is not a good format – this information is better in a table, or else a more informative display, such as that in Figure 3.14 or a box- and- whisker diagram, should be used.

![](../images/03_Describing_data/img13.jpg)

![](../images/03_Describing_data/img14.jpg)  
Figure 3.14 Distribution of serum uric acid in a group of healthy women before, during and after pregnancy (reproduced from Lind et al., 1984, with permission).


### 3.5.2 Relation between two continuous variables

The relation between two continuous variables may be shown graphically in a scatter diagram. This is a simple graph in which the values of one variable are plotted against those of the other. For example, Figure 3.15 shows a scatter diagram of the PImax data of Table 3.1 related to age. Scatter diagrams are very simple to produce using statistical computer programs. When there are two (or more) individuals with identical values of both variables this should be shown, preferably by moving one point slightly. Some software packages print the actual number of coincident points up to 9, so that '9' means '9 or more'. It is easy to indicate subgroupings by using different plotting symbols. For example, in Figure 3.15 males and females could have been indicated by closed and open circles. The scatter diagram is a very useful descriptive tool, and is often valuable as a prelude to formal statistical analysis. The graph in Figure 3.14 is really a scatter diagram relating a continuous and a categorical variable.

![](../images/03_Describing_data/img15.jpg)  
Figure 3.15 Scatter diagram of PImax by age.


## 3.6 THE EFFECT OF TRANSFORMING THE DATA

If we change our data in some way we will inevitably change the mean and standard deviation too. In some situations we alter, or transform, a complete set of data, in which case the effect on the mean and standard deviation may be predicted.

The simplest case to consider is where we alter the units of measurement. If we change the IgM data from values recorded as  $\frac{g}{l}$  to  $\frac{mg}{l}$  each observation will be 1000 times as large. It is easy to see that the mean will also be 1000 times bigger, and inspection of the formula for the standard deviation shows that it too will be 1000 times bigger. In contrast, if we add or subtract a constant value from all the observations, the mean of the new data is obtained by the same subtraction or addition but the standard deviation is unaffected. Thus to the mean of a set of temperatures recorded as degrees Celsius we must add 273.15 to give the mean of the equivalent thermodynamic temperature on the Kelvin scale.

Any transformation based on multiplication, division, subtraction or addition is called a linear transformation, because if we plot the new values against the original values we get a straight line. The mean and standard deviation of the transformed values are obtained in a simple manner. For other, non- linear transformations, however, we cannot obtain the mean and standard deviation of the transformed data in this way. Examples of non- linear transformation are taking logarithms (illustrated in section 3.4.4) or square roots. Thus the mean of the log data is not the same as the log

of the mean of the raw data. The reasons for transforming data are considered in Chapter 7.


## 3.7 DATA PRESENTATION


### 3.7.1 Numerical presentation

Data summary should not be by the mean (or median) alone, but some indication of variability should also be provided. It is common to put the SD in brackets after the mean. When these values are quoted in text the format mean  $\pm \mathbf{SD}$  ,as in 'their mean diastolic blood pressure was  $102.3\pm 11.9\mathrm{mmHg}^{\prime}$  , should be avoided. (Indeed several medical journals no longer allow this notation.) It is much better to write  $102.3\mathrm{mmHg}$  (SD 11.9) because this format makes it clear what the second number is and also avoids the implication that the range of values from mean  $- \mathbf{SD}$  to mean  $+\mathbf{SD}$  is of specific importance. As we have seen, it is the range mean  $\pm 2\mathbf{SD}$  which can often be used to describe the spread of the large majority (about  $95\%$  ) of a set of observations.

It is not possible to give absolute rules for numerical presentation, but the following guidelines will generally be reasonable. It is usually appropriate to quote the mean to one extra decimal place compared with the raw data. The mean should not be presented to ridiculous (and spurious) 'accuracy'. For example, it is clearly absurd to quote the mean length of gestation of a group of babies to the nearest 10 minutes. This is done when quoting weeks of gestation to 3 decimal places. The standard deviation should usually be given to the same accuracy as the mean, or with one extra decimal place.


### 3.7.2 Tables

Whether or not to put descriptive data in tables will depend on the number of variables and groups of subjects. Table 3.5 shows a recommended way of presenting descriptive data, both continuous and categorical. In general it is preferable to put data of a like kind in columns rather than rows as the eye can scan columns more easily, but this is not always possible. For example, in Table 3.5 the means of the same variables in the three treatment groups are shown in rows, as it is usually more natural that way. However, means and SDs are clearly distinguished side by side, with the latter in brackets for clarity.

Tables can also be used to show raw data, although this is only reasonable when there are not too many observations. Where possible, it is helpful to order the data by one of the variables - after all, there is usually nothing special about the order in which the patients were seen. Many of the tables in this book, such as Table 3.1, have been ordered in this way.


### 3.7.3 Graphs

It is difficult to offer much general advice about when it is appropriate to use a graph rather than a table. Graphs offer the opportunity to show much more data than could be shown in a table, and are thus probably most suited to data that cannot easily be displayed in a table. There is no point in using a graph to show, for example, the means and standard deviations of one variable in two or three groups. Some displays, such as histograms, are in essence graphical - Figure 3.3 is a much clearer display than Table 3.2. It is possible to combine the best features of a table and a figure, and an example was given in Figure 3.14. This form of display should be used more often.

Scatter diagrams are particularly useful for showing the relation between two variables. It is important that all the data points should be shown, which can pose difficulties when there are coincident points (see section 6.7). Different symbols can be used to indicate subgroups of the data.

Graphs are a very powerful way of getting a message across, but the same data can be portrayed in many ways, with a variety of visual effects. For example, Figure 3.16 shows three alternative displays of the data in Table 3.6 showing average amounts of bread consumed per person per week in London from 1960 to 1980. Features visible in one or more figures include a gradual reduction in total bread consumption, a more than proportionate fall in consumption of white bread, and a rise in consumption of brown and wholemeal bread in the last five year period. These features are probably more easily seen in Table 3.6.

Table 3.6 Amounts of bread consumed in London from 1960 to 1980 (g per person per week) (Sivell and Wenlock, 1983)  

<table><tr><td rowspan="2">Type of bread</td><td colspan="5">Year</td></tr><tr><td>1960</td><td>1965</td><td>1970</td><td>1975</td><td>1980</td></tr><tr><td>White</td><td>1040</td><td>975</td><td>915</td><td>785</td><td>620</td></tr><tr><td>Brown</td><td>70</td><td>80</td><td>70</td><td>75</td><td>115</td></tr><tr><td>Wholemeal</td><td>25</td><td>20</td><td>15</td><td>20</td><td>45</td></tr><tr><td>Other</td><td>155</td><td>80</td><td>85</td><td>75</td><td>105</td></tr><tr><td>Total</td><td>1290</td><td>1155</td><td>1080</td><td>955</td><td>880</td></tr></table>

An excellent book on graphical methods in general is that by Tufte (1983), and graphs for statistics are discussed by Moses (1987). Many innovative ideas for descriptive methods are described by Tukey (1977).

![](../images/03_Describing_data/img16.jpg)


## EXERCISES

3.1 The table overleaf shows some data for 65 patients with rheumatoid arthritis treated with sodium aurothiomalate (SA) (Ayesh et al., 1987). The total dose of SA is shown, together with values of the sulphoxida- tion index (SI), which measures the capacity to convert organic divalent alkyl sulphide to its corresponding sulphoxide form. The patients have been separated into 28 without and 37 with major adverse reactions to the drug.

(a) Some values of SI are given as  $\mathbf{\omega}^{*} > 80.0^{\circ}$  . What is the name given to observations like this?

(b) What is the difficulty about drawing histograms of SI in each group? What shape are the distributions?

(c) Give two reasons why it is preferable to calculate the median rather than the mean to describe the average SI value.

(d) Obtain the median SI for each group of patients. (This should take less than ten seconds.)

(e) Obtain the median total dose of SA for the group with adverse reactions.

(f) Produce stem-and-leaf diagrams to compare the age distributions in the two groups.

(g) Do the data support the idea that patients experiencing adverse reactions were on average older than those without adverse reactions?

<table>
  <tr>
    <td rowspan="2"></td> 
    <td colspan="3">Without adverse reactions</td>
    <td rowspan="2"></td> 
    <td colspan="3">With adverse reactions</td>
  </tr>
  <tr>
    <td>Age</td><td>Total dose of SA (mg)</td><td>SI</td> 
    <td>Age</td><td>Total dose of SA (mg)</td><td>SI</td> 
  </tr>
  <tr><td>1</td><td>44</td><td>1560</td><td>1.0</td><td>1</td><td>53</td><td>360</td><td>2.0</td></tr>
  <tr><td>2</td><td>65</td><td>1310</td><td>1.2</td><td>2</td><td>74</td><td>2010</td><td>2.0</td></tr>
  <tr><td>3</td><td>58</td><td>850</td><td>1.2</td><td>3</td><td>29</td><td>1390</td><td>2.0</td></tr>
  <tr><td>4</td><td>57</td><td>1250</td><td>1.7</td><td>4</td><td>53</td><td>660</td><td>3.0</td></tr>
  <tr><td>5</td><td>51</td><td>950</td><td>1.8</td><td>5</td><td>67</td><td>1135</td><td>3.5</td></tr>
  <tr><td>6</td><td>64</td><td>850</td><td>1.8</td><td>6</td><td>67</td><td>510</td><td>5.3</td></tr>
  <tr><td>7</td><td>33</td><td>1200</td><td>1.9</td><td>7</td><td>54</td><td>410</td><td>5.7</td></tr>
  <tr><td>8</td><td>61</td><td>1390</td><td>2.0</td><td>8</td><td>51</td><td>910</td><td>6.5</td></tr>
  <tr><td>9</td><td>49</td><td>1450</td><td>2.3</td><td>9</td><td>57</td><td>360</td><td>13.0</td></tr>
  <tr><td>10</td><td>67</td><td>3300</td><td>2.8</td><td>10</td><td>62</td><td>1260</td><td>13.0</td></tr>
  <tr><td>11</td><td>39</td><td>2760</td><td>2.8</td><td>11</td><td>51</td><td>560</td><td>13.9</td></tr>
  <tr><td>12</td><td>42</td><td>860</td><td>3.4</td><td>12</td><td>68</td><td>1135</td><td>14.7</td></tr>
  <tr><td>13</td><td>35</td><td>1810</td><td>3.4</td><td>13</td><td>50</td><td>1410</td><td>15.4</td></tr>
  <tr><td>14</td><td>31</td><td>1310</td><td>3.8</td><td>14</td><td>38</td><td>1110</td><td>15.7</td></tr>
  <tr><td>15</td><td>37</td><td>1250</td><td>3.8</td><td>15</td><td>61</td><td>960</td><td>16.6</td></tr>
  <tr><td>16</td><td>43</td><td>1210</td><td>4.2</td><td>16</td><td>59</td><td>1310</td><td>16.6</td></tr>
  <tr><td>17</td><td>39</td><td>1460</td><td>4.9</td><td>17</td><td>68</td><td>910</td><td>16.6</td></tr>
  <tr><td>18</td><td>53</td><td>2310</td><td>5.4</td><td>18</td><td>44</td><td>1235</td><td>22.0</td></tr>
  <tr><td>19</td><td>44</td><td>1360</td><td>5.9</td><td>19</td><td>57</td><td>2950</td><td>22.3</td></tr>
  <tr><td>20</td><td>41</td><td>1910</td><td>6.2</td><td>20</td><td>49</td><td>360</td><td>33.2</td></tr>
  <tr><td>21</td><td>72</td><td>910</td><td>12.0</td><td>21</td><td>49</td><td>1935</td><td>47.0</td></tr>
  <tr><td>22</td><td>61</td><td>1410</td><td>18.8</td><td>22</td><td>63</td><td>1660</td><td>61.0</td></tr>
  <tr><td>23</td><td>48</td><td>2460</td><td>47.0</td><td>23</td><td>29</td><td>435</td><td>65.0</td></tr>
  <tr><td>24</td><td>59</td><td>1350</td><td>70.0</td><td>24</td><td>53</td><td>310</td><td>65.0</td></tr>
  <tr><td>25</td><td>72</td><td>810</td><td>&gt;80.0</td><td>25</td><td>53</td><td>310</td><td>&gt;80.0</td></tr>
  <tr><td>26</td><td>59</td><td>1460</td><td>&gt;80.0</td><td>26</td><td>49</td><td>410</td><td>&gt;80.0</td></tr>
  <tr><td>27</td><td>71</td><td>760</td><td>&gt;80.0</td><td>27</td><td>42</td><td>690</td><td>&gt;80.0</td></tr>
  <tr><td>28</td><td>53</td><td>910</td><td>&gt;80.0</td><td>28</td><td>44</td><td>910</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>29</td><td>59</td><td>1260</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>30</td><td>51</td><td>1260</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>31</td><td>46</td><td>1310</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>32</td><td>46</td><td>1350</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>33</td><td>41</td><td>1410</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>34</td><td>39</td><td>1460</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>35</td><td>62</td><td>1535</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>36</td><td>49</td><td>1560</td><td>&gt;80.0</td></tr>
  <tr><td></td><td></td><td></td><td></td><td>37</td><td>53</td><td>2050</td><td>&gt;80.0</td></tr>
</table>


3.2 (a) Does Figure 3.1 indicate that professional pilots are more likely to have an aviation accident than other groups?

The following table shows the data that were plotted in Figure 3.1, together with the aviation accident rates per 100000 hours of recent flight time (Booze, 1977).

<table><tr><td></td><td>Number of accidents</td><td>Rate per 1000*</td><td>Rate per 100000 hr</td></tr><tr><td>Professional pilots</td><td>1302</td><td>15.9</td><td>0.2</td></tr><tr><td>Lawyers</td><td>57</td><td>11.0</td><td>1.5</td></tr><tr><td>Farmers</td><td>166</td><td>10.1</td><td>1.3</td></tr><tr><td>Sales representatives</td><td>137</td><td>9.0</td><td>1.2</td></tr><tr><td>Physicians</td><td>76</td><td>8.7</td><td>1.8</td></tr><tr><td>Mechanics and repairmen</td><td>44</td><td>6.9</td><td>1.5</td></tr><tr><td>Policemen and detectives</td><td>48</td><td>6.6</td><td>1.8</td></tr><tr><td>Managers and administrators</td><td>643</td><td>6.0</td><td>0.7</td></tr><tr><td>Engineers</td><td>125</td><td>4.7</td><td>1.1</td></tr><tr><td>Teachers</td><td>43</td><td>4.2</td><td>1.1</td></tr><tr><td>Housewives</td><td>29</td><td>3.7</td><td>3.2</td></tr><tr><td>Academic students</td><td>188</td><td>3.2</td><td>3.7</td></tr><tr><td>Armed Forces Members</td><td>111</td><td>1.6</td><td>0.7</td></tr></table>

*in the specified occupation

(b) The rates per 100000 hours can also be made into a bar diagram. From such a diagram, or from the figures shown in the table, which two groups of pilots had most accidents? Why do the two sets of figures give different answers? (A scatter diagram is useful to see the relation between the two.)

3.3 Calculate the centiles used to construct the box- and- whisker plot in Figure 3.12 using the method of calculation given in section 3.4.2.