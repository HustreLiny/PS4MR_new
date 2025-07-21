# Appendix A Mathematical notation

## A1.1 INTRODUCTION

In this book repeated use is made of many mathematical expressions. These are explained in this appendix. Mathematical notation can be confusing, with the same letters used to denote different quantities in different situations, and with the same symbols used in different ways. Also, there may be several ways of depicting the same expression. A further problem is that while there is often a standard notation, in many cases there is not. Thus it can be confusing to look up the same item in two or more textbooks because they use different ways of expressing the same formula. To help a little, some entries below refer to common alternative forms of notation that may be encountered elsewhere, although they do not appear in this book.The next three sections discuss basic ideas and the use of symbols and functions, after which there is a glossary of notation.

The next three sections discuss basic ideas and the use of symbols and functions, after which there is a glossary of notation.


## A1.2 BASIC IDEAS

### A1.1.2 Variables

When we use a mathematical formula we need a simple way to refer to the values of a variable. For example, if we wish to express as a formula the idea that we calculate a person's age at death by subtracting their year of birth from the year in which they died, we replace each variable by a letter. Traditionally we often use  $X, Y$  and  $Z$  to indicate variables, so we could write the above calculation as\[ X = Y - Z \]where  $X$  represents age at death,  $Y$  represents year of death, and  $Z$  represents year of birth. It is common, but not universal, to use a capital letter to indicate a variable, and a small letter to indicate a value of that variable.To denote a particular value of a variable we usually use a subscript. Thus to indicate the value of the variable  $X$  for the fourth person in a

$$
X = Y - Z
$$

where  $X$  represents age at death,  $Y$  represents year of death, and  $z$  represents year of birth. It is common, but not universal, to use a capital letter to indicate a variable, and a small letter to indicate a value of that variable.

To denote a particular value of a variable we usually use a subscript. Thus to indicate the value of the variable  $X$  for the fourth person in a

sample, we write  $x_{4}$ . In the previous example  $x_{4}$  represents the age at death of the fourth person.

Often we wish to denote the value for an unspecified individual, in which case we use  $x_{i}$  to indicate the value of the variable  $X$  for the 'ith' subject in the sample. The letters  $i, j$  and  $k$  are often used in this way.

Unfortunately, a different use of subscripts can cause confusion. When we have many variables it is convenient to use subscripts to indicate the number of the variable, such as  $X_{1}$ ,  $X_{2}$ ,  $X_{3}$ , and so on. The exact meaning of the subscript ought to be clear from the context.


### A1.2.2 Statistics

Summary values derived from the raw data are called statistics - examples are means, standard deviations and proportions. We also use letters to denote these values in formulae. The mean of a variable called  $X$  is denoted  $\bar{x}$  (and pronounced 'x bar'), the standard deviation is denoted  $s$ , and a proportion is usually denoted as  $p$ . When we need to refer to more than one statistic of the same type in the same formula we use different subscripts. For example, we might use  $p_{1}$  and  $p_{2}$  to denote observed proportions in two samples. Again the meaning of the subscript should always be clear from the context.


### A1.2.3 Multiplication

Multiplication features in a high proportion of the formulae used in this book. There are several alternative methods of indicating that quantities are multiplied together. Apart from the usual multiplication sign,  $x$ , we sometimes use a full stop, while in computer programming (but not in general use) we use an asterisk, *. Most confusingly, sometimes we use no symbol at all, relying on the idea that we multiply two adjacent separate quantities in a formula. This is because the multiplication sign looks very similar to the letter  $x$  which is used a great deal in formulae, and a full stop could be confused with the decimal point.

Thus, for example, we have

$$
2 \times (a + b) = 2 \cdot (a + b) = 2(a + b).
$$

The last usage, without a symbol to indicate the multiplication, is the most common method. Thus when we multiply two quantities such  $a$  and  $b$  we write the product as  $ab$ . This is why we use a single letter to denote a variable.


### A1.2.4 Brackets

Brackets are used for grouping expressions, usually involving addition or subtraction, where the whole expression is part of a more complicated

formula. A simple example was given in the preceding section; a more complicated example is

$$
(a + b)(a + c)(b + d)(c + d)
$$

a quantity calculated in Chapter 10 in which four sums of two frequencies are multiplied.

Quantities within brackets should be calculated before other parts of the calculation. Thus if we wish to evaluate

$$
y = 2(a + b)
$$

where  $a = 13.5$  and  $b = 7.1$ , we have

$$
y = 2(13.5 + 7.1) = 2(20.6) = 41.2.
$$

For complicated formulae we often need to have one set of brackets within another. To make these easier to read we use different types of brackets, and usually have round brackets within square brackets within curly brackets. An example is

