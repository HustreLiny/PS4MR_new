# 6 Using a computer

The good news is that statistical analysis is becoming easier and cheaper. The bad news is that statistical analysis is becoming easier and cheaper.

Hofacker (1983)


## 6.1 INTRODUCTION

Recent technological advances have provided many medical researchers with access to a computer. This change has largely been beneficial, but Hofacker's words above should be borne in mind. Computers remove most of the tedious aspects of statistical analysis, and should give us correct answers, but they do not guarantee that we will obtain correct and valid results. In this chapter I shall consider the advantages and disadvantages of using computers for statistical analysis, and suggest ways to approach the analysis of data. I shall also consider the design of forms for collecting data to be analysed by computer.


## 6.2 ADVANTAGES OF USING A COMPUTER

There are many advantages in using a computer to carry out statistical analyses. Most obviously it enables us to do things we couldn't otherwise do, but there are many other benefits:


### (a) Accuracy and speed

Good computer programs (known as software) will give the correct answers quickly. Analysis by hand is prone to arithmetical errors, and is painfully slow for all but the simplest tasks.


### (b) Versatility

A computer gives access to a wide range of statistical techniques, many more than are described in this book. Even complex analyses can be performed quickly.


### (c) Graphics

(c) GraphicsComputer programs enable plots of observations or statistical results to be obtained easily. Full advantage should be taken of this facility. Histograms and scatter diagrams can be used to inspect the raw data (see Chapter 7), and plots can also be used to study the results from an analysis. Section 6.8 discusses some practical issues relating to computer plots.


### (d) Flexibility

(d) FlexibilityA major advantage is the ability to make small changes and repeat the analysis. For example, it is simple to rerun an analysis after transforming the data, perhaps by taking logs (see Chapter 7), to perform the same analysis on a subset of the data, or to add some new observations.


### (e) New variables

(e) New variablesIt is simple to generate new variables. We may calculate a subject's age from their date of birth and the date of the study, or the change in a measurement by taking the difference between pre- and post-treatment values, or count the number of symptoms a patient has. Such calculations should always be done on the computer, which is faster and more accurate than doing the calculations by hand. Of course, if the instruction to create a new variable is incorrect or is typed wrongly all of the observations will be wrong.


### (f) Volume of data

(V) Volume of dataVast amounts of data can be handled. Indeed for some programs there is no limit to the number of subjects (cases) that can be analysed.


### (g) Easy transfer of data

(g) Easy transfer of dataOnce data have been entered into a computer file they can easily be transferred between researchers either electronically (by telephone line) or by sending a 'floppy disk' by post. It should never be necessary to enter the same data into a computer twice, but unfortunately computers use a variety of disk formats and sizes.


## 6.3 DISADVANTAGES OF USING A COMPUTER

To counterbalance the major benefits there are several potential problems that users of statistical software should be aware of.


### (a) Errors in software

(a) Errors in softwareNot all statistical programs are well-written. Some may give incorrect answers in certain circumstances, either through poor programming or inadequate understanding of the statistical theory. It is advisable to use programs that are reputable and have been around long enough for errors

to be found, the best known of which are BMDP, Minitab, SAS and SPSS. Since the advent of microcomputers (PCs) there has been a huge increase in the number of statistical programs on the market, some of which are poor and some incorrect (Bland and Altman, 1988; Dallal, 1988). Sections 6.4 and 6.5 give advice about choosing and evaluating statistical software.


### (b) Versatility

Versatility was given as one of the advantages of using a computer, but it can lead to difficulties too. Because of the wide variety of analyses available, it is easy to use an inappropriate method. It is essential to be aware of the limits of your statistical knowledge, and to use only methods that you understand. If your problem seems to require methods you are not familiar with you should seek expert advice.


### (c) The black box approach

Using a computer may distance you from your data. It is possible to perform statistical analyses automatically: the data go in at one end and the results come out at the other, untouched by human thought. Because much statistical analysis is concerned with average effects you may get no feel for the way individuals respond.


### (d) Garbage in garbage out

'Garbage in garbage out' refers to the fact that sensible answers follow only from sensible questions. If the data input or the specification of the analysis was wrong then the results will be wrong. For example, a common problem is what to do about missing observations. When data are entered into the computer such values are sometimes left blank, in which case the value will automatically be taken as zero, or they are given a numerical 'missing value code', such as 99. It is common to use values like 9, 99, 999, etc. as missing values, or perhaps a negative number - any value will do as long as it clearly could not be a genuine observation.

