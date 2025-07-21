# 11 Relation between two continuous variables


## 11.1 ASSOCIATION, PREDICTION AND AGREEMENT

A high proportion of statistical analyses are carried out to study the relation between two variables within a group of subjects. Three main purposes of such analyses might be:

1. to assess whether the two variables are associated, that is, if the values of one variable tend to be higher (or, alternatively, lower) for higher values of the other variable; 
2. to enable the value of one variable to be predicted from any known value of the other variable; 
3. to assess the amount of agreement between the values of the two variables; most commonly this situation arises in the comparison of alternative ways of measuring or assessing the same thing.

In this chapter I shall consider the first two possibilities. The question of agreement is dealt with in section 14.2.

Methods for studying association between categorical variables were introduced in Chapter 10. In this chapter I shall consider comparable methods for assessing the association between continuous variables, using the method known as correlation. In contrast, this is the first mention of methods for predicting one variable from another. This chapter considers the prediction of one continuous variable from another, for which the technique of linear regression is used. The slightly different technique of logistic regression, which is needed when one variable is categorical, will be considered in Chapter 12.

This chapter is devoted to two techniques, correlation and regression, which are so often presented together that it is easy to get the impression that they are inseparable. In fact, they have distinct purposes and it is relatively rare that one is genuinely interested in performing both analyses on the same set of data. The confusion that clearly exists between correlation and regression may well stem from poor differentiation between the techniques in many textbooks, which in turn arises from the very close mathematical relation between the two methods. Clearly the rationale for

carrying out a particular analysis is of paramount importance, and this aspect will be particularly stressed in this chapter.


## 11.2 CORRELATION

Correlation is the method of analysis to use when studying the possible association between two continuous variables. Figure 11.1 shows the relation between body fat percentage  $(\% \mathrm{fat})$  and age among 18 normal adults aged 23 to 61. The data come from a small study investigating a new method of assessing body composition. There appears to be some association between the values of the two variables; we can see that there is a tendency for the older people to have a higher percentage of body fat.

If we want to measure the degree of association, this can be done by calculating the correlation coefficient, often loosely just called the correlation. The standard method (often ascribed to Pearson) leads to a quantity called  $r$  which can take any value from  $- 1$  to  $+1$ . This correlation coefficient  $r$  measures the degree of 'straight- line' association between the values of the two variables. Thus a value of  $+1.0$  or  $- 1.0$  is obtained if all the points in a scatter diagram lie on a perfect straight line, as shown in Figure 11.2. Also shown are examples of data with intermediate values of  $r$ . The correlation between two variables is positive if higher values of one variable are associated with higher values of the other and negative if one variable tends to be lower as the other gets higher. A correlation of around zero indicates that there is no linear relation between the values of the two

![](../images/11_Relation_between_two_continuous_variables/img1.jpg)  
Figure 11.1 Body fat percentage (%fat) related to age for 18 normal adults (Mazess et al., 1984).

variables (i.e. they are uncorrelated). Clearly the variables in Figure 11.1 are positively correlated; in fact the correlation coefficient can be calculated to be  $r = 0.79$ .

What are we measuring with  $r$ ? In essence  $r$  is a measure of the scatter of the points around an underlying linear trend: the greater the spread of the points the lower the correlation. In the study already referred to, dual- photon absorptiometry was used to derive a measure of body fat as a percentage of total body mass. Figure 11.3 shows  $\%$  fat plotted against weight for the same 18 subjects. It is clear that there is considerable scatter with no obvious underlying relationship between  $\%$  fat and weight. The correlation between these two variables is 0.03, confirming the visual impression.

An example of very strong correlation is given by data relating maternal and fetal weight of different species of mammal. Figure 11.4 shows a plot of these data after log transformation. The correlation between the two variables is 0.985, and the relation is clearly remarkably consistent from bats at one extreme through to whales at the other.


### 11.2.1 Data distribution

The correlation coefficient can be calculated for any data set. However, there is a restriction on the validity of the associated hypothesis test, which is that the two variables are observed on a random sample of individuals and that the data for at least one of the variables have a Normal distribution in the population. For the calculation of a valid confidence interval for  $r$  both variables should have a Normal distribution.

In practice, therefore, it is preferable for both variables to have approximately Normal distribution for any use of Pearson's  $r$ . Data of this type will display a roughly elliptical pattern, with the degree of elongation of the ellipse being related to the correlation coefficient. For small samples, or where  $r$  is near  $+1$  or  $- 1$ , this feature may be hard to detect, however. The easiest way to check the validity of the hypothesis test is by examining a scatter diagram of the data, which ought to be produced as a matter of routine whenever correlation coefficients are calculated. It should be easy to tell whether the data show a reasonably elliptical pattern. Normal plots could be produced, and Normality can be tested formally by the Shapiro- Wilk W test (see Chapter 7), but it is not really necessary because the scatter plot will usually suffice.

If the data do not have a Normal distribution either or both of the variables can be transformed, as for the data shown in Figure 11.4, or a non- parametric correlation coefficient can be calculated, as described in section 11.4.

The mathematical calculations for  $r$ , its confidence interval, and the associated hypothesis tests are shown in section 11.7.

280 Relation between two continuous variables

![](../images/11_Relation_between_two_continuous_variables/img2.jpg)

(b)

![](../images/11_Relation_between_two_continuous_variables/img3.jpg)

![](../images/11_Relation_between_two_continuous_variables/img4.jpg)

![](../images/11_Relation_between_two_continuous_variables/img5.jpg)  
(d)

![](../images/11_Relation_between_two_continuous_variables/img6.jpg)  
Figure 11.2 Data with correlation coefficients (r) of (a) 1.0; (b) -1.0; (c) 0.0; (d) 0.3; (e) -0.5; (f) 0.7.

![](../images/11_Relation_between_two_continuous_variables/img7.jpg)

![](../images/11_Relation_between_two_continuous_variables/img8.jpg)  
Figure 11.3 Relation between percentage of fat and bodyweight in 18 normal adults (Mazess et al., 1984).

![](../images/11_Relation_between_two_continuous_variables/img9.jpg)  
Figure 11.4 Relation between total fetal weight and non-pregnant maternal weight in 121 species of mammal (Leitch et al., 1959).


### 11.2.2 Confidence interval for  $r$

11.2.2 Confidence interval for  $r$ We can obtain a confidence interval for the correlation in the population, on the assumption that the sample is representative. For the data in Figure 11.1 the correlation coefficient is 0.79. Using the method described in section 11.7 we can obtain the  $95\%$  confidence interval for the correlation coefficient as being from 0.52 to 0.92. As is usual in small samples, the confidence interval is wide, but it does suggest that there really is quite a strong association between the two variables.


### 11.2.3 Hypothesis test for  $r$

11.2.3 Hypothesis test for  $r$ There is a simple test of significance of the null hypothesis of no association which is based on the  $t$  distribution. The method is described in section 11.7. However, Table B7 shows critical values which allow observed values of  $r$  to be looked up directly; these should suffice for most practical purposes. For example, the correlation between  $\%$  fat and age in the data shown in Figure 11.1 was 0.79, and from Table B7 we can see that  $\mathbf{P}< 0.001$ .


## 11.3 USE AND MISUSE OF CORRELATION

As well as the distributional assumptions mentioned in section 11.2.1, another restriction is that all the observations should be independent. In practice this means that only one observation of each variable should come from each individual in the study. The analysis is not valid when there is more than one observation for some or all of the subjects. For example, it would not be correct to use correlation to relate, say, blood pressure and oestrogen levels in pregnant women with varying numbers of observations at different gestational ages. In such circumstances a proper analysis can be very complex.

Even when the assumptions just mentioned are not violated the use of correlation is not as simple as it looks. Indeed, misuse of correlation is so common that some statisticians have wished that the method had never been devised. The most obvious general misuse occurs in studies in which large numbers of variables have been recorded. Clearly, with many variables it is possible to calculate hundreds of correlation coefficients and then pick out just those which are statistically significant. While 'data- dredging' is acceptable in a limited way in exploratory analyses, when taken to extremes the scope for over- interpretation is considerable. For example, even with only ten variables 45 correlations between pairs of variables can be calculated. This problem is discussed further in section 11.8.

There are several rather more specific misuses of correlation, each somewhat different in nature but all frequently seen. Six types are discussed below. In each case there is nothing wrong with the mathematical calculations, but the interpretation is flawed.


### 11.3.1 Spurious correlations involving time

The correlation of two variables both of which have been recorded repeatedly over time can be grossly misleading. By such means one may demonstrate relationships between the price of petrol and the divorce rate, consumption of butter and farmers' incomes (a negative relation), and so on. Another example was given in section 5.13.

The same caution applies to studying two variables over time for an individual. Such correlations are often spurious: it is necessary to remove the time trends from such data before correlating them, and this is an area that requires expert assistance. Time- related data are considered further in section 14.6.


### 11.3.2 Restricted sampling of individuals

As already indicated, there is an implicit assumption that the subjects being studied are a random sample (or nearly so) from some specified population of individuals, such as pregnant women or hypertensive men. Deliberately adding or taking away from our sample some individuals because of their values of one of the variables can have a dramatic effect on the correlation. For example, if we added a few children to the data set shown in Figure 11.1 we would increase the correlation considerably, whereas if we excluded anyone taller than  $180~\mathrm{cm}$  we would decrease the correlation (to  $r = 0.34$ ). Neither manoeuvre would allow a valid interpretation of the correlation coefficient because the sample would no longer be a proper random sample. Correlation analysis is especially sensitive to the sample selection because the between subject variation in each variable enters directly into the calculation.


### 11.3.3 Mixed samples

It may be misleading to calculate the correlation when the sample comprises different subgroups. For example, the body fat data in Figure 11.1 relate to 14 women and 4 men. Body fat percentage tends to be lower in men, and it happens that the four men in this study were considerably younger than the women, so mixing the sexes tends to inflate the correlation (see Figure 11.5). It would therefore be better to consider the

![](../images/11_Relation_between_two_continuous_variables/img10.jpg)  
Figure 11.5 % fat by age showing males (+) and females (O).

women only, for whom we get rather lower  $r = 0.51$ . Another consequence of the mixing of subgroups is that the data (when mixed) may not be Normally distributed, but the effect cannot be detected unless the groups are very different and the sample is large.


### 11.3.4 Assessing agreement

In medical research there is frequently the need to compare two methods of measuring the same quantity. Laboratory methods throw up many such problems, but they are also common in clinical medicine, particularly where it is not possible to measure directly the quantity of interest. Blood pressure is an obvious example.

The most common method of analysing such data is to calculate the correlation coefficient, but this is a misconceived analysis. As we have seen, the correlation coefficient measures the degree of association between two quantities; it does not measure how closely they agree (Bland and Altman, 1986). Method comparison studies are discussed in detail in section 14.2.


### 11.3.5 Change related to initial value

A rather different problem occurs with the use of correlation to study the relation between an initial measurement and the change in that measure.

ment over time. For example, we may be interested in seeing whether a diet designed to lower serum cholesterol was more effective in people with higher initial values of serum cholesterol. This is a reasonable question, but unfortunately it turns out that the use of correlation here is misleading. This is because for any two quantities  $X$  and  $Y$ ,  $X$  will be correlated with  $X - Y$ . Indeed, even if  $X$  and  $Y$  are samples of random numbers we would expect the correlation between  $X$  and  $X - Y$  to be 0.7. (You can try this with some numbers from the table of random numbers in Table B13. ) In other words, we expect to obtain a large correlation between initial serum cholesterol and the change in serum cholesterol even if the diet is ineffective. The name for the phenomenon is regression to the mean, giving another confusion between regression and correlation.

The simplest way around this problem is to take the average of the initial and final measurement and calculate the correlation between this quantity and the observed change. In the above notation this means correlating  $(X + Y) / 2$  with  $X - Y$ . If this correlation is large it may reasonably be inferred that higher initial levels of the variable are associated with larger falls over time (or smaller rises). However, the best approach to this type of data is complex: further discussion is given by Blomqvist (1986) and Hayes (1988). There is more to this type of problem than is apparent, and statistical advice is recommended.


