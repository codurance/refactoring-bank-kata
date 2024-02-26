# refactoring-bank-kata

In this repository, we try to refactor the bank kata, which can be found [here](https://www.codurance.com/katas/bank).

We start from a bank kata which works, but can hardly be understood, to a code which is way easier to understand and extend.
We recorded a video which can be found on our youtube channel trying to improve the code we have.

Bear in mind the final solution is not perfect. The idea with this project is to gradually improve the project, discover
code smells and make the code easier to understand and extend.

## Code smells detected

- Bad naming
- Primitive obsession
  - Transaction type needed
- Data Clumps
  - Duplicated variables in withdraw and deposit
- Dispensables (something pointless and unneeded whose absence would make the code cleaner, more efficient and easier to understand)
  - Comments -> Are not needed
  - Duplicated Code -> deposit and withdraw
  - Explain what a dataclass is, why clock is not and then refactor it
  - Dead Code -> unused code
  - Speculative Generality -> unused class, method or parameter
- Large Class
  - Bank class has too many responsibilities
- Improvements
  - Should printer know about the Transaction class?
  - Who should be responsible for updating the balance, the bank class or the repository?
  - Is the Clock class really needed or a function would do just fine?
  - Is lack of typing a code smell?

## Structure of the repo

The repo starts from the bank.py file which we want to refactor. Inside the _step_by_step_refactors_ folder, you will find
small improvements, each improvement at a time in a different file. Each file has its corresponding test file. We keep all
classes in a single file to keep the exercise easier to follow.

Hope you enjoy the exercise and the youtube video. We are here for feedback :D