Table 3.1 showed the PImax values of 25 patients with cystic fibrosis; the mean and standard deviation were 92.6 and 24.92 cm  $\mathrm{H}_2\mathrm{O}$  respectively. Suppose that there had been five other patients in the study whose PImax was unknown. If their values were left blank (zero) or coded 999 and all 30 values analysed by a computer program then the results would have been as follows:

<table><tr><td rowspan="2">Value for missing data</td><td colspan="2">Result for 30 subjects</td></tr><tr><td>Mean</td><td>SD</td></tr><tr><td>0</td><td>77.2</td><td>41.79</td></tr><tr><td>999</td><td>243.7</td><td>344.32</td></tr></table>

both of which are major distortions of the truth. The computer will accept the values 0 or 999 as genuine observations, and so will give false answers. Missing data must be identified as such to the program (see section 6.6).

A similar problem may arise when information is not appropriate for some individuals rather than actually missing. For example, the number of pregnancies is only appropriate for women, and may be recorded as 9 or 99 for all males in a study. These examples show the importance of checking the data before analysis, as discussed in section 6.6 and in the next chapter.


## 6.4 TYPES OF STATISTICAL PROGRAM

Commercially available statistical software is generally capable of perform­ ing many types of statistical analysis. Statistical programs, often called packages, vary in their capability and the way in which they work. Some of the more important aspects to consider are:

1. statistical methods available 
2. accuracy 
3. maximum amount of data that can be analysed 
4. facilities for data manipulation (including editing) 
5. ability to accept missing data 
6. ease of use (is it 'user-friendly'?) 
7. maturity (is it tried and tested?) 
8. speed 
9. documentation 
10. error handling 
11. graphics capability 
12. quality of output 
13. cost.

The most important considerations are the first two in the above list. because you obviously need a package that will perform the analyses desired and achieve correct results. However, assessing accuracy is not easy. Other key issues are the ability to create plots simply, and helpful error messages when you make a mistake, as you often will. In addition. there are different ways of telling the program what you want done. In some packages one enters commands such as

 **plot height age**

but in others one chooses from a menu of options. This is known as an interactive system. For programs that use commands it is usually possible to create a file of commands which can then be executed as a block. This has the advantage that possibly complicated instructions only have to be

typed once, and that it is easy to edit the file to produce slightly different analyses.

As well as statistical packages, which cover a wide range of analyses, there are also some specialized programs for particular purposes, such as calculating sample sizes or confidence intervals. These are subject to some of the above requirements too, but should be judged mainly on their specific ability to do things that cannot be done in the usual packages.

It is worth seeking advice from a colleague or from a statistician before choosing a package to use, or buy. I strongly recommend that you use the same package for all your analyses, as it takes a considerable effort to become fully acquainted with even one package. So it is important to choose your software carefully. Few, if any, packages will perform all the analyses in this book, so that it is necessary to know all the types of analysis you might wish to do, which is not at all easy. There are many microcomputer statistics programs on the market (or even free) that can give incorrect results (Dallal, 1988), so if you have doubts about a particular statistical program it is advisable to compare its output with that from another.

The next section discusses some aspects of evaluating statistical software. If you know that you have reliable software then you can go on to section 6.6, which describes a general strategy for analysis.


## 6.5 EVALUATING A STATISTICAL PACKAGE

(This section can be omitted without loss of continuity.)

The main concerns when evaluating a statistical computer program are:

1. Does it perform all the desired functions?

2. Is it easy to use?

3. Does it give the correct answers?

Advice from colleagues or from a statistician can be of great assistance in answering the first two questions, because it takes some familiarity with a package before one can really judge its value and ease of use. The list of features given in section 6.4 can aid evaluation. The purpose of this section is to give limited assistance in relation to (3. ) above.

A computer program may give the wrong answers either because it uses an incorrect formula or because it is not well written. The former is unlikely but possible. More often problems occur because of the way in which the program was written. The procedure by which a computer program performs a given calculation is known as an algorithm. Some algorithms are inferior in that they lose accuracy in some circumstances. To take a simple example, it can be shown that the standard deviation of three numbers  $x$ ,  $x + c$  and  $x + 2c$  is  $c$ , whatever values we give  $x$  and  $c$ . I

calculated the standard deviations of sets of three numbers where  $\pmb{x}$  increases but  $c$  is held at 0.1 using two pocket calculators. For each of the four sets of numbers