### 11.3.6 Relating a part to the whole

A similar situation arises if we study the relation between a constituent and the total amount. For example, we would expect to find a correlation between:

1. height at age 5 and adult height;

2. length of the luteal phase and length of the whole menstrual cycle; and 
3. intake of protein and intake of calories;

because in each case the second quantity contains the first, although not necessarily explicitly. There may be no relation (or even a negative relation) between the first quantity and its complement within the total. As with the problem discussed in the previous section, expressing the analysis as the correlation between  $X$  and  $X + Y$  shows that the two quantities are related whatever  $X$  and  $Y$  are.


## 11.4 RANK CORRELATION

The concept of ranks was introduced in Chapter 2 and applications to the comparison of continuous data from two groups were shown in Chapter 9.

A similar use of ranks is possible when considering the relation between two variables. The idea here is simply to rank a set of subjects for each variable and compare the orderings. For example, Table 11.1 shows the data for age and measurements of  $\%$  fat from Figure 11.1, together with the ranks of the observations. Where two values are the same the average rank is assigned to both.

To make the relationship clearer, the subjects have been ordered by age. Arranging data like this allows us to get a quick impression about the possibility that the two variables are associated, as it is quite easy to judge whether the values in the second column of ranks are tending to increase or decrease.

There are two commonly used methods of calculating the rank correlation coefficient, one due to Spearman and one to Kendall. It is easier in general to calculate Spearman's  $r_{s}$  (often called Spearman's  $\rho$  (rho)) than Kendall's  $\tau$  (tau), so it is the Spearman coefficient that is used here. The calculations are shown in section 11.7. In fact, Spearman's rank correlation coefficient  $r_{s}$  is exactly the same as the Pearson correlation coefficient  $r$  calculated on the ranks of the observations.

The rank correlation between the age and  $\%$  fat data shown in Table 11.1 is 0.75, which is close to the value 0.79 obtained as the standard

Table 11.1 Age and  $\%$  fat (measured by dual-photon ab sorptiometry) for 18 normal adults (Mazess et al., 1984)  

<table><tr><td>Subject</td><td>Age</td><td>Rank</td><td>%Fat</td><td>Rank</td></tr><tr><td>1</td><td>23</td><td>1.5</td><td>9.5</td><td>2</td></tr><tr><td>2</td><td>23</td><td>1.5</td><td>27.9</td><td>7</td></tr><tr><td>3</td><td>27</td><td>3.5</td><td>7.8</td><td>1</td></tr><tr><td>4</td><td>27</td><td>3.5</td><td>17.8</td><td>3</td></tr><tr><td>5</td><td>39</td><td>5</td><td>31.4</td><td>11</td></tr><tr><td>6</td><td>41</td><td>6</td><td>25.9</td><td>5</td></tr><tr><td>7</td><td>45</td><td>7</td><td>27.4</td><td>6</td></tr><tr><td>8</td><td>49</td><td>8</td><td>25.2</td><td>4</td></tr><tr><td>9</td><td>50</td><td>9</td><td>31.1</td><td>10</td></tr><tr><td>10</td><td>53</td><td>10.5</td><td>34.7</td><td>16</td></tr><tr><td>11</td><td>53</td><td>10.5</td><td>42.0</td><td>18</td></tr><tr><td>12</td><td>54</td><td>12</td><td>29.1</td><td>8</td></tr><tr><td>13</td><td>56</td><td>13</td><td>32.5</td><td>12</td></tr><tr><td>14</td><td>57</td><td>14</td><td>30.3</td><td>9</td></tr><tr><td>15</td><td>58</td><td>15.5</td><td>33.0</td><td>13</td></tr><tr><td>16</td><td>58</td><td>15.5</td><td>33.8</td><td>14</td></tr><tr><td>17</td><td>60</td><td>17</td><td>41.1</td><td>17</td></tr><tr><td>18</td><td>61</td><td>18</td><td>34.5</td><td>15</td></tr></table>

Pearson correlation. This is not always the case, of course. The two methods will tend to differ when the data deviate from an elliptical shape in the scatter diagram. As this is an indication against the calculation of Pearson's  $r$ , it follows that when  $r$  and  $r_{s}$  differ noticeably it is  $r_{s}$  that should be used. In practice we do not calculate both  $r$  and  $r_{s}$ , but choose the method according to the appearance of the scatter diagram. Rank correlation may be used whatever type of pattern is seen and it has the advantage of not specifically assessing linear association but more general association. This may be seen, for example, from the fact that the value of  $r_{s}$  is unchanged by logarithmic transformation of either of the variables. All my earlier cautions against the use of correlation apply equally to rank correlation, however.

Hughes and Jones (1985) studied the relation between average intake of dietary fibre and the average age of menarche in 46 countries. They quoted a correlation coefficient of  $r = 0.84$  ( $\mathbf{P}< 0.0001$ ). However, as Figure 11.6 shows, the data tend to cluster in two main groups, corresponding roughly to developed and developing countries, and there is one extreme point. The data are thus not near to a Normal distribution for either variable. We might, therefore, prefer to use rank correlation, which gives  $r_{s} = 0.69$ . We can interpret identical values of  $r$  and  $r_{s}$  as being roughly equivalent, so from Table B7 the rather weaker rank correlation is also highly significant ( $\mathbf{P}< 0.0001$ ).

![](../images/11_Relation_between_two_continuous_variables/img11.jpg)  
Figure 11.6 Relation between average daily intake of dietary fibre and mean age of menarche in 46 countries (Hughes and Jones, 1985).

We can calculate a confidence interval for  $r_{s}$  in exactly the same way as for  $r$ . Following the method given in section 11.7, the  $95\%$  confidence interval for the fibre and menarche data is from 0.32 to 0.87. The data are thus compatible with a wide range of possibilities for the population correlation, despite the very small  $\mathbf{P}$  value.

I mentioned in section 10.9.2 that rank correlation can be used to assess the degree of association between two ordered categorical variables. Clearly there will be huge numbers of ties in this situation so it is essential to use the version of the method that allows for them (see section 11.7.2).

Rank correlation should be used more often. It is the only non- parametric method which gives as much information as its parametric equivalent (rather than just a  $\mathbf{P}$  value), and it is of wider validity. It is easy to perform using widely available computer programs by ranking the data and performing the usual Pearson correlation analysis.


## 11.5 ADJUSTING A CORRELATION FOR ANOTHER VARIABLE

Sometimes we have data on a third variable that might have influenced the observed relationship between two other variables. We can adjust for the third variable by calculating the partial correlation coefficient. We can consider this to be the estimated correlation between two variables among individuals (or countries or whatever) with the same value of the third variable. The same approach can be used for Pearson's or Spearman's correlation coefficient.

Begg and Hearns (1966) were interested in the relative contributions of haematocrit (packed cell volume, PCV), fibrinogen and other proteins (albumin and globulin) to the viscosity of blood. Table 11.2 shows their data from 32 hospital patients. The correlation coefficients between the four variables are shown as a correlation matrix in Table 11.3. The correlation between blood viscosity and PCV was 0.88  $(\mathbf{P}< 0.001)$  and between blood viscosity and fibrinogen was 0.46  $(\mathbf{P}< 0.01)$ . The authors used partial correlation to see if the association of blood viscosity and fibrinogen remained after allowing for the association with PCV. The partial correlation is 0.21  $(\mathbf{P} = 0.25)$ , suggesting that the association between blood viscosity and fibrinogen can be largely explained by variation in PCV.

James (1985) gave data on dizygotic (DZ) twinning rates and average daily milk consumption for 19 European countries in relation to latitude (see Table 11.4). James was especially interested in the relation between DZ twinning rate and latitude, shown in Figure 11.7. The rank correlation is 0.68, which is highly significant  $(\mathbf{P}< 0.01)$ . It is clear that the values of all three variables tend to increase together so we might ask whether the

observed association could be 'explained' (statistically) by variation in milk consumption. Information on per capita consumption of milk was available for 15 countries; for these the correlation between DZ twinning rate and

Table 11.2 Data on blood viscosity, packed cell volume (PCV), plasma fibrinogen and other proteins from 32 hospital patients (Begg and Hearns, 1966)  

<table><tr><td>Patient</td><td>Blood viscosity (cP)</td><td>PCV (%)</td><td>Plasma fibrinogen (mg/100 ml)</td><td>Plasma protein (g/100 ml)</td></tr><tr><td>1</td><td>3.71</td><td>40</td><td>344</td><td>6.27</td></tr><tr><td>2</td><td>3.78</td><td>40</td><td>330</td><td>4.86</td></tr><tr><td>3</td><td>3.85</td><td>42.5</td><td>280</td><td>5.09</td></tr><tr><td>4</td><td>3.88</td><td>42</td><td>418</td><td>6.79</td></tr><tr><td>5</td><td>3.98</td><td>45</td><td>774</td><td>6.40</td></tr><tr><td>6</td><td>4.03</td><td>42</td><td>388</td><td>5.48</td></tr><tr><td>7</td><td>4.05</td><td>42.5</td><td>336</td><td>6.27</td></tr><tr><td>8</td><td>4.14</td><td>47</td><td>431</td><td>6.89</td></tr><tr><td>9</td><td>4.14</td><td>46.75</td><td>276</td><td>5.18</td></tr><tr><td>10</td><td>4.20</td><td>48</td><td>422</td><td>5.73</td></tr><tr><td>11</td><td>4.20</td><td>46</td><td>280</td><td>5.89</td></tr><tr><td>12</td><td>4.27</td><td>47</td><td>460</td><td>6.58</td></tr><tr><td>13</td><td>4.27</td><td>43.25</td><td>412</td><td>5.67</td></tr><tr><td>14</td><td>4.37</td><td>45</td><td>320</td><td>6.23</td></tr><tr><td>15</td><td>4.41</td><td>50</td><td>502</td><td>4.99</td></tr><tr><td>16</td><td>4.64</td><td>45</td><td>550</td><td>6.37</td></tr><tr><td>17</td><td>4.68</td><td>51.25</td><td>414</td><td>6.40</td></tr><tr><td>18</td><td>4.73</td><td>50.25</td><td>304</td><td>6.00</td></tr><tr><td>19</td><td>4.87</td><td>49</td><td>472</td><td>5.94</td></tr><tr><td>20</td><td>4.94</td><td>50</td><td>728</td><td>5.16</td></tr><tr><td>21</td><td>4.95</td><td>50</td><td>716</td><td>6.29</td></tr><tr><td>22</td><td>4.96</td><td>49</td><td>400</td><td>5.96</td></tr><tr><td>23</td><td>5.02</td><td>50.5</td><td>576</td><td>5.90</td></tr><tr><td>24</td><td>5.02</td><td>51.25</td><td>354</td><td>5.81</td></tr><tr><td>25</td><td>5.12</td><td>49.5</td><td>392</td><td>5.49</td></tr><tr><td>26</td><td>5.15</td><td>56</td><td>352</td><td>5.41</td></tr><tr><td>27</td><td>5.17</td><td>50</td><td>572</td><td>6.24</td></tr><tr><td>28</td><td>5.18</td><td>47</td><td>634</td><td>6.50</td></tr><tr><td>29</td><td>5.38</td><td>53.25</td><td>458</td><td>6.60</td></tr><tr><td>30</td><td>5.77</td><td>57</td><td>1070</td><td>4.82</td></tr><tr><td>31</td><td>5.90</td><td>54</td><td>488</td><td>5.70</td></tr><tr><td>32</td><td>5.90</td><td>54</td><td>488</td><td>5.70</td></tr></table>

latitude was 0.61. The rank correlation between milk consumption and latitude is 0.92 and between milk consumption and DZ twinning rate it is 0.61. We can calculate the partial correlation between latitude (L) and DZ twinning rate (T) adjusted for milk consumption (M) as  $r_{s}(LT|M) = 0.18$  (see section 11.7.3). This small value suggests that one possible explanation for the observed association between DZ twinning and latitude might be milk consumption. Interpretation of such international correlations is

