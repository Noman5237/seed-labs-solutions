#include <stdio.h>

void vuln() {
    int authenticated = 0;
    char buf[69];

    gets(buf);
    if (!authenticated) {
        printf("Fake");
    } else {
        printf("real");
    }
}

int main(int argc, char const *argv[]) {
    printf("enter the password: ");
    vuln();
    return 0;
}