(a) 7.0 7.1 7.2

(b) 77.0 77.1 77.2

(c) 777.0 777.1 777.2

(d) 7777.0 7777.1 7777.2

both gave the correct answer of 0.1, but for the set

(e) 77777.0 77777.1 77777.2

one calculator gave the standard deviation as 0.0 while the other gave an error - it would not calculate the standard deviation. The reason for this problem is that in extreme circumstances the calculator loses accuracy because it cannot store the large numbers obtained when the data are squared. There are algorithms that avoid this problem, and while we may not expect them to be used on a pocket calculator we would certainly expect a computer program to give the correct answers for such data. However,  many  microcomputer  packages  use  the  inferior  algorithm (Dallal, 1988). There is also a risk of losing numerical accuracy in some complex  analyses;  problems  with  regression  analysis  are  discussed in Chapter 12.

Increasing use is being made of spreadsheet software for performing simple statistical analyses. These programs are not well suited to statistics, and may use inferior or incorrect methods. I do not recommend them for serious statistics.

Another aspect to consider for some types of analysis is which form of a test is used when there are different forms available. Subsequent chapters will discuss matters such as one and two- sided tests, the use of continuity corrections, and the adjustment for ties in analyses of ranks (non- paramet­ ric methods). It is important to know precisely what method the program uses, and this is not always clear from the manual. Indeed some manuals are positively misleading (Bland and Altman, 1988).

When using a package to perform a particular analysis for the first time it is advisable to begin by analysing some sets of data for which you already know the answers. In this book the raw data are given for the worked examples wherever possible to enable you to do this.


## 6.6 STRATEGY FOR COMPUTER-AIDED ANALYSIS

This section contains a broad strategy for analysing data on a computer. Notice that there are several steps to pass through before moving to the analysis of the data.


### (a) Data collection

(a) Data collectionSection 6.7 describes several aspects of preparing a coding sheet for data that are going to be typed into a computer. Data entry will be much quicker and more accurate if there is a well-designed coding form to work from.


### (b) Data entry

(b) Data entryData should be typed into a file on the computer. This may be possible within the statistics package or using a general purpose editing program. The reason for storing the data is that you will often need to carry out further analyses at a later date, and you only want to enter the data once. Also it is easy to list the data and check that the values have been entered correctly. I consider formats for data files in section 6.7. A statistical package that cannot read data from a file should be rejected.


### (c) Data checking

(c) Data checkingThere is a tendency to believe that once the data are on the computer they must be correct. In fact it is all too easy to make errors when entering (typing) data, however careful one is. It is essential to check that the data have been typed correctly, however tedious this may be. The best way to minimize errors is to have the data entered twice, preferably by two different people. Here it is useful to have a program for comparing files. Any differences between the two files are checked and the correct value obtained. Data checking is discussed in section 7.2.


### (d) Data screening

(d) Data screeningBefore starting the main statistical analysis it is important to look at the data. It is a simple task to produce a histogram of each variable, and pairs of variables can be inspected by scatter diagrams. These plots will give a first idea of the average value, the variability, the shape of the distribution, and whether there are any outlying or missing values. Data screening is discussed in section 7.5.


### (e) Data analysis

The appropriate form of statistical analysis will often follow directly from the design. In particular, values of a variable may be compared between groups or within a group, as discussed in Chapter 5. Within group comparisons must make use of techniques intended for that type of data.

The objectives of the study should indicate a few main analyses of interest. Although the pre- specified analyses are the most important ones, inspection of the data may suggest some additional analyses of interest. The results of these 'exploratory' analyses should be interpreted cautiously (see Chapter 8).

Many statistical methods are based on certain assumptions about the

data. These may require further analyses to verify them.

I strongly recommend that you keep a 'log' of the computing session if the software has the facility, in which both the input commands and results are shown. This is especially important when the commands are not stored on a file.


### (f) Checking results

(f) Checking resultsYou should check that the results relate to the correct number of observations – it is surprisingly easy to lose or gain a few cases unwittingly. It is important to appreciate that the results obtained from a computer should not be taken as automatically correct. Simple preliminary inspection of the data should give you some idea of what results to expect. If the results obtained differ markedly from expectation, then you should check that there are no errors in the data, and that the proper analysis has been performed. It is easy to make mistakes when trying to analyse data, especially with complex analyses. The computer will give you the correct answer only if you ask the correct question. Clearly it is much easier to check results when there is a log of the analysis, as suggested above.