Table 11.3 Correlation matrix of the data in Table 11.2  

<table><tr><td></td><td>Viscosity</td><td>PCV</td><td>Fibrinogen</td></tr><tr><td>PCV</td><td>0.8788</td><td></td><td></td></tr><tr><td>Fibrinogen</td><td>0.4573</td><td>0.4155</td><td></td></tr><tr><td>Protein</td><td>-0.1011</td><td>-0.1575</td><td>-0.0512</td></tr></table>

Table 11.4 Latitude, age-standardized dizygotic twinning rates and daily per capita consumption of milk products (James, 1985). Figures in brackets are ranks  

<table><tr><td>Country</td><td>Latitude (L)</td><td>DZ twinning (T)</td><td>Milk consumption rate/1000(M)</td></tr><tr><td>Portugal</td><td>40 (1.5)</td><td>6.5 (2)</td><td>3.8</td></tr><tr><td>Greece</td><td>40 (1.5)</td><td>8.8 (13)</td><td>7.7</td></tr><tr><td>Spain</td><td>41 (3)</td><td>5.9 (1)</td><td>8.2</td></tr><tr><td>Bulgaria</td><td>42 (4)</td><td>7.0 (3)</td><td>-</td></tr><tr><td>Italy</td><td>44 (5)</td><td>8.6 (11.5)</td><td>6.5</td></tr><tr><td>France</td><td>47 (6.5)</td><td>7.1 (4)</td><td>10.9</td></tr><tr><td>Switzerland</td><td>47 (6.5)</td><td>8.1 (7.5)</td><td>-</td></tr><tr><td>Austria</td><td>48 (8)</td><td>7.5 (6)</td><td>15.9</td></tr><tr><td>Belgium</td><td>51 (9.5)</td><td>7.3 (5)</td><td>11.6</td></tr><tr><td>FR Germany</td><td>51 (9.5)</td><td>8.2 (9)</td><td>14.1</td></tr><tr><td>Holland</td><td>52 (11.5)</td><td>8.1 (7.5)</td><td>18.9</td></tr><tr><td>GDR</td><td>52 (11.5)</td><td>9.1 (16)</td><td>-</td></tr><tr><td>England and Wales</td><td>53 (13.5)</td><td>8.9 (14.5)</td><td>17.1</td></tr><tr><td>Eire</td><td>53 (13.5)</td><td>11.0 (18)</td><td>24.4</td></tr><tr><td>Scotland</td><td>56 (15.5)</td><td>8.9 (14.5)</td><td>-</td></tr><tr><td>Denmark</td><td>56 (15.5)</td><td>9.6 (17)</td><td>16.8</td></tr><tr><td>Sweden</td><td>60 (17)</td><td>8.6 (11.5)</td><td>20.9</td></tr><tr><td>Norway</td><td>61 (18)</td><td>8.3 (10)</td><td>19.3</td></tr><tr><td>Finland</td><td>62 (19)</td><td>12.1 (19)</td><td>30.4</td></tr></table>

![](../images/11_Relation_between_two_continuous_variables/img12.jpg)  
Figure 11.7 Relation between latitude and dizygotic twinning rate in 19 European countries (James, 1985).

particularly difficult, however. Note that correlation is frequently used for this type of data, although the countries are never randomly sampled as they technically should be. Section 11.8 discusses the general problems of interpreting correlation coefficients.

Partial correlation is not used a great deal in medical studies. The relation between three or more variables is usually investigated using the more informative multiple regression, which will be described in section 12.4. However, the method of calculating the partial correlation is explained in section 11.7.3.


## 11.6 USE OF THE CORRELATION COEFFICIENT IN ASSESSING NON-NORMALITY

In section 7.5.2 I described the use of the Normal plot to get a visual assessment of how compatible a sample of observations is with having been drawn from a population with a Normal distribution. I described the use of the Shapiro- Wilk W test, but this is not available in most statistical packages and is too difficult to perform by hand. A much simpler alternative is to use the similar Shapiro- Francia  $W'$  test (Royston, 1983).

The correlation coefficient assesses the degree of straight- line association between the values of two variables. It can thus be used to assess the straightness of a Normal plot, and so whether the data are compatible with the null hypothesis of Normality. The Normal plot is a plot of the observed

data against the Normal scores (see section 7.5.4), so we need the Pearson correlation coefficient between these two quantities, which I will call  $r_{N}$ .

We cannot use the usual tables for assessing this correlation coefficient, because the null hypothesis here is that the correlation is 1, not 0. It is easier to consider the square of the correlation  $r_{N}$ , and it is  $r_{N}^{2}$  which is termed  $W'$ . Table B12 shows how to assess an observed value of  $W'$ .

Table 11.5 shows some blood glucose data that will be used later in this chapter, sorted into ascending order. Also shown are the expected cumulative frequencies  $(P_{i})$ , using the formula in section 7.5.2, and the corresponding Normal scores. The correlation coefficient between the raw data and the Normal scores is 0.9772, so the value of  $W'$  is  $0.9772^{2} = 0.955$ . From Table B12 we get  $P > 0.2$ , so that the data are compatible with being a sample from a Normal population.

Table 11.5 Fasting blood glucose data from 24 type 1 diabetic patients (Thuesen et al., 1985), with calculation of Normal scores  

<table><tr><td>Patient (i)</td><td>Blood glucose</td><td>Pi</td><td>Normal score</td></tr><tr><td>1</td><td>4.2</td><td>0.026</td><td>-1.947</td></tr><tr><td>2</td><td>4.9</td><td>0.067</td><td>-1.498</td></tr><tr><td>3</td><td>5.2</td><td>0.108</td><td>-1.236</td></tr><tr><td>4</td><td>5.3</td><td>0.149</td><td>-1.039</td></tr><tr><td>5</td><td>6.7</td><td>0.191</td><td>-0.875</td></tr><tr><td>6</td><td>6.7</td><td>0.232</td><td>-0.732</td></tr><tr><td>7</td><td>7.2</td><td>0.273</td><td>-0.603</td></tr><tr><td>8</td><td>7.5</td><td>0.314</td><td>-0.483</td></tr><tr><td>9</td><td>8.1</td><td>0.356</td><td>-0.370</td></tr><tr><td>10</td><td>8.6</td><td>0.397</td><td>-0.261</td></tr><tr><td>11</td><td>8.8</td><td>0.438</td><td>-0.156</td></tr><tr><td>12</td><td>9.3</td><td>0.479</td><td>-0.052</td></tr><tr><td>13</td><td>9.5</td><td>0.521</td><td>0.052</td></tr><tr><td>14</td><td>10.3</td><td>0.562</td><td>0.156</td></tr><tr><td>15</td><td>10.8</td><td>0.603</td><td>0.261</td></tr><tr><td>16</td><td>11.1</td><td>0.644</td><td>0.370</td></tr><tr><td>17</td><td>12.2</td><td>0.686</td><td>0.483</td></tr><tr><td>18</td><td>12.5</td><td>0.727</td><td>0.603</td></tr><tr><td>19</td><td>13.3</td><td>0.768</td><td>0.732</td></tr><tr><td>20</td><td>15.1</td><td>0.809</td><td>0.875</td></tr><tr><td>21</td><td>15.3</td><td>0.851</td><td>1.039</td></tr><tr><td>22</td><td>16.1</td><td>0.892</td><td>1.236</td></tr><tr><td>23</td><td>19.0</td><td>0.933</td><td>1.498</td></tr><tr><td>24</td><td>19.5</td><td>0.974</td><td>1.947</td></tr></table>


## 11.7 CORRELATION - MATHEMATICS AND WORKED EXAMPLES

(This section gives the mathematical formulae for the calculations described in the first part of this chapter, together with a worked example. It can be omitted without loss of continuity.)


### 11.7.1 Pearson's  $r$

The correlation coefficient that is usually calculated is called Pearson's  $r$  or the 'product- moment' correlation coefficient. If we have two variables  $X$  and  $Y$ , the correlation between them, denoted by  $r(X,Y)$  or usually just  $r$ , is given by

$$
r = \frac{\Sigma(x_{i} - \bar{x})(y_{i} - \bar{y})}{\sqrt{\Sigma(x_{i} - \bar{x})^{2}\Sigma(y_{i} - \bar{y})^{2}}}
$$

where  $x_{i}$  and  $y_{i}$  are the values of  $X$  and  $Y$  for the  $i^{\text{th}}$  individual. The value of  $r$  may loosely speaking be seen as a measure of the elongation of the ellipse that the data approximately fall within. The equation is clearly symmetric in that it does not matter which variable is  $X$  and which is  $Y$ .

For the purposes of calculation a simpler formula to use is

$$
r = \frac{\Sigma x_{i}y_{i} - (\Sigma x_{i})(\Sigma y_{i}) / n}{\sqrt{[\Sigma x_{i}^{2} - (\Sigma x_{i})^{2} / n][\Sigma y_{i}^{2} - (\Sigma y_{i})^{2} / n]}}
$$

for which it is necessary to obtain  $\Sigma x_{i}, \Sigma y_{i}, \Sigma x_{i}^{2}, \Sigma y_{i}^{2}$ , and  $\Sigma x_{i}y_{i}$ .

If you already have the means ( $\bar{x}$  and  $\bar{y}$ ) and standard deviations ( $s_{x}$  and  $s_{y}$ ) the formula simplifies to

$$
r = \frac{\Sigma x_{i}y_{i} - n\bar{x}\bar{y}}{(n - 1)s_{x}s_{y}}
$$

so that it is only necessary to calculate the extra term  $\Sigma x_{i}y_{i}$ .

This formula should not be used in a computer program, however, as inaccuracy is occasionally introduced through rounding errors. (The first equation for  $r$  should be used.)

#### (a) Confidence interval 

The sampling distribution of Pearson's  $r$  is not Normal, but we can transform  $r$  to get a quantity called  $z$  which does have a Normal sampling distribution. The transformation is

$$
z = \frac{1}{2}\log_{\mathrm{e}}\left(\frac{1 + r}{1 - r}\right).
$$

The standard error of  $z$  is approximately  $1 / \sqrt{n - 3}$  where  $n$  is the sample size, so we can construct a 95% confidence interval for  $z$  as being from

$$
z_{1} = z - 1.96 / \sqrt{n - 3}\qquad \mathrm{to}\qquad z_{2} = z + 1.96 / \sqrt{n - 3}.
$$

We back- transform the above values to get a confidence interval for the population correlation coefficient  $r$  as

$$
\frac{e^{2z_{1}} - 1}{e^{2z_{1}} + 1}\mathrm{to}\frac{e^{2z_{2}} - 1}{e^{2z_{2}} + 1}.
$$

The  $\%$  fat and age data in Figure 11.1 had a correlation of 0.7921 so we have

$$
z = \frac{1}{2}\log_{e}\left(\frac{1 + 0.7921}{1 - 0.7921}\right) = 1.0770.
$$

We can get a  $95\%$  confidence interval for  $z$  by calculating

$$
z_{1} = 1.0770 - 1.96 / \sqrt{15}
$$

and

$$
z_{2} = 1.0770 + 1.96 / \sqrt{15},
$$

giving 0.5710 to 1.5831. We back- transform these values to get a  $95\%$  confidence interval for  $r$  as

$$
\frac{e^{2\times 0.5710} - 1}{e^{2\times 0.5710} + 1}\mathrm{to}\frac{e^{2\times 1.5831} - 1}{e^{2\times 1.5831} + 1},
$$

or 0.52 to 0.92. Although the whole confidence interval is much greater than zero, it is very wide.

#### (b) Hypothesis test
The hypothesis test for the correlation coefficient may be performed very easily. Under the null hypothesis that there is no association in the population (i.e. zero correlation) it can be shown that the quantity

$$
r\sqrt{\frac{n - 2}{1 - r^{2}}}
$$

