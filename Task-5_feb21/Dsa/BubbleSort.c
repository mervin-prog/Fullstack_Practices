#include<stdio.h>
void bubbleSort(int arr[],int n)
{
	int i,j;
	for(i=0; i<n; i++)
	{
		for(j=0; j<n-i-1; j++)
		{
			if(arr[j]>arr[j+1])
			{
				swap(&arr[j],&arr[j+1]);
			}
		}
	}
}
void swap(int *x,int *y)
{
	int temp=*x;
	*x=*y;
	*y=temp;
}
void printArray(int arr[],int n)
{
	int i;
	for(i=0; i<n; i++)
	{
		printf("%d ",arr[i]);
	}
}
int main()
{
	int arr[]={5,4,3,2,1};
	int n=sizeof(arr)/sizeof(arr[0]);
	bubbleSort(arr,n);
	printArray(arr,n);
}
