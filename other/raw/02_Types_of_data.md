# 2 Types of data

## 2.1 INTRODUCTION

There is a lot more to statistics than the analysis of data, and in later chapters I shall consider aspects such as the design of good experiments and the interpretation of results. Nevertheless statistics as a subject is very largely about data so it is sensible to start with a brief discussion of various types of data that may be encountered in medical work. The nature of the observations is of major importance in relation to the choice of correct statistical methods of analysis.Data can be either categorical or numerical (otherwise known as qualitative and quantitative), but within these broad classifications there are various different types of data.

Data can be either categorical or numerical (otherwise known as qualitative and quantitative), but within these broad classifications there are various different types of data.


## 2.2 CATEGORICAL DATA

### 2.2.1 Two categories

The simplest type of observation on an individual is the allocation of that individual to one of only two possible categories. Often these relate to the presence or absence of some attribute. Examples of such categorizations for patients include:

1. male/female

2. pregnant/not pregnant

3. married/single

4. diabetic/non-diabetic

5. smoker/non-smoker

6. hypertensive/normotensive

Such data have numerous other names such as binary data, dichotomous data, attribute data, yes/no data, and 0- 1 data. We will see later that there are some advantages in giving the numerical values 0 and 1 to the two categories.Notice that whereas (1) and (2) above definitely split subjects into two groups the other examples are all simplifications of more complex data.

Notice that whereas (1) and (2) above definitely split subjects into two groups the other examples are all simplifications of more complex data.

For example, without further information it is not clear how to categorize people who have been divorced in (3) or ex- smokers in (5). The classification of patients as hypertensive or not (6) imposes a cut- off point on values of a measurement (here blood pressure). In general this is an undesirable practice, not always just from the statistical viewpoint.


### 2.2.2 More than two categories

Clearly many classifications require more than two categories, such as country of birth or blood group. Examples (3) and (4) in the previous section might be expanded into several categories as follows:

married/single/divorced/separated/widowed

juvenile- onset diabetes/maturity- onset diabetes/non- diabetic

Another example is blood group: A/B/AB/O. Data of this type are also called nominal data.

In the above examples there is no obvious ordering of the categories, but often there is a natural order, as with the various staging systems for cancers (and other diseases) and social class. Returning to the example of cigarette consumption, it is common to classify subjects as

non- smokers/ex- smokers/light smokers/heavy smokers

where the degree of smoking could be subdivided further. Data of this type are also called ordinal data.

Another type of ordered categorical data arises with subjective assessment of something that cannot be measured. For example, a patient may classify their degree of pain as

minimal/moderate/severe/unbearable

(but see section 2.4.5).

Ordinal data are often reduced to two categories to simplify analysis and presentation, which may result in a considerable loss of information.


## 2.3 NUMERICAL DATA

### 2.3.1 Discrete data

Discrete numerical data arise when the observations in question can only take certain numerical values. Virtually all examples are counts of events, such as number of children, number of visits to the GP in a year, number of ectopic heart beats in 24 hours, etc.

The difference between such data as these and the ordered categorical data described earlier can be seen by considering an example of each:


*Ordered categorical:*

 Stage of breast cancer: I II III IV

*Discrete numerical:*

 Number of children: 0 1 2 3 4 5+

We cannot say that stage IV is twice as bad as stage II nor that the difference between stages I and II is equivalent to that between stages III and IV. In contrast, three children are three times as many as one (although not necessarily three times as bad!), and a difference of one means the same throughout the range of values.

In practice discrete data are often treated in statistical analyses as if they were ordered categories. This is not wrong, but it may not be getting the most out of the data. Conversely, where ordered categories are numbered, as with stage of disease or social class, the temptation to treat these numbers as statistically meaningful must be resisted. For example, it is not sensible to calculate the average social class or stage of cancer. The only information the numbers contain is in the ordering, which would be conveyed equally by calling them A, B, C, D and so on.


### 2.3.2 Continuous data

Continuous data are usually obtained by some form of measurement. Common examples include height, weight, age, body temperature, blood pressure and serum cholesterol. Such observations are not restricted to certain values except insofar as this is restricted by the accuracy of the measuring instrument.