has a  $t$  distribution with  $n - 2$  degrees of freedom. Thus the null hypothesis of no association may be tested by looking this value up in the table of the  $t$  distribution (Table B4).

The  $\%$  fat and age data in Figure 11.1 had a correlation of 0.7921 so we have

$$
t = 0.7921\sqrt{\frac{16}{1 - 0.7921^{2}}} = 5.19
$$

on 16 degrees of freedom  $(\mathbf{P}< 0.001)$

However, Table B7 shows critical values for  $r$  itself, and this is much easier to use. This table will prove sufficient for most practical purposes.


### 11.7.2 Rank correlation

Spearman's rank correlation coefficient  $r_{s}$  is obtained by ranking in order the values of each of the two variables. An example is shown in Table 11.4. The simplest way to get  $r_{s}$  is to calculate Pearson's  $r$  on the ranks of the data. For the data on DZ twinning rate and latitude in Table 11.4 this gives  $r_{s} = 0.68$

There is an alternative approach which is simpler for hand calculation, but it assumes that there are no ties in the data. For each of the  $N$  subjects being studied the difference in the ranks,  $d_{i}$  , is calculated. Spearman's rank correlation coefficient is then given by

$$
r_{s} = 1 - \frac{6\sum_{i = 1}^{n}d_{i}^{2}}{N^{3} - N}
$$

This formula bears no obvious similarity to the formula for Pearson's  $r$  but gives the identical answer when there are no ties.

The ranks of the data on latitude and DZ twinning rate are shown in Table 11.4. The sum of the squares of the differences in the ranks is 366.5 so we have

$$
r_{s} = 1 - \frac{6\times366.5}{6859 - 19} = 0.68.
$$

Although the calculation of  $r_{s}$  should be modified when there are tied ranks in the data, the effect is small unless there are considerable numbers of ties. The latitude and DZ twinning data in Table 11.4 have several tied ranks but the value of  $r_{s}$  is 0.68, to two decimal places, whether the correction is made or not. The advantage of the use of the Pearson correlation coefficient calculated on the ranks is that ties are automatically dealt with. Also, of course, it is easy to perform with standard statistical software.

#### (a) Confidence interval

The distribution of  $r_{s}$  is similar to that of  $r$  for samples larger than about 10, so a confidence interval for  $r_{s}$  can be obtained using the method given above for  $r$

#### (b) Hypothesis test

Under the null hypothesis that there is no association in the population (i.e. zero correlation) it can be shown that for large samples  $(n > 30)$  the quantity

$$
r_{s}\sqrt{\frac{n - 2}{1 - r_{s}^{2}}}
$$

has a  $t$  distribution with  $n - 2$  degrees of freedom. Thus the null hypothesis of no association may be tested by looking this value up in the table of the  $t$  distribution (Table B4). Equivalently,  $r_{s}$  can be compared with the critical values in Table B7. For smaller samples Table B8 should be used.


### 11.7.3 Partial correlation

We can calculate the correlation between two variables after adjusting for a third if we have the correlation coefficients between each pair of variables, say  $r(AB)$ ,  $r(AC)$  and  $r(BC)$ . To adjust the correlation between variables  $A$  and  $B$  for the possible effect of variable  $C$  we calculate the partial correlation of  $A$  and  $B$  adjusted for  $C$  as

$$
r(AB|C) = \frac{r(AB) - r(AC)r(BC)}{\sqrt{[1 - r(AC)^2][1 - r(BC)^2]}}.
$$

Similarly the partial rank correlation is calculated as

$$
r_{s}(AB|C) = \frac{r_{s}(AB) - r_{s}(AC)r_{s}(BC)}{\sqrt{[1 - r_{s}(AC)^2][1 - r_{s}(BC)^2]}}.
$$

The hypothesis test for the partial correlation coefficient is performed in the same way as for the ordinary correlation coefficient, except that there are  $N - 3$  degrees of freedom. The correlations between pairs of variables in Table 11.4, omitting the four countries without milk consumption rates, were

$$
r_{s}(LT) = 0.6147, r_{s}(LM) = 0.9221, \text{and} r_{s}(TM) = 0.6059
$$

so that the partial rank correlation coefficient between latitude and DZ twinning rate adjusted for milk consumption is

$$
r_{s}(LT|M) = \frac{0.6147 - 0.9221 \times 0.6059}{\sqrt{(1 - 0.9221^2)(1 - 0.6059^2)}} = 0.18.
$$


## 11.8 INTERPRETATION OF CORRELATION

Correlation coefficients lie within the range  $- 1$  to  $+1$ , with the midpoint of zero indicating no linear association between the two variables. A very small correlation does not necessarily indicate that two variables are not associated, however. To be sure of this we should study a plot of the data, because it is possible that the two variables display a peculiar (i.e. non- linear) relationship. For example, we would not observe much, if any correlation between the average midday temperature and calendar month because there is a cyclic pattern. More common is the situation of a curved

relationship between two variables, such as between birthweight and length of gestation. In this case Pearson's  $r$  will underestimate the association as it is a measure of linear association. The rank correlation coefficient is better here as it assesses in a more general way whether the variables tend to rise together (or move in opposite directions).

It is surprising how unimpressive a correlation of 0.5 or even 0.7 is (Figure 11.2). As Table B7 shows, correlations of this magnitude are significant at the  $5\%$  level in samples as small as 16 and 9 respectively. Whether they are important is quite another matter. Feinstein (1985) commented on the lack of clinical relevance of a statistically significant correlation of less than 0.1 found in a sample of over 6000. The problem of clinical relevance is one that must be judged on its merits in each case, and depends on the context. For example, the same small correlation may be important in an epidemiological study but unimportant clinically.

One way of looking at the correlation that helps to modify over- enthusiasm is to calculate  $100r^{2}$ , which is the percentage of the variability of the data that is 'explained' by the association between the two variables. So a correlation of 0.7 implies that just about half (49%) of the variability may be put down to the observed association, and so on. This concept ties in with the analysis of variance for regression, discussed in section 11.13.6 and in Chapter 12. It may also be useful to calculate a confidence interval for the correlation coefficient, which for small samples will be wide.

Interpretation of association is often problematic because causation cannot be directly inferred. If we observe an association between two variables  $A$  and  $B$  there are several possible explanations. Excluding the possibility that it is a chance finding, it may be because

1. A influences (or 'causes')  $B$ ;  
2. B influences  $A$ ; or  
3. both  $A$  and  $B$  are influenced by one or more other variables.

Where data are available for some suspected common cause  $C$ , it is possible to see if the observed association between  $A$  and  $B$  remains when allowing for  $C$  by calculating the partial correlation. With this exception, it is not in general possible to distinguish statistically between the three possibilities above, and inferences must be based on other knowledge. When looking at variables where there is no background knowledge, inferring a causal link is not justified. This applies regardless of the strength of the observed association.

For example, we are not surprised to see data from many countries that show a relation between consumption of alcohol and deaths from liver cirrhosis (Smith, 1981), because of the large body of scientific knowledge about the effect of alcohol on the liver. But what should we make of international data showing a relationship between pork consumption and cirrhosis mortality? Nanji and French (1985) reported such a correlation of

$r = 0.40$  for 16 countries and a rank correlation of 0.60 for 10 Canadian provinces. In the absence of any scientific reason for such an association one should be sceptical about such a finding. Wherever possible one should try to examine the same variables in a different population. Seely (1985) studied the relation between pork consumption and cirrhosis mortality in 21 European countries, for which the rank correlation was 0.001; there was no association at all.

Interpretation of international correlations is particularly difficult because there are so many differences between countries. We could not safely interpret the data of Figure 11.6 as indicating that a high fibre diet leads to delayed menarche (and certainly not the converse). Other situations are not really any different. We ought not to take any correlation as indicating a causal association without collateral evidence, however 'reasonable' the hypothesis may be.

Correlation is often used as an exploratory method for investigating inter- relationships among many variables, for which purpose it is most obvious to use hypothesis tests. Although fine in principle, this approach is often over- done. The problem is that even with a modest number of variables the number of correlation coefficients is large - 10 variables yield  $45~r$  values, and 20 variables yield 190. One in 20 of these will be significant at the  $5\%$  level purely by chance, and these cannot be distinguished from genuine associations. Further, the magnitude of correlation that is significant at the  $5\%$  level depends upon the sample size. In a large sample, even if there are several significant  $r$  values of around 0.2 to 0.3, say, these are unlikely to be very useful. While this way of looking at large numbers of variables can be helpful when one really has no prior hypotheses, significant associations really need to be confirmed in another set of data before credence can be given to them.

Another common problem of interpretation occurs when we know that each of two variables is associated with a third variable. For example, if  $A$  is positively correlated with  $B$  and  $B$  is positively correlated with  $C$  it is tempting to infer that  $A$  must be positively correlated with  $C$ . Although this may indeed be true, such an inference is unjustified - we cannot say anything about the correlation between  $A$  and  $C$ . The same is true when one has observed no association. For example, in the data of Mazess et al. (1984) the correlation between age and weight was 0.05 and between weight and  $\%$  fat it was 0.03 (Figure 11.3). This does not imply that the correlation between age and  $\%$  fat was also near zero. In fact this correlation was 0.79, as we saw earlier (Figure 11.11). These three two- way relations are shown in Figure 11.8. Correlations cannot be inferred from indirect associations.

Correlation is often used when it would be better to use regression methods, discussed in section 11.10 onwards. The two methods are compared in section 11.17.

![](../images/11_Relation_between_two_continuous_variables/img13.jpg)  
Figure 11.8 Scatter diagrams showing each two way relation between age,  $\%$  fat, and weight of 18 normal adults (Mazess et al., 1984).


## 11.9 PRESENTATION OF CORRELATION

Where possible it is useful to show a scatter diagram of the data. In such a graph it is often helpful to indicate different categories of observations by using different symbols, for example to indicate patients' sex.

The value of  $r$  should be given to two decimal places, together with the  $\mathbf{P}$  value if a test of significance is performed. The number of observations should be stated.

If it is necessary to display the correlations between all pairs of a set of variables this can be done by means of a correlation matrix, as in Table 11.3. In this the correlation coefficients are shown in a triangular display similar to charts in road atlases showing the distances between each pair of towns. The graphical equivalent, shown in Figures 11.8 and 12.2, is even better.


## 11.10 REGRESSION

Other questions may arise when we have a set of data on two continuous variables. In particular we might wish to describe the relation between them, and thus be able to predict the value of one variable for an individual when we only know the other variable. Clearly the correlation coefficient does not perform these functions; it just indicates the strength of the association as a single number. We want a way of describing the

relation between the values of the two variables, and for this general problem we need the technique called regression. In this chapter I shall consider just the simple case where we have two variables; extensions are discussed in Chapters 12 and 14. I shall consider only the common case where we are interested in a linear (straight- line) relationship between two variables.

Table 11.6 and Figure 11.9 show data collected from 24 type 1 diabetic patients. The variables are fasting blood glucose (mmol/l) and mean velocity of circumferential shortening of the left ventricle (Vcf) derived from echocardiography. One patient's Vcf was not recorded. If we are interested in trying to predict Vcf from blood glucose, then, unlike the case for correlation, we do not have a symmetric relation between the two

Table 11.6 Data from 24 type 1 diabetic patients (Thuesen et al., 1985)  