$$
[p_{1}(1 - p_{1}) + p_{2}(1 - p_{2})] / 2.
$$


### A1.2.5 Division

There are two ways of denoting division in formulae. To show, for example, the quantity  $a + b$  divided by  $c$  we can write either  $(a + b) / c$  or  $\frac{a + b}{c}$ . The brackets in the first method are essential to distinguish  $(a + b) / c$  from  $a + \frac{b}{c}$ . The upper quantity in a division is the numerator and the lower quantity is the denominator.

If the denominator involves multiple elements then brackets may be needed. For example, to denote  $a + b$  divided by  $c + d$  we use either  $(a + b) / (c + d)$  or  $\frac{a + b}{c + d}$ . The symbol  $\div$  is not usually used in mathematical notation.


### A1.2.6 Powers and square roots

When we multiply a quantity by itself we get the square of the original value, and if we multiply the result by the original value again we get its cube. Thus if we have a room that is 4.2 metres square, its area would be  $4.2 \times 4.2 = 17.64$  square metres. If it is also 4.2 metres high, its volume is  $4.2 \times 17.64 = 74.088$  cubic metres.

We denote the square of a number by a superscript of 2, and a cube with a superscript of 3. The floor area of the room is thus  $4.2^{2}$  square metres and its volume is  $4.2^{3}$  cubic metres. The superscript indicates the number of times we must multiply the value by itself, and is known as the power. More generally we write  $x^{k}$  to indicate the value of  $x$  to the power

$k$ . Sometimes we need to evaluate  $x^{k}$  when  $k = 0$ . The value of  $x^{0}$  is 1, for any value of  $x$ .

The square root involves the reverse process. The square root of a number is the number that when squared gives the first number. For example, using the above example, 4.2 is the square root of 17.64. We write this as  $\sqrt{17.64} = 4.2$ . Alternative notation sometimes seen (but not used in this book) is  $17.64^{1 / 2} = 4.2$ . Similarly, the quantity  $1 / x$ , which is known as the reciprocal of  $x$ , may be written as  $x^{- 1}$ .

An example that combines the various features discussed so far is

$$
\sqrt{\left[p(1 - p)\left(\frac{1}{n_{1}} + \frac{1}{n_{2}}\right)\right]}.
$$


### A1.2.7 Summation

A common feature of statistical formulae is the need to indicate the sum of a number of items. For example, the mean of a set of observations is calculated from the sum of all the observations divided by the number of observations. If we have  $n$  observations denoted by  $x_{1}, x_{2}, x_{3}, \ldots , x_{n}$  then, as described in Chapter 3, we can calculate the mean,  $\bar{x}$ , as

$$
\bar{x} = (x_{1} + x_{2} + x_{3} + \ldots + x_{n}) / n
$$

but this is long- winded. We use the 'summation sign'  $\Sigma$  (the Greek capital sigma) to indicate 'sum of', and can abbreviate the expression to

$$
\bar{x} = \frac{1}{n}\sum_{i = 1}^{n}x_{i}
$$

where the symbols below and above the sigma indicate the range of values being added. In practice, it is usually obvious what these values are, so we use the shorthand  $\Sigma x_{i}$  or  $\Sigma x$ . As with other examples already discussed, we use brackets to clarify what is being summed. Thus

$$
\sum (y_{i} - a - b x_{i})^{2}
$$

indicates that we calculate  $y_{i} - a - b x_{i}$  for each value of  $i$ , square them, and add them up for all values of  $i$ .

Note that  $(\Sigma x)^{2} = (\Sigma x) \times (\Sigma x)$  and is not the same as  $\Sigma x^{2}$ .

Sometimes we use two  $\Sigma$  signs to indicate double summation. For example, the expression

$$
\sum_{i = 1}^{r}\sum_{j = 1}^{c}\frac{(O_{ij} - E_{ij})^{2}}{E_{ij}}
$$

means that the expression on the right is added for every combination of values of  $i$  from 1 to  $r$  and  $j$  from 1 to  $c$ . Note the corresponding use of double subscripts. This formula appears in section 10.6.6.


### A1.2.8 Products

We sometimes need to indicate the product of a number of items; that is, we need to multiply them all together. If we have  $n$  observations denoted as  $x_{1}, x_{2}, x_{3}, \ldots , x_{n}$ , then we can calculate their multiple product as

$$
x_{1} \times x_{2} \times x_{3} \times \ldots \times x_{n}
$$

but this is long- winded. We use  $\Pi$  (the Greek capital pi) to indicate 'product of', and can abbreviate the expression to

$$
\prod_{i = 1}^{n} x_{i}
$$

where the symbols below and above the letter pi indicate the range of values being multiplied. In practice, as with summation, it is usually obvious what these values are, so we use the shorthand  $\Pi x_{i}$  or  $\Pi x$ .


