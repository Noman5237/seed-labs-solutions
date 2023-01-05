#include <stdio.h>

int main(int argc, char **argv)
{
  int modified;
  char buffer[69];

  printf("Enter whatever you wish:\n");
  modified = 0;
  gets(buffer);

  if(modified == 0x15692119) { // Here, XXXX is the last 4 digits of your ID
      printf("you have correctly got the variable to the right value\n"); // GOAL
  } else {
      printf("Try again, you got 0x%08x\n", modified);
  }
}