<table><tr><td>Patient</td><td>Fasting blood glucose (mmol/l)</td><td>Mean circumferential shortening velocity (Vcf) (%/sec)</td></tr><tr><td>1</td><td>15.3</td><td>1.76</td></tr><tr><td>2</td><td>10.8</td><td>1.34</td></tr><tr><td>3</td><td>8.1</td><td>1.27</td></tr><tr><td>4</td><td>19.5</td><td>1.47</td></tr><tr><td>5</td><td>7.2</td><td>1.27</td></tr><tr><td>6</td><td>5.3</td><td>1.49</td></tr><tr><td>7</td><td>9.3</td><td>1.31</td></tr><tr><td>8</td><td>11.1</td><td>1.09</td></tr><tr><td>9</td><td>7.5</td><td>1.18</td></tr><tr><td>10</td><td>12.2</td><td>1.22</td></tr><tr><td>11</td><td>6.7</td><td>1.25</td></tr><tr><td>12</td><td>5.2</td><td>1.19</td></tr><tr><td>13</td><td>19.0</td><td>1.95</td></tr><tr><td>14</td><td>15.1</td><td>1.28</td></tr><tr><td>15</td><td>6.7</td><td>1.52</td></tr><tr><td>16</td><td>8.6</td><td>-</td></tr><tr><td>17</td><td>4.2</td><td>1.12</td></tr><tr><td>18</td><td>10.3</td><td>1.37</td></tr><tr><td>19</td><td>12.5</td><td>1.19</td></tr><tr><td>20</td><td>16.1</td><td>1.05</td></tr><tr><td>21</td><td>13.3</td><td>1.32</td></tr><tr><td>22</td><td>4.9</td><td>1.03</td></tr><tr><td>23</td><td>8.8</td><td>1.12</td></tr><tr><td>24</td><td>9.5</td><td>1.70</td></tr></table>

![](../images/11_Relation_between_two_continuous_variables/img14.jpg)  
Figure 11.9 Relation between fasting blood glucose and mean velocity of circumferential shortening of the left ventricle (Vcf). Data from 23 type 1 diabetics (Thuesen et al., 1985).

variables. We may consider these as a response (or outcome) variable (Vcf) and a predictor variable (blood glucose). These are often called dependent and independent variables respectively, confusing names which indicate which variable is depending on the other. The response variable is always plotted on the vertical, or  $Y$ , axis and the predictor variable on the horizontal, or  $X$ , axis, as illustrated in Figure 11.9.

The problem is to fit a straight line to the data that in some sense gives the 'best' prediction of  $Y$  for any value of  $X$ . Intuitively this will be a line that minimizes the distance between the data and the fitted line. There are several possible approaches to this problem, but the standard method is called least squares regression. When we use this method to fit a regression line we minimize the sum of the squares of the vertical distances of the observations from the line. Figure 11.10 shows the same data with the least squares regression line, together with the vertical distances from the line. Each distance is the difference for an individual between the observed value and the value given by the line, known as the fitted value. The technical term for this distance is a residual, a term I shall use from now on. Notice that this approach gives a solution that does not depend on the scaling of the graph. If we were to take distances perpendicular to the line (which is an alternative possibility) the solution would depend on the way the graph was drawn, which is clearly an undesirable feature.

![](../images/11_Relation_between_two_continuous_variables/img15.jpg)  
Figure 11.10 Data of Figure 11.9 with regression line, showing differences between observed and fitted values.

The least squares method produces the line that minimizes the sum of the squares of the residuals, and so it also minimizes the variance of the residuals, which is just the sum of squares divided by the number of observations minus two. This variance, known as the residual variance, is a measure of the 'goodness- of- fit' of the line. The residual variance is very important when assessing the results of a regression analysis.

If we have observed values of two variables,  $X$  (blood glucose) and  $Y$  (Vcf), we can perform a 'regression of  $Y$  on  $X$ ' to derive a straight line that gives a 'fitted' estimated value of  $Y$  for any value of the variable  $X$ . The general equation of a regression line is

$$
Y = a + b X.
$$

Here  $b$  is the slope of the line and  $a$  is called the intercept because it is the fitted value of  $Y$  where the line crosses the  $Y$  axis, for which  $X = 0$ . In most medical applications the value of  $a$  will have no practical meaning, as the  $X$  variable cannot be anywhere near zero; examples are blood pressure and any measurements of body size.

In practice the calculation of  $a$  and  $b$  for a given set of data is easy (see section 11.13) although it is definitely preferable to use a computer to do the calculations. For the data on diabetics the equation of the regression line shown in Figure 11.10 is

$$
\mathrm{Vcf} = 1.10 + 0.0220 \times \text{blood glucose}.
$$

What does this equation tell us? For any value of blood glucose the estimate of Vcf derived from the regression equation is the predicted value of Vcf, but we need some measure of the uncertainty of such a prediction. More basically, we would usually wish to consider the possibility that the observed relation between the two variables in these subjects is just a chance finding, and to consider how well the line fits the data. All of these aspects can be studied in relation to the residuals introduced earlier.


### 11.10.1 Assumptions

Before we can consider the use of a regression analysis it is important to consider three assumptions that underlie the method:

1. the values of the outcome variable  $Y$  (Vcf in our example) should have a Normal distribution for each value of the predictor variable  $X$ ;2. the variability of  $Y$ , as assessed by the variance or standard deviation, should be the same for each value of  $X$ ;3. the relation between the two variables should be linear.

Unlike for correlation, it is not a requirement that both variables should be random variables: regression analysis is valid if the values of the predictor  $(X)$  variable have been chosen by the experimenter, as is sometimes the case. Nor do the values of  $X$  need to be approximately Normal.

We can usually get a reasonable visual impression of whether the data deviate considerably from the three conditions listed above from a scatter diagram. Fortunately it is possible to assess them in detail after fitting the regression line. Again the residuals contain the relevant information.

If the three above assumptions hold then the residuals should have a Normal distribution (with a mean of zero). If we plot the residuals against the  $X$  values the points should be evenly scattered at all  $X$  values. I recommend that this plot is produced routinely. Figure 11.11 shows three possibilities for a plot of the residuals where (a) the assumptions are met; (b) the residuals have increasing variability as  $X$  increases; (c) there is a curved relation between the residuals and the  $X$  values. Plot (b) suggests that the data  $(Y)$  might need log transformation, and plot (c) indicates a non- linear relation between  $X$  and  $Y$  (see section 11.12.2). It can happen that different problems occur simultaneously, and that log (or some other) transformation of the  $Y$  variable will solve all the problems at once.

The assumption of Normality can be assessed formally by means of a Normal plot of the residuals (see section 7.5.3). Some computer programs incorporate this analysis.

Figure 11.12 shows the residuals plotted against blood glucose, which looks satisfactorily like Figure 11.11(a). Figure 11.13 shows a Normal plot of residuals, which is reasonably straight. However, the Shapiro- Francia

![](../images/11_Relation_between_two_continuous_variables/img16.jpg)

![](../images/11_Relation_between_two_continuous_variables/img17.jpg)  
Figure 11.12 Residuals from the regression line shown in Figure 11.10, plotted against blood glucose.

![](../images/11_Relation_between_two_continuous_variables/img18.jpg)  
Figure 11.13 Normal plot of residuals shown in Figure 11.12.

test gives  $W^{\prime} = 0.907$ $(\mathbf{P} = 0.03)$  , indicating some non- Normality. Figure 11.13 suggests that this is not a major problem, but if we were worried we could try log transformation of Vcf. The value of  $W^{\prime}$  for the residuals after regression analysis using  $\log_{e}$  Vcf is  $W^{\prime} = 0.94$ $(\mathbf{P} = 0.12)$  .

# 11.11 USE OF REGRESSION

The least squares regression line shown in Figure 11.10 has the equation

$$
Y = 1.10 + 0.0220X.
$$

From Figures 11.10 and 11.13 the assumptions of this analysis seem reasonable - the scatter around the regression line is fairly even and symmetric, a linear relation seems plausible, and the residuals have a distribution that is not too far from Normal.

When the assumptions hold, the regression line can be thought of as joining the mean values of  $Y$  for each value of  $X$  . Hence the regression line gives an estimate of the average Vcf for a given blood glucose level. The line fitted to the sample data is an estimate of the relation between these variables in the population, so we should consider the uncertainty of this estimated line. Figure 11.14 shows the regression line together with the  $95\%$  confidence interval for the line. We can consider this interval as including the true relation with  $95\%$  probability. Alternatively, for any value of blood glucose the confidence interval covers the range of values which we are  $95\%$  confident includes the true mean Vcf in the population. The  confidence  interval  is  narrowest  at  the  mean  blood  glucose  $(10.3\mathrm{mmol / l})$  and gets wider with increasing distance from the mean.

The slope is the parameter of main interest in a regression analysis, as it indicates the strength of the relationship between the two variables. The slope of the fitted line is 0.022, which means that we estimate an increase in Vcf of  $0.022\%$  per second for every increase of one unit (i.e. 1 mmol/l) in fasting blood glucose. We can calculate the standard error of the slope, which is 0.0105. The estimated slope,  $^b$  , is treated in much the same way as the mean of a sample. We can calculate a confidence interval for the slope,  and  can  test  the  hypothesis  of  a  zero  slope,  that  is,  of  no relationship between Vcf and blood glucose. These calculations, which are described in section 11.13, yield a  $95\%$  confidence interval for the slope from  0.000  to  0.044;  the  test  statistic  is  $t = 2.10$  ,  with  $\mathbf{P} = 0.05$  .  By conventional criteria the slope is just significantly different from zero. As usual the confidence interval is more informative, showing that the data are compatible with no relation between Vcf and blood glucose or with one that is twice as strong as the observed one.

Implicit in this analysis is the consistency of the relationship, as indicated by the scatter of the observed data around the fitted line. The nearer the

points are to the line the narrower will be the confidence interval for the line (Figure 11.14). With the present data there is considerable scatter, and this is more noticeable if we consider the prediction of Vcf for a new subject with a known fasting blood glucose level.

Figure 11.14 showed the  $95\%$  confidence interval for the mean Vcf for a given value of fasting blood glucose. We expect greater uncertainty when trying to predict Vcf for an individual, and Figure 11.15 shows that the  $95\%$  prediction interval is indeed much wider. For any value of blood glucose we would expect  $95\%$  of future subjects to have Vcf values between the values shown. There is thus a  $95\%$  probability of an individual's Vcf being within this interval, although our best estimate is given by the value on the regression line corresponding to their blood glucose level. The  $95\%$  prediction interval also widens with distance from the mean blood glucose level although this is not as easy to see. What is clear is that for a given blood glucose value there is enormous uncertainty attached to the estimated Vcf. A much tighter prediction interval is needed for such a relation to have any clinical value. Note that unlike the confidence interval for the regression line the prediction interval can be made only slightly narrower by increasing the sample size. This is because the prediction interval mainly reflects individual variability about the fitted line, which has nothing to do with sample size. Where the measurements are imprecise (such as blood pressure) the prediction interval can be

![](../images/11_Relation_between_two_continuous_variables/img19.jpg)  
Figure 11.14 As Figure 11.10, but showing the  $95\%$  confidence interval for the regression line.

![](../images/11_Relation_between_two_continuous_variables/img20.jpg)  
Figure 11.15 As Figure 11.10, but showing the  $95\%$  interval for predicting Vd from blood glucose for an individual subject.

narrowed by taking the average for each individual of two (or more) readings.

The fitted regression line explains a proportion of the variability in the dependent variable  $(Y)$ , and the residuals indicate the amount of unexplained variability. A regression analysis can thus be displayed as an analysis of variance table which is very similar to those shown in Chapter 9. Table 11.7 shows the analysis of variance table corresponding to the regression of blood glucose on Vcf. The derivation of this table is explained in section 11.13.6. Many software packages present the results in this way. This format for displaying the results of a regression analysis extends easily to complex models, as will be seen in Chapter 12. Two points should be noted. Firstly, as this is an alternative way of displaying the same analysis, the  $P$  value is the same as that obtained for the slope. In fact, the  $F$  statistic is the square of the  $t$  statistic obtained earlier  $(4.41 = 2.10^{2})$ . Secondly, the residual mean square (0.0470) is the variance of the residuals, and thus the square of the residual standard deviation.

The residual standard deviation indicates the variation not explained by the regression line so it is a measure of the goodness- of- fit of the line in the units of measurement. A more general way of assessing goodness- of- fit is to consider the proportion of the total variation explained by the model. This is usually done by considering the sum of squares explained by the regression as a percentage of the total sum of squares. From Table 11.7 this value is  $0.2073 / 1.1934 = 0.17$  or  $17\%$ . This statistic is called  $R^{2}$ , and

