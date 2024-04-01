// Linked List

#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};
// two pointer is for head reference->to update/refer head.
void insertAtEnd(struct node **head, int data)
{
    struct node *newnode = (struct node *)malloc(sizeof(struct node));
    struct node *last = *head;
    newnode->data = data;
    newnode->next = NULL;
    if (*head == NULL)
    {
        *head = newnode;
        return;
    }
    while (last->next != NULL)
    {
        last = last->next;
    }
    last->next = newnode;
    return;
}

void insertAtBegin(struct node **head, int x)
{
    struct node *newnode = (struct node *)malloc(sizeof(struct node));
    newnode->data = x;
    newnode->next = *head;
    *head = newnode;
}
void insertAtGivenNode(struct node *prev, int data)
{
    struct node *newnode = (struct node *)malloc(sizeof(struct node));
    if (prev == NULL)
    {
        printf("Previous node cannot be null\n");
        return;
    }
    newnode->data = data;
    newnode->next = prev->next;
    prev->next = newnode;
}
// Reverse
void reverse(struct node *head)
{
    if (head == NULL)
    {
        return;
    }
    reverse(head->next);
    printf("%d ", head->data);
}
// Print the data
void printList(struct node *n)
{
    while (n != NULL)
    {
        printf("%d ", n->data);
        n = n->next;
    }
    printf("\n");
    // Recursion
    //  if(n==NULL) return;
    //  printf("%d ",t->data);
    //  printList(t->next);
}
int main()
{
    struct node *head = NULL;
    insertAtEnd(&head, 30);
    insertAtBegin(&head, 10);
    insertAtGivenNode(head, 20);
    insertAtEnd(&head, 40);
    printList(head);
    reverse(head);
}