It will not be necessary to record the data to numerous decimal places, but the fact that in principle it could be done is the distinguishing property of continuous measurements. Thus blood pressure is often recorded to the nearest 2 or perhaps  $5\mathrm{mmHg}$  , and body weight of adults to the nearest  $100 \mathrm{g}$  .

Sometimes it is reasonable to treat discrete data as if they were continuous, at least as far as statistical analysis goes. While age is a continuous measurement, age at last birthday is discrete. In studies of adults with ages ranging from, say, 16 to 80, no harm is done in considering age in years as a continuous measurement (and this is standard practice), but for studies of pre- school children it would be better to use age in months. Heart rate (in beats per minute) is another discrete measurement that is usually regarded as continuous. Although the essential requirement for this change of status is that there should be a large number of different possible values, in practice we do not worry too much about analysing discrete measurements as if they were continuous.

Conversely, continuous data are often reduced to several categories.

Where the variable is known to be imprecise, such as reported number of cigarettes smoked per day, it may be sensible to have categories such as

Otherwise, it is best to record the actual value of blood pressure, haemoglobin, etc. It is easy to convert to categories in the analysis, but the raw data cannot be retrieved later if only categories are recorded. Information is lost with no compensatory gain. Indeed, the statistical analysis of continuous data is more powerful, and often simpler.

When some calculation is necessary to derive the observation of interest this should be done by the computer. Thus it is much better to record date of birth and date of examination for subsequent calculation of age rather than to rely on mental arithmetic.

The degree of measurement accuracy and the type of data are both important in relation to carrying out a proper statistical analysis.


## 2.4 OTHER TYPES OF DATA

The preceding sections have covered the most common types of data likely to be encountered in medical research. In this section some miscellaneous other types of data are described.


### 2.4.1 Ranks

Occasionally the data in question are the relative positions of the members of a group in some respect. The most obvious (although non- medical) example is in sporting competitions or examinations. Sometimes there is a clear underlying measurement, such as time to run 400 metres, but in other cases there is not, for example when expressing preferences between different treatments.

Patients are sometimes given two or more treatments and asked to express a preference. Such rankings are rare in medical work, but the idea is important. As we shall see in later chapters, in some circumstances it is a good idea to convert the measurements on a group of individuals into a rank ordering before analysing the data.


### 2.4.2 Percentages

Percentages arise when one takes the ratio of two quantities. Examples are the left ventricular ejection fraction, which measures the percentage of blood ejected from the left ventricle when the heart beats, and the relative body weight (observed body weight divided by 'desirable' body weight). In the first example the ratio is of two quantities both of which have been

measured, while in the second a single measurement is divided by a pre- existing (constant) value usually taken from published tables.

Although it is reasonable to use these calculated percentages for well- established measurements, it is in general desirable to retain the information regarding both quantities used in the calculation. It would not, for example, be a good idea to record for each individual just the percentage reduction in blood pressure achieved following treatment. There is no particular reason to consider the effectiveness of a drug in terms of percentage reduction.

Although percentages may usually be regarded as continuous measurements they can cause problems in analysis, especially where there can be values either side of  $100\%$  (e.g. relative weight), or where there can be negative values as when calculating the percentage change in some measurement. If your systolic blood pressure is  $150 \mathrm{mmHg}$  then a  $20\%$  rise will increase it to  $180 \mathrm{mmHg}$ , but a subsequent fall of  $20\%$  will take it back down to  $144 \mathrm{mmHg}$ . Considerable care is necessary when considering such data.


### 2.4.3 Rates and ratios

A similar approach is used to convert an observed frequency to a rate. For example, the number of perinatal deaths is usually related to the total number of births by calculating the perinatal mortality rate per 1000 births.

Sometimes the frequency of events of a specific kind is compared with the expected number of events. For example, the expected number of new cases of leukaemia in an area in a given time period can be calculated by applying national age and sex specific rates to the numbers of people in the area in each age sex group. The ratio of the observed  $(O)$  to expected  $(E)$  frequencies yields the standardized mortality ratio as  $100 \times O / E$ .


### 2.4.4 Scores