Table 11.7 Analysis of variance table corresponding to regression of blood glucose on Vcf  

<table><tr><td>Source of variation</td><td>Degrees of freedom</td><td>Sums of squares</td><td>Mean squares</td><td>F</td><td>P</td></tr><tr><td>Regression</td><td>1</td><td>0.2073</td><td>0.2073</td><td>4.41</td><td>0.048</td></tr><tr><td>Residual</td><td>21</td><td>0.9861</td><td>0.0470</td><td></td><td></td></tr><tr><td>Total</td><td>22</td><td>1.1934</td><td></td><td></td><td></td></tr></table>

the square of the correlation coefficient between Vcf and blood glucose. The concept extends to more complex models, and will be discussed again in the next chapter. The low value of  $R^{2}$  here indicates that despite the statistically significant slope the majority of the variability in Vcf is not explained by variation in blood glucose levels.

Section 11.13 gives the mathematical formulae for all the calculations relating to regression.

## 11.12 EXTENSIONS

The previous sections have presented the simplest form of regression analysis, where we wish to describe the linear relation between two continuous variables measured in a single sample. Various extensions are possible, two of which are described below. They are both types of multiple regression, whereby we can examine the dependence of one outcome variable on two or more other variables simultaneously. Multiple regression is discussed at more length in Chapter 12.

### 11.12.1 Comparing groups

If we have data from two groups of subjects we can fit regression lines to each, and then compare the slopes of the two lines to see if they are reasonably similar. A confidence interval can be obtained for the difference or a significance test can be carried out. If the two lines can be considered to have the same slope, then it is possible to fit lines to the two sets of data that have the same slope (i.e. they are parallel). The vertical distance between the two lines is then the difference in the means of the  $Y$  variable in the two groups adjusted for any difference in the distribution of the  $X$  variable. This analysis is known as analysis of covariance. Further details are given by Altman and Gardner (1989). Analysis of covariance, which is also discussed in section 12.4.1, can be extended to more than two groups of observations.

### 11.12.2 Non-linear relationships

Sometimes it can be clearly seen from a scatter plot that the relation between two variables is curved. There are several statistical models that can be used to cope with non- linearity. The simplest method, and the only one considered here, is known as polynomial regression.

Polynomial regression is a special case of multiple regression when we wish to describe (or 'model') the non- linear relation between an outcome variable and a single predictor variable. A linear relation between variables  $X$  and  $Y$  leads to a regression equation of the type  $Y = a + b X$  . This idea can be extended to a non- linear relation by means of the model  $Y = a + b X + c X^{2}$  . This model, which is called a quadratic curve, consid- . ers the outcome variable  $(Y)$  to be dependent not just on the predictor variable  $(X)$  but also on its square  $(X^{2})$  . By this means we obtain a curved relation between  $Y$  and  $X$  , although (as explained above) this model is a special case of multiple regression, with both  $X$  and  $X^{2}$  as predictor variables.

The quadratic model describes a simple curve which rises and then falls (or vice versa) in a symmetric manner about its maximum (or minimum) value. Altman and Coles (1980) fitted such a model to data giving mean birthweight for different lengths of gestation. For example, for female first born babies their fitted model was

Birthweight  $(\mathbf{k}\mathbf{g}) = - 22.693 + 1.2122\times \mathbf{age} - 0.014102\times \mathbf{age}^{2}$  where 'age' is the gestational age in weeks. This curve is shown in Figure 11.16.

## 11.13 REGRESSION - MATHEMATICS AND WORKED EXAMPLE

(This section gives the mathematical formulae for the calculations described in sections 11.10 to 11.12 together with a worked example. It can be omitted without loss of continuity. These formulae can be complicated to use, so it is preferable to perform regression analysis using a computer program if possible.)

Regression analysis will be illustrated using the data from diabetics shown in Table 11.6. We want the regression line to allow prediction of Vcf (velocity of circumferential shortening) from blood glucose, so the  $X$  (predictor) variable is blood glucose and the  $Y$  (outcome) variable is Vcf.

### 11.13.1 The regression line

The equation of the least squares linear regression line is  $Y = a + b X$  and

![](../images/11_Relation_between_two_continuous_variables/img21.jpg)  
Figure 11.16 Quadratic curve fitted to mean birth weight by gestational age (Altman and Coles, 1980).

estimates of  $a$  and  $b$  can be obtained easily. Denoting the observed data as  $x_{i}$  and  $y_{i} (i = 1, \ldots , n)$  it can be shown that the line must pass through the mean of the data  $(\bar{x}, \bar{y})$ . The estimated slope is given by

$$
b = \frac{\Sigma(x_{i} - \bar{x})(y_{i} - \bar{y})}{\Sigma(x_{i} - \bar{x})^{2}}.
$$

Note that, as we should expect from the nature of the analysis, the equation is asymmetric in contrast to that for  $r$  given in section 11.7: it does matter which variable is  $X$  and which is  $Y$ .

The calculations can be simplified if we first obtain the 'sum of squares' of the  $X$  and  $Y$  values about their means, and the 'sum of products':

$$
\begin{array}{l}{{S_{x x}=\sum x_{i}^{2}-(\sum x_{i})^{2}/n}}\\ {{S_{y y}=\sum y_{i}^{2}-(\sum y_{i})^{2}/n}}\\ {{S_{x y}=\sum x_{i}y_{i}-\sum x_{i}\sum y_{i}/n.}}\end{array}
$$

The quantities  $S_{xx}$  and  $S_{yy}$  are just  $n - 1$  times the variances of  $X$  and  $Y$ . An easier way of calculating  $b$  is as

$$
b = \frac{S_{xy}}{S_{xx}}.
$$

This formula should not be used in a computer program, however, as inaccuracy is occasionally introduced because of rounding errors. Only the first equation given above for  $b$  should be used for this purpose.

Because we know that the regression line passes through the mean  $(\bar{x}, \bar{y})$ , we can estimate  $a$  simply as

$$
a = \bar{y} - b\bar{x}.
$$

So for any value of  $X$ , say  $x_0$ , the fitted value of  $Y$  predicted by the equation is

$$
\begin{array}{l}{{y_{\hat{H} t}=a+b x_{0}}}\\ {{\mathrm{~}=(\bar{y}-b\bar{x})+b x_{0}}}\\ {{\mathrm{~}=\bar{y}+b(x_{0}-\bar{x}).}}\end{array}
$$

Note that all the results quoted below were obtained using full numeric accuracy, but intermediate calculations have been rounded to clarify the presentation.

For the data on diabetics the mean values of the two variables are  $\bar{x} = 10.37 \mathrm{mmol / l}$  and  $\bar{y} = 1.33\% /\mathrm{sec}$ , and the other quantities we will need are

$$
\sum x = 238.60, \sum y = 30.49, \sum x^2 = 2904.92, \sum y^2 = 41.6125
$$

$$
\textstyle \mathrm{and}\sum x y = 325.74,
$$

$$
S_{xx} = 2904.92 - 238.60^2 / 23 = 429.704,
$$

$$
S_{yy} = 41.61 - 30.49^2 / 23 = 1.193,
$$

$$
S_{xy} = 325.74 - 238.60 \times 30.49 / 23 = 9.439.
$$

We estimate the slope  $b$  as

$$
\begin{array}{c}b = \frac{9.439}{429.704} \\ = 0.02196. \end{array}
$$

The intercept  $a$  is estimated as

$$
\begin{array}{c}a = 1.33 - 0.02196 \times 10.37 \\ = 1.098\% /\mathrm{sec}. \end{array}
$$

### 11.13.2 Residual variation

The difference between an observed value  $y_0$  and fitted value  $y_{\hat{H}}$  is thus

$$
y_{0} - y_{\hbar t} = y_{0} - [\bar{y} +b(x_{0} - \bar{x})], \tag{y0 - yfit = y0 - [y + b(x0 - x)]},
$$

and the value  $y_{0} - y_{\hbar t}$  is the residual for that individual. It is the sum of the squares of the residuals,  $\Sigma (y_{i} - y_{\hbar t})^{2}$ , that is minimized by the least squares line, but we are more interested in their variance, obtained as

$$
s_{res}^{2} = \frac{\Sigma(y_{i} - y_{\hbar t})^{2}}{n - 2}
$$

or, for calculation,

$$
\begin{array}{l}{{s_{r e s}^{2}=\frac{1}{n-2}\biggl[\Sigma y_{i}^{2}-\frac{(\Sigma y_{i})^{2}}{n}-b\biggl(\Sigma x_{i}y_{i}-\frac{\Sigma x_{i}\Sigma y_{i}}{n}\biggr)\biggr]}}\\ {{=\frac{1}{n-2}(S_{y y}-b S_{x y}).}}\end{array}
$$

The square root of this expression, the residual standard deviation,  $s_{\mathrm{res}}$ , is used in subsequent calculations.

We can calculate the residual variance in the example as

$$
\begin{array}{c}{{s_{r e s}^{2}=\frac{1}{21}(1.193-0.02196\times9.439)}}\\ {{{}}}\\ {{=0.04696}}\end{array}
$$

so that the residual standard deviation is

$$
\begin{array}{c}{{s_{r e s}=\sqrt{0.04696}}}\\ {{=0.2167.}}\end{array}
$$

### 11.13.3 Confidence intervals

#### (a) Slope

The standard error of the slope,  $b$ , is strongly related to the residual standard deviation, being

$$
se(b) = \frac{s_{res}}{\sqrt{S_{xx}}}
$$

so that a  $95\%$  confidence interval for  $b$  is

$$
b\pm t_{0.975}s e(b)
$$

where  $t$  is on  $n - 2$  degrees of freedom (the degrees of freedom associated with the residual).

The slope is usually the aspect of most interest. The standard error of  $b$  is

$$
\begin{array}{c}{{s e(b)=\frac{0.2167}{\sqrt{429.704}}}}\\ {{=0.0105.}}\end{array}
$$

From Table B4 the value of  $t_{0.975}$  on 21 degrees of freedom is 2.08, so a  $95\%$  confidence interval is given by

$$
0.02196\pm 2.08\times 0.0105
$$

that is, 0.00012 to 0.044. The confidence interval thus extends from zero, representing no relation between the variables, to twice the value observed in the sample.

#### (b) Estimated Y for a given  $X$

The standard error of the estimate  $y_{\hbar t}$  for a given value of  $X$  , say  $x_{0}$  ,is given by

$$
s e(y_{f i t}) = s_{r e s}\sqrt{\frac{1}{n} + \frac{(x_{0} - \bar{x})^{2}}{S_{x x}}}
$$

and a  $95\%$  confidence interval is given by

$$
y_{f i t}\pm t_{0.975}s e(y_{f i t})
$$

where  $t$  is on  $n - 2$  degrees of freedom.

We can obtain a  $95\%$  confidence interval for the predicted mean value of Vcf for any blood glucose. If  $y_{f i t}$  is the predicted mean Vcf from the regression equation, then the standard error of  $y_{f i t}$  is

$$
s e(y_{f i t}) = 0.2167\sqrt{\frac{1}{23} + \frac{(x_{0} - 10.37)^{2}}{429.704}}
$$

where  $x_{0}$  is the blood glucose value. So for a blood glucose of  $14.5\mathrm{mmol / l}$  the estimated mean Vcf is given by the regression equation as

$$
1.098 + 0.02196 × 14.5 = 1.416%/sec.
$$

The standard error of this estimate is thus

$$
s e(y_{f i t}) = 0.2167\sqrt{\frac{1}{23} + \frac{(14.5 - 10.37)^{2}}{429.704}}
$$

We use the equation above to get a confidence interval for the estimate of 1.419. From Table B4 the value of  $t_{0.975}$  with 21 degrees of freedom is 2.080, so that the  $95\%$  confidence interval is given by

$$
1.416\pm 2.080\times 0.0625
$$

or 1.29 to  $1.55\%$  /sec.

#### (c) Intercept

