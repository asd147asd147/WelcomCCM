#include<stdio.h>
int main(){
    int i;
    int a[5] = {0,};
    int sum=0;
    for(i=0; i<5;i++){
        scanf("%d ", &a[i]);
    }

    for(i=0; i<5;i++){
        sum += a[i];
    }
    printf("결과: %d\n",sum);
    return 0;
}