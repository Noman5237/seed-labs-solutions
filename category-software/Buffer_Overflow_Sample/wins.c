#include <stdio.h>

int win() {
    printf("Access me\n");
}

void vuln() {
    char buff[10];
    gets(buff);
}

int main(int argc, char const *argv[]) {
    vuln();
    return 0;
}

// dont forget to turn on randomizer