When it is not possible to take direct measurements it is often possible to grade individuals in some way. In its simplest form, such a system may involve classifying a skin rash, for example, as mild, moderate or severe. More generally clinicians often use systems such as  $0, +, + +, + + +$ . Although the meaning of such symbols is pretty obvious, the classes are usually undefined and will not be comparable from one doctor to another. Clearly, such simple scales are further examples of ordered categorical data.

Often, however, it is possible to classify patients in several ways, perhaps in relation to various symptoms and signs. For each symptom the different codings can be given numerical values and the various values added up to give a total score. This score is then the observation.

Table 2.1 Apgar system of scoring newborn babies  

<table><tr><td rowspan="2">Sign</td><td colspan="3">Score</td></tr><tr><td>0</td><td>1</td><td>2</td></tr><tr><td>Heart rate</td><td>Absent</td><td>Slow (&amp;lt; 100)</td><td>&amp;gt; 100</td></tr><tr><td>Respiratory effort</td><td>Absent</td><td>Weak cry; hypoventilation</td><td>Good strong cry</td></tr><tr><td>Muscle tone</td><td>Limp</td><td>Some flexion of extremities</td><td>Well flexed</td></tr><tr><td>Reflex irritability (response to skin stimulation to feet)</td><td>No response</td><td>Some motion</td><td>Cry</td></tr><tr><td>Colour</td><td>Blue; pale</td><td>Body pink; extremities blue</td><td>Completely pink</td></tr></table>

A well- known example is the Apgar score for evaluating the well- being of newborn babies (Apgar, 1953). Table 2.1 (from Apgar et al., 1958) shows how the 'Apgar score' is obtained. Infants are classified into one of three categories scored 0, 1 or 2 for each of five variables, and thus receive a total score of between 0 and 10. It is standard practice to calculate Apgar scores in all newborn babies at both one and five minutes after birth. At one minute a score of 7 or more is good, whereas a score of less than 3 is very bad.

This is not the place to discuss the usefulness or validity of this particular scoring system, but three aspects of the system, which is typical of such schemes, should be noted. Firstly, for most of the signs some subjectivity is involved. Secondly, the numerical coding implies that any difference from 0 to 1 or from 1 to 2 is equally important. Thirdly, the five signs are considered equally important. Composite scores thus incorporate considerable subjectivity, some inherent in the combination procedure and some in the assessment of individuals.

In a non- medical field there has been considerable controversy over the relative weights given to the different events in ice- skating championships, and the scoring system for the decathlon is being changed because advances in achievement in some events have tended to undervalue other events. The same problem occurs in combining marks from different exams. The weighting of constituent elements of a composite score does not have to be equal, although it usually is in clinical practice.


### 2.4.5 Visual analogue scales

Patients may be asked to assess their degree of something unmeasurable like pain, mobility or hunger. A technique for improving on ordered

categories (illustrated in section 2.2.2) is the visual analogue scale (VAS) or linear analogue scale. The patient is shown a straight line (often  $10\mathrm{cm}$  long) the ends of which are labelled with extreme states. They are asked to mark the point on the line which represents their perception of their current state. A VAS for post- operative pain might look like

no pain|- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - unbearable pain patient's mark

where  $\mathbf{X}$  indicates the place on the scale where the patient judges himself to be. As such assessments are clearly highly subjective, these scales are of most value when looking at changes within individuals. We cannot put any absolute meaning on a score of, say, 2.2 (measured from the leftmost end of the scale), but a reduction to 1.4 in the same patient is interpretable. Caution is required in handling such data. We might, for example, prefer a method of analysis that is based on the rank ordering of scores rather than their exact values.


## 2.5 CENSORED DATA

An observation is called censored if we cannot measure it precisely but know that it is beyond some limit. Common situations often producing censored data are:

1. When measuring some trace constituent of blood the actual level may be below the lowest level that the machine or test can detect, even though it is known that the value should be greater than zero. Such values are termed non-detectable but are said to be censored at the limit of detectability. Because the convention is to plot data with low values to the left of a horizontal scale, this is also known as left censoring.

2. In some experiments, often with animals, there is a fixed length follow-up period. During this period the investigators may be looking for the appearance or perhaps disappearance of some specific condition, where the observation of interest is the time taken from the start of the experiment. Where nothing has happened by the end of the experiment, those observations are (right) censored at that time. Likewise, in long-term clinical trials the outcome of interest is often length of survival. Here the trial will usually stop at a fixed time after recruitment to the trial began, so that patients still alive at the end of the trial all have censored survival times, with the censoring being after different times of observation depending on how long the patient had been in the trial.

