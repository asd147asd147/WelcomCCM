#include<stdio.h>
int main(){
    int i;
    int a[5] = {0,};
    for(i=0; i<5;i++){
        scanf("%d ", &a[i]);
    }

    for(i=0; i<5;i++){
        printf("%d ", a[i]);
    }
    printf("\n");
    return 0;
}