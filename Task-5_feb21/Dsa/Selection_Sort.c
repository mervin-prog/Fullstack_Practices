#include <stdio.h>
void selectionSort(int arr[],int n)
{
	int i,j;
	for(i=0; i<n-1; i++)
	{
		int min=i;
		for(j=i+1; j<n; j++)
		{
			if(arr[j]<arr[min]){
				min=j;
			}
				
		}
	//	if(min!=i)
	   swap(&arr[min], &arr[i]);
	}
}

void swap(int *x, int *y)
{
	int temp = *x;
	*x = *y;
	*y = temp;
}

void display(int arr[],int n)
{
	int i;
	for(i=0; i<n; i++)
	{
		printf("%d ",arr[i]);
	}
}

void main()
{
/*	int n,i;
//	scanf("%d",&n);
    n=3;
	int arr[n];
	for(i=0; i<n; i++)
	{
		scanf("%d ",&arr[i]);
	}*/
	int arr[]={10,30,20};
	 int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr,n);
	display(arr,n);
}