### (g) Interpretation

(g) InterpretationInterpretation of results is discussed in subsequent chapters.


## 6.7 FORMS FOR DATA COLLECTION

When data are to be collected for subsequent analysis using a computer, it is a good idea to use a standard form with assigned boxes for each digit. This applies to studies where data are to be extracted from existing records, such as hospital notes, as well as to prospective studies. It is especially important when information on many variables is collected for each individual.

I shall first consider alternative ways in which computer programs can accept (read) data from a file, and then aspects of form design. Further discussion of form design is given by Pocock (1983, pp. 160- 6), De Pauw and Buyse (1984) (with special reference to cancer trials) and Armitage and Berry (1987, pp. 8- 14).


### 6.7.1 Formats for input to computer programs

6.7.1 Formats for input to computer programsA standard format (called free format) that most packages will read is shown in Figure 6.1 which illustrates the first part of the data from a trial comparing two antihypertensive drugs. Here each row of the file contains several variables for one individual and each item of information is separated from the next by one or more spaces. There is no necessity for the columns to line up vertically as in this example, but I recommend this

001 17 02 89 25 11 33 1 2 170.2 77.1 141 82 129 79 002 21 02 89 02 02 44 1 1 162.3 80.8 150 85 144 81 003 28 02 89 14 06 40 2 2 151.9 72.2 142 79 142 76 004 05 03 89 01 12 28 1 1 178.8 91.4 181 101 155 87 005 11 03 89 18 05 48 1 1 166.0 81.8 170 90 158 84 006 12 03 89 24 09 37 2 1 171.4 73.3 139 82 134 78 007 17 03 89 07 04 36 2 2 155.8 61.5 184 107 177 102 008 20 03 89 12 02 38 1 2 185.2 100.6 157 93 150 88

etc

Figure 6.1 An example of a generally applicable style of data layout for entry into a statistical computer program. Different items are separated by one or more spaces and the figures in each column are aligned. The columns contain, in sequence, patient number, date of entry to study, date of birth, sex, treatment, height, weight, initial blood pressure (systolic and diastolic) and final blood pressure.

practice as it makes it easy to check visually that all information has been entered correctly. I strongly recommend that a code number is used to identify each subject, as in Figure 6.1. This makes it easy to check any suspicious values, to add extra variables at a later date, to check that nobody is in the study twice, and so on.

The alternative to free format is fixed format, in which items need not be separated by spaces in the data file. The disadvantage of this format is that it is necessary to tell the program the precise format used, and this can be complicated if you are unused to computer programming. With fixed format you can use blanks to indicate missing data, but this is a bad idea as a blank cannot be distinguished from an omission due to oversight. Also, most programs will interpret blanks as zero, which is potentially disastrous (as shown in section 6.3). Fixed format files occupy slightly less space on the disk, but this is of no real practical consequence. Not all packages can accept data in fixed format, and in any case free format is easier to deal with.

Statistical programs require a value for every variable for each subject, so a good feature of free format is that you will need to enter some quantity even when a value is missing. A blank cannot be used because blanks are used to separate adjacent items. Some programs have the useful facility of letting you indicate missing data in the file by a special symbol, such as ? or *. Otherwise you must give missing data a numerical value which is impossible for that variable, perhaps - 1 or 99, and then remember to give the appropriate instruction to the program to indicate

the missing value code. The absence of a missing value code facility would make a statistical package unacceptable.

There is a variety of ways in which programs can handle the situation where you have too much data for each individual to fit onto the width of your screen (80 characters). You will need to consult your manual.


### 6.7.2 Form design

Figure 6.2 shows a form that could have been used to collect the data shown in Figure 6.1. Some of its features have been described already, such as the subject's identifying code number. The numbers associated with each group of boxes indicate the number of characters from the start of the line when the data are typed into the computer. The missing numbers mean that there is a blank between each piece of information, indicating that the data will be in free format. Note that the patient's name should not be entered into the computer file.

Patient's name

Patient's number

Date of entry to study

Date of birth

Sex (1=Male, 2=Female)

Drug (1=Andreprevin, 2=Doryprevin)

Height (cm)

Weight (kg)

Initial Blood Pressure (mm Hg)

Final Blood Pressure (mm Hg)

![](../images/06_Using_a_computer/img1.jpg)

![](../images/06_Using_a_computer/img2.jpg)  
Figure 6.2 Part of a form to collect data for a trial comparing two antihypertensive drugs, corresponding to the data in Figure 6.1.