The intercept is not usually of great interest, but a confidence interval can be obtained for the intercept  $a$  using the formula in the previous section to get a confidence interval for  $y_{fit}$  when  $X = 0$ .

### 11.13.4 Prediction interval

The  $95\%$  prediction interval is much wider than the  $95\%$  confidence interval for the line as the scatter of the individual data about the fitted line becomes more directly relevant.

For any value  $x_{0}$  the predicted value is  $y_{fit} = a + bx_{0}$ . To get the prediction interval we do not want the standard error of  $y_{fit}$ , but the estimated standard deviation of individual values of  $Y - y_{fit}$  at that value of  $X$ . This standard deviation is given by

$$
s_{pred} = s_{res}\sqrt{1 + \frac{1}{n} + \frac{(x_{0} - \bar{x})^{2}}{S_{xx}}}
$$

and thus the  $95\%$  prediction interval is

$$
y_{fit}\pm t_{0.975}s_{pred}
$$

where  $t$  is on  $n - 2$  degrees of freedom.

The estimated standard deviation of Vcf values for individuals with a blood glucose of  $14.5 \mathrm{mmol / l}$  is

$$
\begin{array}{l}{{s_{p r e d}=0.2167\sqrt{1+\frac{1}{23}+\frac{(14.5-10.37)^{2}}{429.704}}}}\\ {{=0.225\%/\mathrm{sec}.}}\end{array}
$$

The  $95\%$  prediction interval is therefore

$$
1.416\pm 2.080\times 0.225
$$

or  $0.95$  to  $1.89\% /\mathrm{sec}$ , which is considerably wider than the confidence interval for the mean, as can be seen by comparing Figures 11.14 and 11.15.

### 11.13.5 Hypothesis test for  $b$

We have seen that the standard error of the estimated slope,  $b$ , is  $se(b) = s_{res} / \sqrt{S_{xx}}$ , so we can perform a test of the hypothesis that  $b = 0$  by calculating  $b / se(b)$ . This ratio is compared with the  $t$  distribution with  $n - 2$  degrees of freedom.

We can thus test the null hypothesis of no relation between Vcf and

blood glucose. We simply divide the estimate of  $b$  by its standard error and compare the result with the appropriate value of the  $t$  distribution. So we have

$$
t = b / s e(b) = 0.02196 / 0.0105 = 2.10.
$$

This value is compared with the  $t$  distribution with 21 degrees of freedom, the value of  $t_{0.975}$  being 2.08. The slope is thus just significantly different from zero at the  $5\%$  level.

### 11.13.6 Analysis of variance table

The results of a regression analysis can be displayed in an analysis of variance table, by partitioning the total variability in the dependent variable into a component explained by the regression line and unexplained or residual variation.

The total sum of squares of the dependent variable  $Y$  is  $S_{yy}$  (with  $n - 1$  degrees of freedom) and the sum of squares due to the regression is  $(S_{xy})^{2} / S_{xx}$  with 1 degree of freedom. The residual sum of squares (with  $n - 2$  degrees of freedom) can be obtained by subtraction.

For the blood glucose data the total sum of squares is 1.1934 and the sum of squares due to regression is  $9.439^{2} / 429.704 = 0.2073$ . These results are shown in Table 11.7.

## 11.14 INTERPRETATION OF REGRESSION

As discussed in Chapter 8, the variability among a set of observations may be partly attributed to known factors and partly to unknown sources; the latter is often termed 'random variation'. In linear regression we see how much of the variability in the response variable can be attributed to different values of the predictor variable, and the scatter either side of the fitted line shows unexplained variability. Because of this variability, the fitted line is only an estimate of the relation between these variables in the population. As with other estimates (such as a sample mean) there will be uncertainty associated with the estimated slope and intercept,  $b$  and  $a$ . The confidence interval for the slope  $b$  will indicate the uncertainty in the estimated strength of the relationship, and confidence intervals for the whole line and prediction intervals for individual subjects show other aspects of variability. The latter are especially useful as regression is often used to make predictions about individuals.

It should be remembered that the regression line should not be used to make predictions for  $X$  values outside the range of values in the observed

data. Such extrapolation is unjustified as we have no evidence about the relationship beyond the observed data. A statistical model is only an approximation. One rarely believes, for example, that the true relationship is exactly linear, but the linear regression equation is taken as a reasonable approximation for the observed data. Outside the range of the observed data one cannot safely use the same equation. Thus we should not use the regression line shown in Figure 11.14 to predict Vcf for blood glucose values outside the range 4 to  $20 \mathrm{mmol / l}$ .

An example of the danger of extrapolation is seen from a quadratic regression model fitted to the world record times to run a mile from 1954 to 1984. Kitson (1984) produced the model

$$
\mathrm{time} = 4.777 - 0.02039 \mathrm{Year} + 0.0001040 \mathrm{Year}^2
$$

where 'Year' is the calendar year - 1900. He observed that the 'ultimate mile' will be run in 1998 in a time of 3 min 46.66 sec, and that on the basis of this model 'we may already be within one second of the ultimate mile'. He failed to observe, however, that after 1998 his model indicates that the world record time will start to increase again (see Figure 11.17), which is clearly impossible!

Nor should the regression line be used to predict the  $X$  variable from the  $Y$  variable. If we wish to predict blood glucose level from Vcf (which is probably not very sensible) we ought first to calculate the regression of

![](../images/11_Relation_between_two_continuous_variables/img22.jpg)  
Figure 11.17 Quadratic curve fitted to world record times to run a mile (Kitson, 1984), showing the range of observations (1954 to 1984).

blood glucose on Vcf. Regression is not a symmetric relation between two variables, so we need the appropriate regression line for our purpose.

Few of the cautions that were made about the interpretation of the correlation coefficient apply to regression analysis. One that does is that relating to the analysis of data from different groups as if they were a single sample. The slope of the regression line may be considerably affected if we pool data from two groups where there is a marked difference in the distribution of the values of either or both variables. An example would be the regression of blood pressure on age for males and females. Such data should either be analysed separately for the different groups or analysis of covariance should be used. Another restriction that is relevant is that the observations should be independent; in practice this means that there should be only one observation per individual.

Regression analysis is valid when values of the predictor variable have been selected by the experimenter, as is common in laboratory experiments. Also, as I have already noted, there is no requirement for the  $X$  variable to have a Normal distribution. However, if there is a value of  $X$  that is distant from the main body of the data, that observation may exert an undue influence on the position of the regression line especially if the value of the  $Y$  variable is also extreme. An example was given in Figure 7.2.

If the distribution of the data or of the residuals leads to concern about the wisdom of using the regression methods described there is a non- parametric form of regression (see Sprent, 1989). Non- parametric regression is very rarely performed, in contrast to non- parametric correlation.

## 11.15 RELATION TO OTHER ANALYSES

(This section can be omitted without loss of continuity.)

Two analyses discussed in earlier chapters illustrate specialized uses of regression, although they were not presented as regression analyses. These are the test for linear trend in a one way analysis of variance (section 9.8.5) and the Chi squared test for trend among proportions (section 10.8.2). They are reconsidered briefly below.

### 11.15.1 Trend in one way analysis of variance

The test for trend across three or more groups in a one way analysis of variance was described in sections 9.8.5 and 9.9.2. Scores  $l_{i}$  were given to the groups and the between group sum of squares was partitioned into linear and non- linear components. The test for linear trend is almost equivalent to a regression of the outcome variable on the scores. It is not

exactly the same because the analysis of variance also uses one degree of freedom to test for non- linear variation among the groups, but in essence the method is a linear regression analysis. The slope of the regression line is equal to  $L / \Sigma l_{i}^{2}$ , and corresponds to the change in the response variable per unit change in score. This statistic is more useful than the statistic  $L$ , which depends upon the values of the scores.

When there are only two groups with scores  $- 1$  and 1, regression on the group scores is exactly equivalent to the two- sample  $t$  test. The slope of the regression line is half the difference between the group means.

### 11.15.2 Trend in a  $2 \times k$  frequency table

The Chi squared test for trend is used to assess a trend in proportions in a  $2 \times k$  frequency table (see section 10.8.2). The method is exactly equivalent to regressing the row variable, coded 0 and 1 say, on the column scores. For the Caesarean section data in Table 10.19, if we give scores 1 to 6 to the six shoe size groups, regression of these scores on the row variable (coded 0 and 1) for the 351 observations gives a slope of  $- 0.0302$  (SE 0.0106), giving  $t = - 2.86$  ( $\mathbf{P} = 0.0045$ ). The  $\mathbf{P}$  value is thus the same as for the Chi squared test for trend shown in section 10.8.2. However, the regression approach is more informative as it yields an estimate of the change in proportion from one group to the next. Here the estimate is  $- 0.03$  (i.e. a reduction of  $3\%$ ) per increment of  $\frac{1}{2}$  in shoe size. We can use the standard error to obtain a confidence interval in the usual way.

## 11.16 PRESENTATION OF REGRESSION

The equation of the regression line should be given, together with the residual standard deviation. Wherever possible the regression line should be shown in a plot together with a scatter diagram of the raw data. The line should not extend beyond the range of the observed values of the predictor variable  $(X)$ . A plot of the regression line alone gives no more information than the equation of the line.

The standard error of the slope is useful, as is the  $\mathbf{P}$  value for the  $t$  test. A confidence interval for the line or, more usefully, prediction intervals for new observations are especially informative and can be shown in the same plot.

The accuracy used for the coefficients should be related to the accuracy of the raw data. It makes no sense, for example, to give an equation that purports to predict birth weight to the nearest  $\frac{1}{100000} \mathbf{g}$ , which is what is implied by the following quadratic regression equation of birth weight  $(y)$  on fetal abdominal area  $(x)$ :

$$
y = 3518.42829 - 0.26395x + 0.000024x^{2}
$$

(Campogrande et al., 1977). It is common for the estimate of  $a$  to be larger than that of  $b$ , but  $a$  and  $b$  are frequently reported to the same number of decimal places. However, it is the slope,  $b$ , that is needed with more precision, not less, when making predictions, so it should be given at least as precisely as  $a$ , if not more so. Precision here refers to the number of 'significant digits' (i.e. ignoring zeros at the beginning). Thus, in the equation given earlier,  $\mathrm{Vcf} = 1.10 + 0.0220$  blood glucose, the intercept and slope are both given to three significant digits. Contrast this with the quadratic equation given above.

Most computer programs for regression analysis give the information necessary to perform all the calculations described in this chapter. Not many will actually calculate and plot confidence intervals and prediction intervals, but they should give the residual standard deviation (perhaps under a different name) to allow these intervals to be calculated.

In output from computer programs the quantity  $s_{res} / \sqrt{n}$  is sometimes called the 'standard error of the estimate' (SEE). This is not a good name as it wrongly implies that it is the standard error of any value  $y_{fi}$  estimated from the regression line. In fact  $s_{res} / \sqrt{n}$  is the standard error of  $y_{fi}$  only at the mean value of  $X$ , i.e. when  $X = \overline{x}$  (see section 11.13.3). As we have seen, uncertainty increases as we move away from the mean. This mistake is sometimes seen in published papers where confidence limits are shown parallel to the regression line. Worse, some programs call the residual standard deviation  $(s_{res})$  the 'standard error of the estimate', which is highly misleading.

## 11.17 REGRESSION OR CORRELATION?

Regression and correlation have been presented separately in this chapter to clarify the difference between their purposes. Mathematically, however, the two methods are very closely related, as can be seen from the formulae in sections 11.7 and 11.13. In fact the  $t$  test of the null hypothesis of zero correlation is exactly equivalent to that for the hypothesis of zero slope in regression analysis - the  $\mathbf{P}$  values are identical. Many computer programs automatically provide the correlation coefficient when performing a regression analysis, but it helps to remember that regression and correlation are distinct methods which serve different purposes. It is not usually sensible to perform both unless one is genuinely interested in both analyses, which is probably not very common. For example, we would not wish to predict the consumption of pork in Albania if we happened to know the mortality from cirrhosis among Albanians. In contrast, we are not interested in the correlation between Vcf and blood glucose level once we have carried out the much more informative regression analysis.

