#include<stdio.h>
#define max 10
struct stack{
	int items[max];
	int top;
};

int count=0;

typedef struct stack st; //it is used as a alias for stack structure

void createEmptyStack(st *s)
{
	s->top=-1;
}

int isFull(st *s)
{
	if(s->top==max-1)
	return 1;
	else
	return 0;
}

int isEmpty(st *s)
{
	if(s->top==-1)
	return 1;
	else
	return 0;
}

void push(st *s,int newitem)
{
	if(isFull(s)){
		printf("Stack Overflow\n");
	}
	else{
		s->top++;
		s->items[s->top]=newitem;
	}
	count++;
}

void pop(st *s)
{
	if(isEmpty(s)){
		printf("Stack Underflow\n");
	}
	else{
		printf("Item Popped : %d\n",s->items[s->top]);
		s->top--;
	}
	count--;
}

void printStack(st *s)
{
	int i;
	printf("Stack elements :\n");
	for(i=0; i<count; i++)
	{
		printf("%d ",s->items[i]);
	}
	printf("\n");
}

int main()
{
	st*s=malloc(sizeof(st));
	createEmptyStack(s);
	
	push(s,10);
	push(s,20);
	push(s,30);
	push(s,40);
	push(s,50);
	
	printStack(s);
	pop(s);
	printf("After Deleting \n");
	printStack(s);
}