The way in which forms are designed for recording data needs careful thought. Categorical and continuous variables pose different problems.


#### (a) Categorical data

A number should be assigned to each possible category, as in the following examples:

Diabetes:  $\mathbf{1} = \mathbf{Y}\mathbf{e}\mathbf{s}$ $2 = \mathbf{N}\mathbf{o}$  Blood group:  $\mathbf{1} = \mathbf{A}$ $2 = \mathbf{B}$ $3 = \mathbf{A}\mathbf{B}$ $4 = 0$

I strongly recommend that all the codes are on the form itself rather than on a separate sheet. Two simple examples are shown in Figure 6.2. If it is necessary to use codes higher than nine, a second box will be needed.

It is advisable to avoid zero as a code when fixed format is used, as some programs do not distinguish 0 from a blank corresponding to a box which has not been filled in. This is not a problem for free format input, as some number must be entered for every variable.

Some variables have several possible non- mutually exclusive answers, such as prior or concomitant therapy. Here it is necessary to have one yes/no box for each possible answer of interest. It is desirable to have consistent codes where possible. For example, all questions with yes or no answers should use the same codes.

It is possible with some programs to use letters instead of numbers for categorical data. Thus sex could be entered as M or F, and drug as, say, A or D. This has some advantages, but means that the data file will not be acceptable to all programs.


#### (b) Continuous data

Measurements should be recorded to the same accuracy as that to which they are measured - there is no advantage in rounding values before recording them. Nor is it usually a good idea to categorize continuous variables when recording data, for example by allocating numeric codes to ranges of values. For statistical analysis it is desirable to have the data recorded as precisely as possible. One box should be allowed for each digit, and the location of the decimal point should be shown if relevant, as for height and weight in Figure 6.2. The decimal point does not have to have its own box; if it were omitted here we would need to divide all heights and weights by 10 before analysis. It is useful to indicate on the form the units used, especially where there are alternatives in common use.

Only one digit should go in each box, so it is essential to allow enough boxes for the largest value that could be recorded. Thus we ought to allow three boxes before the decimal point for adult body weight in kg because some people weigh more than  $100\mathrm{kg}$  . It will not matter if it turns out that the first box is never used.

Whoever fills in the forms should understand the importance of using the

right- hand boxes when not all boxes are needed. Thus diastolic blood pressure below 100 must be written in the second and third of the three available boxes.


#### (c) Dates

The usual British ordering of dates is day, month, year, as shown in Figure 6.2, but in the USA it is month, day, year. It is important to indicate on the form which order is required.

In fact the order year, month, day is a good option, apart from its unfamiliarity, as it allows the data to be sorted simply by using the date as a six digit number.


#### (d) Missing data

If your program will accept a symbol for this purpose, such as \*, then this can be used, but it will mean that your file may not be readable by any other statistical program. Otherwise a special numeric code should be used. The most common method is to fill each box with nines, so that unknown blood pressure is recorded as 999 and unknown sex as 9.


### 6.7.3 Multiple forms

Clinical data are often obtained from a subject each time they are seen, for example during pregnancy. When patients are not seen equally often there will be varying amounts of information among the subjects being studied. It is implicit in Figure 6.1 that there should be the same amount of information about each subject. Although unequal amounts of data per subject can be stored using a type of software known as a database, most statistical computer programs can only deal with data sets where the same information is available for all subjects (called rectangular data). Some summarizing of such data sets will be necessary before analysis can begin.

The simple expedient of treating each visit as a separate data set should never be adopted - it is completely invalid to treat multiple records from one patient as if they were from several patients. The amount of data should be considered when the study is being planned, even for retrospective studies based on examining case notes. This type of data can be extremely difficult to organize appropriately for statistical analysis. I recommend expert assistance if it is necessary to collect multiple sets of data from each subject.


### 6.7.4 Analysis of data on a file

A consequence of the formats described above is that on the computer file each row represents an individual, with different variables in columns. In many analyses we wish to compare subgroups of subjects, so it is necessary

for the program to accept data where all the values are in a single column, and an indicator of the subgroup is in a different column. For example, for the data shown in Figures 6.1 and 6.2 we would wish to compare final blood pressures for patients receiving the different treatments. Some programs expect sets of data to be compared to be in different columns, in which case they would be unsuitable for statistical analysis of data stored in files in the manner described. This is a further feature to be considered when evaluating statistical software.