### A1.2.9 Factorials

Another sort of product is the factorial. We write, for example, 5! (pronounced 'five factorial') to mean  $5 \times 4 \times 3 \times 2 \times 1$ . In general  $x!$  means the product of all the integers from 1 up to  $x$ . We define  $0! = 1$ . Factorials are used in this book for Fisher's exact test, in section 10.7.3.


## A1.3 MATHEMATICAL SYMBOLS

$|\ldots |$  indicates the absolute value of the quantity between the vertical lines; that is, the sign is ignored. For example,  $\left| - 23.5\right| = \left|23.5\right| = 23.5$

$\pm$  indicates 'plus or minus'. For example, the expression  $a \pm b$  is shorthand for the two quantities  $a + b$  and  $a - b$ .

Bar (e.g.  $\bar{x}$ ) indicates the mean of the variable denoted by the letter, here  $x$ .

Hat (e.g.  $\hat{p}$ ) indicates an estimate of the quantity denoted by the letter, here  $p$ .

$<$  and  $>$  are used to indicate inequalities:

$$
a< b\colon a\mathrm{~is~less~than~}b
$$

$a > b\colon a$  is greater than  $b$

$a \leq b\colon a$  is less than or equal to  $b$

$a \geq b\colon a$  is greater than or equal to  $b$


## A1.4 FUNCTIONS

Another common type of statistical notation is the mathematical function. This notation indicates a general relationship. For example, if we define a function  $\mathbf{f}(x)$  so that  $\mathbf{f}(x) = a + b x$  , then we can write  $y = \mathbf{f}(x)$  to mean  $y = a + b x$  . Here  $\mathbf{f}(x)$  simply means a specified function or transformation of  $x$  . The most common function used in this book is  $\log \left(x\right)$  indicating the logarithmic transformation. With this type of notation, it is understood that the name of the function, here 'log', describes what is done to the value in brackets. This use of brackets is thus different from that given above; in particular we do not interpret  $\mathbf{f}(x)$  as f multiplied by  $x$  . To confuse matters further, in some cases we omit the brackets. Thus  $\log \left(x\right)$  is often written simply as log  $x$  .


### A1.4.1 Logarithms

Logarithms are mainly used in statistics to transform a set of observations to values with a more convenient distribution, in particular to make a skewed distribution closer to a Normal distribution. The logarithm (log) of a quantity  $x$  is the value  $y$  such that  $x = \mathbf{e}^{y}$  . Here e is the constant 2.718281. . . . The log of 1 is 0 and the log of 0 is minus infinity  $(-\infty)$  . Log transformation can be used only for data where all values are positive.  $\mathbf{Log}_{\circ}x$  is known as the natural logarithm of  $x$  to the base e, and is sometimes written  $\ln x$  . We sometimes use logarithms to the base 10, in which case  $\log_{10}x$  is the value  $y$  such that  $x = 10^{y}$  . The advantage of using logs to base 10 is that the numbers 10, 100, 1000, etc. become 1, 2, 3, etc. However, the use of logs to base e is much more common, and may be the only option in a computer package. There is no difference in the effect of taking logs to different bases; one gives values that are a constant multiple of the other. It is, however, important to clarify the base used if values are quoted in log units. We use brackets when necessary to make the meaning clear, as in  $\log_{\mathbf{e}}(x - y)$  .

The logarithm of the ratio of two quantities, say  $f$  and  $\pmb{g}$  , is equal to the difference between their logarithms, i.e.  $\log {(f / g)} = \log {(f)} - \log {(g)}$  .


## A1.5 GLOSSARY OF NOTATION

The notation used in this book is briefly described below, along with a few items that do not appear but which may often be encountered.

$n_{i}$  or  $N_{i}$  The sample size in the ith group of subjects.

n or N The total sample size.

The mean of a sample of observations, where the individual observations are denoted by  $x$  or  $x_{i}$ ; it is pronounced 'x bar'. In some chapters observations are denoted by other letters such as  $y$  or  $d$ , in which case the mean is  $\bar{y}$  or  $\bar{d}$ .

The Greek letter mu, denoting the mean of a population.

The standard deviation of a sample of observations. It is a measure of their variability around the mean.

The Greek letter sigma, denoting the standard deviation of a population.

The standard error of a sample mean or some other estimated statistic. It is a measure of the uncertainty of such an estimate and is used to derive a confidence interval for the population value. The notation  $SE(b)$  or  $SE_{b}$  means 'the standard error of  $b$ '.

The proportion of a sample with a given characteristic. The proportion of the population with a given characteristic may also be called  $p$ , in which case the sample proportion is denoted  $\hat{p}$ .

The Greek capital letter sigma, denoting 'sum of'. See section A1.2.7.

