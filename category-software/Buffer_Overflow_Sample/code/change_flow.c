#include <stdio.h>
void win()
{
printf("WoW! Finally you've come to me!\n");
}
int main(int argc, char **argv)
{
int (*fp)();
char buffer[0x69];
fp = 0;
printf("Can you reach to your desired place?\n");
gets(buffer);
if(fp) {
printf("Jumping to 0x%08x\n", fp);
fp();
}
}