Correlation is a much over- used technique, with a significant correlation

coefficient often wrongly interpreted as important and, even worse, as necessarily indicating a causal relationship. Its use should be mainly for generating hypotheses rather than for testing them. Correlation reduces a set of data to a single number that bears no direct relation to the actual data. Regression is a much more useful method, with results which are clearly related to the measurements obtained. The strength of the relation is explicit, and uncertainty can be seen clearly from confidence intervals or prediction intervals.

Give a man three weapons - correlation, regression, and a pen - and he will use all three.

(Anon, 1978)

## EXERCISES

11.1 Lactic acidosis, a disorder of acid- base metabolism, is usually rapidly fatal. Dichloroacetate was administered intravenously  $(50 \mathrm{mg / kg}$  body weight) to 29 paediatric and adult patients (Stacpoole et al., 1988). The table below shows the recorded changes in some metabolic and haemodynamic variables, together with the patients' survival times (in hours).

<table><tr><td rowspan="2">Patient</td><td colspan="3">Change in arterial level of</td><td rowspan="2">Survival time</td></tr><tr><td>Lactate</td><td>Bicarbonate</td><td>pH</td></tr><tr><td>1</td><td>4.1</td><td>-1.2</td><td>-0.05</td><td>4</td></tr><tr><td>2</td><td>-4.4</td><td>2.0</td><td>0.03</td><td>4</td></tr><tr><td>3</td><td>0.1</td><td>2.9</td><td>0.02</td><td>14</td></tr><tr><td>4</td><td>4.4</td><td>-2.5</td><td>0.07</td><td>15</td></tr><tr><td>5</td><td>8.7</td><td>-4.0</td><td>-0.12</td><td>16</td></tr><tr><td>6</td><td>-30.7</td><td>4.4</td><td>0.17</td><td>24</td></tr><tr><td>7</td><td>1.7</td><td>-0.9</td><td>0.01</td><td>29</td></tr><tr><td>8</td><td>-1.5</td><td>4.5</td><td>0.15</td><td>31</td></tr><tr><td>9</td><td>7.4</td><td>1.8</td><td>-0.13</td><td>32</td></tr><tr><td>10</td><td>9.9</td><td>-12.9</td><td>-0.28</td><td>36</td></tr><tr><td>11</td><td>13.1</td><td>-11.9</td><td>-0.33</td><td>36</td></tr><tr><td>12</td><td>3.1</td><td>-6.3</td><td>-0.22</td><td>36</td></tr><tr><td>13</td><td>15.2</td><td>-2.0</td><td>-0.16</td><td>41</td></tr><tr><td>14</td><td>2.5</td><td>1.0</td><td>0.01</td><td>46</td></tr><tr><td>15</td><td>7.9</td><td>2.5</td><td>-0.22</td><td>48</td></tr><tr><td>16</td><td>4.2</td><td>-2.2</td><td>-0.03</td><td>48</td></tr><tr><td>17</td><td>2.8</td><td>-4.0</td><td>-0.04</td><td>60</td></tr><tr><td>18</td><td>14.3</td><td>-2.4</td><td>-0.01</td><td>60</td></tr></table>

322 Relation between two continuous variables  

<table><tr><td>Patient</td><td>Lactate</td><td>Change in arterial level of Bicarbonate</td><td>pH</td><td>Survival time</td></tr><tr><td>19</td><td>16.2</td><td>-12.8</td><td>-0.15</td><td>72</td></tr><tr><td>20</td><td>17.5</td><td>-4.4</td><td>-0.09</td><td>96</td></tr><tr><td>21</td><td>2.7</td><td>-7.1</td><td>-0.21</td><td>192</td></tr><tr><td>22</td><td>4.4</td><td>-4.7</td><td>-0.05</td><td>336</td></tr><tr><td>23</td><td>4.8</td><td>-9.8</td><td>-0.05</td><td>456</td></tr><tr><td>24</td><td>9.0</td><td>-7.5</td><td>0.09</td><td>672</td></tr><tr><td>25</td><td>14.7</td><td>-7.2</td><td>-0.23</td><td>768</td></tr><tr><td>26</td><td>6.2</td><td>-4.2</td><td>-0.13</td><td>1080</td></tr><tr><td>27</td><td>18.4</td><td>-12.3</td><td>-0.12</td><td>2160</td></tr><tr><td>28</td><td>16.9</td><td>-8.6</td><td>-0.17</td><td>2160</td></tr><tr><td>29</td><td>26.0</td><td>-21.3</td><td>-0.32</td><td>24456*</td></tr></table>

\*: still alive

(a) The authors used Spearman's rank correlation to look for associations with survival time. Is this a valid analysis, bearing in mind that one of the survival times is censored?

(b) Would the use of Pearson's correlation coefficient be valid?

(c) Which variable has the strongest correlation with survival time?

11.2 The following table shows resting metabolic rate (RMR) (kcal/24 hr) and body weight (kg) of 44 women (Owen et al., 1986).

<table><tr><td>Body weight</td><td>RMR</td><td>Body weight</td><td>RMR</td></tr><tr><td>1</td><td>49.9</td><td>1079</td><td>17</td></tr><tr><td>2</td><td>50.8</td><td>1146</td><td>18</td></tr><tr><td>3</td><td>51.8</td><td>1115</td><td>19</td></tr><tr><td>4</td><td>52.6</td><td>1161</td><td>20</td></tr><tr><td>5</td><td>57.6</td><td>1325</td><td>21</td></tr><tr><td>6</td><td>61.4</td><td>1351</td><td>22</td></tr><tr><td>7</td><td>62.3</td><td>1402</td><td>23</td></tr><tr><td>8</td><td>64.9</td><td>1365</td><td>24</td></tr><tr><td>9</td><td>43.1</td><td>870</td><td>25</td></tr><tr><td>10</td><td>48.1</td><td>1372</td><td>26</td></tr><tr><td>11</td><td>52.2</td><td>1132</td><td>27</td></tr><tr><td>12</td><td>53.5</td><td>1172</td><td>28</td></tr><tr><td>13</td><td>55.0</td><td>1034</td><td>29</td></tr><tr><td>14</td><td>55.0</td><td>1155</td><td>30</td></tr><tr><td>15</td><td>56.0</td><td>1392</td><td>31</td></tr><tr><td>16</td><td>57.8</td><td>1090</td><td>32</td></tr></table>

<table><tr><td></td><td>Body weight</td><td>RMR</td><td>Body weight</td><td>RMR</td></tr><tr><td>33</td><td>88.6</td><td>1323</td><td>39</td><td>107.7</td></tr><tr><td>34</td><td>89.3</td><td>1300</td><td>40</td><td>110.2</td></tr><tr><td>35</td><td>91.6</td><td>1519</td><td>41</td><td>122.0</td></tr><tr><td>36</td><td>99.8</td><td>1639</td><td>42</td><td>123.1</td></tr><tr><td>37</td><td>103.0</td><td>1382</td><td>43</td><td>125.2</td></tr><tr><td>38</td><td>104.5</td><td>1414</td><td>44</td><td>143.3</td></tr></table>

(a) Perform linear regression analysis of RMR on body weight.

(b) Examine the distribution of residuals. Is the analysis valid?

(c) Obtain a  $95\%$  confidence interval for the slope of the line.

(d) Is it possible to use an individual's weight to predict their RMR to within 250 kcal/24hr?

11.3 In the worked example of regression analysis (section 11.10.1) the  $W'$  test for non- Normality of the residuals gave  $\mathbf{P} = 0.03$

(a) Using the data in Table 11.6, carry out a regression of  $\log_{e} Vcf$  on blood glucose.

(b) Are the residuals from this analysis more nearly Normal?

(c) Compare the predicted Vcf and  $95\%$  prediction intervals derived from the two models for a diabetic patient with a fasting blood glucose of  $16 \mathrm{mmol / l}$

11.4 What is odd about the data in Table 11.2?

11.5 Digoxin is a drug that is largely eliminated unchanged in the urine. Its renal clearance was said to be (a) correlated with creatinine clearance and (b) independent of urine flow. The following table shows measurements of these three variables from 35 consecutive inpatients being treated with digoxin for congestive heart failure (Halkin et al., 1975).

<table><tr><td rowspan="2">Patient</td><td colspan="2">Clearances (ml/min/1.73 m²)</td><td rowspan="2">Urine flow (ml/min)</td></tr><tr><td>Creatinine</td><td>Digoxin</td></tr><tr><td>1</td><td>19.5</td><td>17.5</td><td>0.74</td></tr><tr><td>2</td><td>24.7</td><td>34.8</td><td>0.43</td></tr><tr><td>3</td><td>26.5</td><td>11.4</td><td>0.11</td></tr><tr><td>4</td><td>31.1</td><td>29.3</td><td>1.48</td></tr><tr><td>5</td><td>31.3</td><td>13.9</td><td>0.97</td></tr><tr><td>6</td><td>31.8</td><td>31.6</td><td>1.12</td></tr></table>

324 Relation between two continuous variables  

<table><tr><td rowspan="2">Patient</td><td colspan="2">Clearances (ml/min/1.73 m²)</td><td rowspan="2">Urine flow (ml/min)</td></tr><tr><td>Creatinine</td><td>Digoxin</td></tr><tr><td>7</td><td>34.1</td><td>20.7</td><td>1.77</td></tr><tr><td>8</td><td>36.6</td><td>34.1</td><td>0.70</td></tr><tr><td>9</td><td>42.4</td><td>25.0</td><td>0.93</td></tr><tr><td>10</td><td>42.8</td><td>47.4</td><td>2.50</td></tr><tr><td>11</td><td>44.2</td><td>31.8</td><td>0.89</td></tr><tr><td>12</td><td>49.7</td><td>36.1</td><td>0.52</td></tr><tr><td>13</td><td>51.3</td><td>22.7</td><td>0.33</td></tr><tr><td>14</td><td>55.0</td><td>30.7</td><td>0.80</td></tr><tr><td>15</td><td>55.9</td><td>42.5</td><td>1.02</td></tr><tr><td>16</td><td>61.2</td><td>42.4</td><td>0.56</td></tr><tr><td>17</td><td>63.1</td><td>61.1</td><td>0.93</td></tr><tr><td>18</td><td>63.7</td><td>38.2</td><td>0.44</td></tr><tr><td>19</td><td>66.8</td><td>37.5</td><td>0.50</td></tr><tr><td>20</td><td>72.4</td><td>50.1</td><td>0.97</td></tr><tr><td>21</td><td>80.9</td><td>50.2</td><td>1.02</td></tr><tr><td>22</td><td>82.0</td><td>50.0</td><td>0.95</td></tr><tr><td>23</td><td>82.7</td><td>31.8</td><td>0.76</td></tr><tr><td>24</td><td>87.9</td><td>55.4</td><td>1.06</td></tr><tr><td>25</td><td>101.5</td><td>110.6</td><td>1.38</td></tr><tr><td>26</td><td>105.0</td><td>114.4</td><td>1.85</td></tr><tr><td>27</td><td>110.5</td><td>69.3</td><td>2.25</td></tr><tr><td>28</td><td>114.2</td><td>84.8</td><td>1.76</td></tr><tr><td>29</td><td>117.8</td><td>63.9</td><td>1.60</td></tr><tr><td>30</td><td>122.6</td><td>76.1</td><td>0.88</td></tr><tr><td>31</td><td>127.9</td><td>112.8</td><td>1.70</td></tr><tr><td>32</td><td>135.6</td><td>82.2</td><td>0.98</td></tr><tr><td>33</td><td>136.0</td><td>46.8</td><td>0.94</td></tr><tr><td>34</td><td>153.5</td><td>137.7</td><td>1.76</td></tr><tr><td>35</td><td>201.1</td><td>76.1</td><td>0.87</td></tr></table>

Do these data support statements (a) and (b) above?