The Greek capital letter pi, denoting 'product of'. See section A1.2.8.

The natural logarithm of  $x$  to the base e, also written  $\ln x$ . We sometimes use logarithms to the base 10, written  $\log_{10} x$ . Logarithms are explained in section A1.4.1. See also  $e^{x}$ .

The exponential function, denoting the inverse procedure to taking logarithms. It is sometimes called the antilogarithmic transformation. An alternative notation is  $\exp (x)$ .

(a) The level of a hypothesis test;  $1 - \alpha$  is the level of the confidence interval. To perform a test at a given level of  $\alpha$ , we compare the test statistic with the theoretical value of the appropriate sampling distribution which cuts off a proportion  $\alpha$  of the distribution. Most commonly we use  $\alpha$  equal to 0.05 or 0.01. Traditionally, the  $\mathbf{P}$  value (see below) from a hypothesis test is compared with  $\alpha$  and the test is 'significant' if  $\mathbf{P} < \alpha$ . The modern attitude is to present the  $\mathbf{P}$  value and not to consider the test as being a decision about whether or not the result is significant.  $\alpha$  is also known as the Type I error rate. See section 8.5.

(b) The intercept of a regression line in the population. The sample intercept is denoted  $a$ .
$\beta$  (a) The Type II error rate associated with a hypothesis test. The power of a hypothesis test is  $1 - \beta$ , and is the probability that the  $\mathbf{P}$  value will be lower than the prespecified significance level  $(\alpha)$  when the alternative hypothesis is true. See section 8.5. (b) The slope of a regression line in the population. The sample slope is denoted  $b$ .

(b) The slope of a regression line in the population. The sample slope is denoted  $b$

P 

The probability value, or significance level, from a hypothesis test.  $\mathbf{P}$  is the probability of the data (or some more extreme data) arising by chance - that is, due to sampling variation only - when the null hypothesis is true. It is better to use  $\mathbf{P}$  rather than  $\mathfrak{p}$  which can be confused with an observed proportion.

$N_{1 - \alpha /2}$  A value from the standard Normal distribution, which is the theoretical Normal distribution with mean 0 and standard deviation 1. The subscript represents the proportion of the distribution below the value  $N_{1 - \alpha /2}$  .Thus  $N_{0.975}$  is the value of the standard Normal distribution below which lies the bottom 0.975 or  $97.5\%$  of the distribution. Thus, for example,  $N_{0.975} = 1.96$  The central  $1 - \alpha$  or  $100(1 - \alpha)\%$  of the distribution lies between  $N_{\alpha /2}$  and  $N_{1 - \alpha /2}$  . Because of the symmetry of the Normal distribution,  $N_{\alpha /2} = - N_{1 - \alpha /2}$  so that the central  $100(1 - \alpha)\%$  of the distribution lies between  $- N_{1 - \alpha /2}$  and  $N_{1 - \alpha /2}$  . For example, the central  $95\%$  of the Normal distribution lies between  $- N_{0.975}$  and  $N_{0.975}$  , that is, between  $- 1.96$  and  $+1.96$  . A common alternative notation is  $z$  , used in this book for the value of the test statistic derived from a sample.

$t$  A value from 'Student's'  $t$  distribution, the sampling distribution for means of small samples. We use  $t$  for the value derived from a sample, and  $t_{1 - \alpha /2}(f)$  to indicate the appropriate value from the theoretical distribution, where  $f$  denotes the number of degrees of freedom.

$x^{2}$  A value from the 'Chi squared' distribution, the sampling distribution for test statistics derived from tables of frequencies. We use  $x^{2}$  or  $x^{2}$  for the value derived from a sample, and  $x_{1 - \alpha}^{2}(f)$  to indicate the appropriate value from the theoretical distribution, where  $f$  denotes the number of degrees of freedom.

$r$  The Pearson correlation coefficient calculated from a sample. The population correlation coefficient is denoted by the Greek letter rho  $(\rho)$ . See Chapter 11.

$r_{s}$  The Spearman rank correlation coefficient calculated from a sample. See Chapter 11.

A value from the '  $F$  ' distribution, the sampling distribution for the ratio of two variances.  $F$  is also used for the sample value of the ratio of two variances.

$(x, y)$  The values corresponding to a point in a two- dimensional graph, such as a scatter diagram, sometimes called 'coordinates'. The mean of a set of values of the variables  $X$  and  $Y$  is denoted  $(\bar{x}, \bar{y})$ .

Infinity - the value larger than any imaginable number. Likewise  $- \infty$  is the value less than any imaginable negative number. The values  $\pm \infty$  are the extremities of a horizontal scale representing the values of a standard Normal distribution.

Factorial, as in  $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$ . See section A1.2.9.