Special techniques for analysing censored survival data will be described in Chapter 13.


## 2.6 VARIABILITY

Statistics is largely about variability; in medical research this is often the variability between people. Sometimes it is the variability itself that is of prime interest, such as when describing the likely values of some measurement in a group of healthy subjects. Often, however, we are more interested in detecting underlying trends which may be obscured by variability. For example, when comparing two treatments on different groups of patients there may be considerable variation in the way patients respond to a particular treatment. The concept of variability is fundamental in statistics, and will recur throughout this book.

We use the term variable to denote anything that varies within a set of data. Although many variables relate to human subjects (or perhaps animals), the same considerations apply if one is studying variation from country to country (for example in perinatal mortality rates), comparing characteristics of small groups of individuals, or looking at variability in measurements of the same subject under different conditions.

All the examples of data given earlier in this chapter are called variables.


## 2.7 IMPORTANCE OF THE TYPE OF DATA

The many types of data just introduced can all be analysed by statistical methods, but the type of data can be critically important in determining which methods of analysis will be appropriate (and valid). In many medical studies variables of several types are collected, so that several different analytic methods may be needed. In Chapter 6 I shall give advice on how to record data for subsequent analysis.

Most statistical methods are specific to a certain type of data, with alternative techniques needed for different data types. The major distinction, however, is that between continuous and categorical variables. Further, for continuous or ordered categorical variables there is also the possibility of using alternative rank methods which are of much wider applicability.

These aspects of analysis will feature throughout this book. It is essential to use a method of analysis that is appropriate for the type of data.


## 2.8 DEALING WITH NUMBERS

### 2.8.1 Statistical analysis

When analysing data the rule is to use the full precision of the recorded data. There should not be any 'rounding' of intermediate results (see below). If you carry out your analysis on a computer the procedure just described will happen automatically. On a calculator it will happen only if intermediate calculations are stored in memory.



### 2.8.2 Presenting results

Advice on presentation of results appears in many later chapters, but some general introductory comments on presenting numbers may be helpful.

Analysis of categorical data often leads to counts of occurrences, such as the numbers of subjects in different blood groups, together with the corresponding percentages. If, as is usually desirable, the counts are given the percentages do not need to be given very precisely. Thus, for example, it is not necessary to express 17 out of 45 as  $37.78\%$  or even  $37.8 - 38\%$  is sufficient if the raw numbers are given too. Numbers with many digits are much harder to assimilate. Percentages may mislead in very small samples - saying that  $25\%$  of patients responded well to the treatment is not recommended when you mean one out of four patients.

The analysis of continuous data will lead to results that have many decimal places, such as an average diastolic blood pressure of  $85.348074 \mathrm{mmHg}$ . Results like this clearly should be shortened by rounding (see next section), bearing in mind the accuracy of the original data. In this example no important information would be lost if the average blood pressure was reported as  $85.3 \mathrm{mmHg}$ .

For numbers less than 1.0 a zero before the decimal point is preferable - - thus 0.729 rather than .729.

It is usually best to quote all comparable results to the same number of decimal places.


### 2.8.3 Rounding numbers

If we wish to report a number such as 85.348074 to fewer decimal places, we use a simple rule for rounding. The rule is that excess digits are simply discarded if the first of them is less than five. Otherwise the last retained digit is increased by one. So rounding 85.348074 to three decimal places gives 85.348, while rounding to two decimal places gives 85.35. If the discarded information is a solitary 5 or a 5 followed by zeros some people recommend rounding to the nearest even digit, while others always round upwards. Thus rounding 17.75 to one decimal place gives 17.8, but 16.85 will give 16.8 or 16.9 depending upon your preference. Zeros on the end of a number should be retained. Thus if we round 28.402 or 28.399 to two decimal places we get 28.40.

Beware of rounding the same number twice, which can lead to errors. If 85.348074 is rounded to two decimal places we get 85.35. If we then decide to round this value to one decimal place we get 85.4 rather than the correct value of 85.3.

Rounding should not be used until the final presentation - full precision should be retained during the analysis.