## 6.8 PLOTTING

The ability to plot data is a major advantage of using a computer. There are two types of plot that can be produced, whether plotting on the screen or on paper - a line plot or a high- resolution plot. The first method uses the usual 'alphanumeric' character set and places each point as near as possible to its correct location, while the second uses the graphical capability of the computer to give a much more accurate plot. Figure 6.3 shows a line plot of the data shown in Figure 11.4; line plots can be produced by most statistical packages. Coincident points are usually indicated by showing the number of points (up to 9). It is often difficult to specify the scaling of axes and to indicate different groups. Most statistical packages can plot histograms and scatter diagrams, and some can produce box- and- whisker or stem- and- leaf plots. Line plots are very useful when analysing data, but they are not of top quality. Until recently few statistical packages could produce high- resolution plots, but improved graphical facilities are becoming more common. The figures in this book were

![](../images/06_Using_a_computer/img3.jpg)  
Figure 6.3 Line plot of data shown in Figure 11.4 relating log maternal weight to log fetal weight in mammals.

produced on a personal computer (using the package STATA) and printed on a high- resolution laser printer.


## 6.9 OTHER USES OF COMPUTERS

The obvious main statistical value of computers is in the analysis of data and, as just indicated, for producing graphs. However, there are some other applications which can be useful, mostly relating to random numbers.

We saw in Chapter 5 the importance of random allocation in research, especially for allocation of treatments in clinical trials. Table B13, which can be used for this purpose, was generated by a computer program using an algorithm that produces a sequence of numbers which have virtually the same properties as random numbers. The disadvantage of using a table is that you must use the same set of numbers each time, although you can start at an arbitrary place in the table. It is better to generate new random numbers each time using a suitable algorithm, and many statistical programs can do this. Algorithms vary in quality, but all are likely to be good enough for treatment allocation.

The numbers in Table B13 are digits in the range 0 to 9, and are thus a random sample from a Uniform distribution, as described in Chapter 4. Sometimes we wish to obtain a random sample from some other distribution, especially the Normal distribution, in order to study variability under known conditions. An example of this use was seen in Figure 4.7 which showed random samples of size 50 from a standard Normal distribution. Several programs can generate random samples from a Normal distribution.

Investigating what happens in a defined situation is a simple example of an approach known as simulation. The idea is to study what happens under certain assumptions about the nature of a process, and what the effect is of varying the assumptions. Simulation is used in Chapter 8 to illustrate variability among samples drawn from a population with specified characteristics.


## 6.10 MISUSES OF THE COMPUTER

Some disadvantages of using computers were given earlier in this chapter. There are three further misuses of computers that should be avoided.


### (a) 'Data-dredging'

Many studies have clearly defined objectives, but other information is collected because it 'may be interesting'. It is easy to perform a large number of statistical analyses in the hope that something interesting will turn up, especially in studies without clear objectives. As we will see in Chapter 8, there is a good chance of finding some apparent relationship in

a sample purely by chance when there is no real relationship in the population. For this reason I stressed in Chapter 5 that the main objectives, and thus the principal analyses, should be clearly identified in advance. Any exploratory analyses should be considered as useful, if at all, only for generating hypotheses for examination in further studies.


### (b) Over-complexity

It may be tempting to subject your data to a complex statistical analysis because the methodology is available, but this is not good statistical practice. The analysis should be restricted to the minimum necessary to answer the relevant questions. One important reason for keeping analyses simple is that it is much easier to explain to other researchers what you did and what you found.


### (c) Spurious precision

Computers usually produce results to many significant figures, but they should nearly always be rounded before being reported. I have seen published examples of equations purporting to predict birthweight to the nearest  $1 / 10000 \mathrm{g}$  and length of gestation to the nearest ten minutes, results which appeared to have come straight from computer output. Some guidance on the appropriate numerical presentation of the results of statistical analysis was given in section 2.8, and there are further comments in subsequent chapters.


## 6.11 CONCLUDING REMARKS

For all but the smallest data sets it is desirable to use a computer for statistical analysis because of all the benefits indicated. However, while computers remove the drudgery and errors associated with hand calculations, there is a danger that the raw data are never examined properly. The next chapter discusses the preliminary inspection of data. Also, it is easy to perform statistical analyses without a true understanding of the methods used. Properly used, computers are enormously beneficial for statistical analysis, but they do not obviate the need for expert advice when appropriate.