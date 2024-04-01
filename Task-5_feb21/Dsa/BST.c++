#include <bits/stdc++.h>
using namespace std;
struct node{
int data;
struct node *left,*right;
};

struct node *newnode(int x)
{
struct node*temp=(struct node*)malloc(sizeof(struct node));
temp->data=x;
temp->left=temp->right=NULL;
return temp;
}

//Insertion
struct node*insert(struct node*root,int x)
{
if(root==NULL){
return newnode(x);
}
else{
if(x<root->data){
root->left=insert(root->left,x);
}
else if(x>root->data){  //no duplicate data --- for duplicate node --> else part --> x>=root->data.
root->right=insert(root->right,x);
}
}
return root;
}

//Traversals
void inorder(struct node*root)
{
if(root!=NULL){
inorder(root->left);
cout<<root->data<<" ";
inorder(root->right);
}
}

void preorder(struct node*root){
if(root!=NULL){
cout<<root->data<<" ";
preorder(root->left);
preorder(root->right);
}
}

void postorder(struct node*root){
if(root!=NULL){
postorder(root->left);
postorder(root->right);
cout<<root->data<<" ";
}
}

int height(struct node*n)
{
   if(n==NULL){
     return 0;
   }
   int leftside=height(n->left);
   int rightside=height(n->right);
//    if(leftside>rightside){
//       return leftside+1;
//    }
//    return rightside+1;
return 1+max(leftside,rightside);
}

void printlevel(struct node *n,int i)
{
    if(n==NULL){
        return;
    }
    if(i==1){ //height==1
        cout<<n->data<<" ";
    }
    else{
        printlevel(n->left,i-1);
        printlevel(n->right,i-1);
    }
}

void levelorder(struct node*n){
  int h=height(n);
 // cout<<h<<endl;
  for(int i=1; i<=h; i++){
    printlevel(n,i);
  }
}

//Deletion
int minValue(struct node *root)
{
  if(root->left==NULL){
    return root->data;
  }
  // if(root->left->left==NULL){
  //   return root->left->data;
  // }
  return minValue(root->left);
}

struct node *deleteNode(struct node *root,int key)
{
   if(root==NULL){
    return root;
   }
   if(key==root->data)
   {
    //node with one child or no child
    if(root->left==NULL)
    return root->right;
    else if(root->right==NULL)
    return root->left;
    //Two child
    else{
      root->data=minValue(root->right); //inorder successor(smaller value in right subtree) (take inorder traversal) 
      root->right=deleteNode(root->right,root->data); //root->right=address,root->data=key
    }
   }
   else if(key<root->data){
    root->left=deleteNode(root->left,key);
   }
   else if(key>root->data){
    root->right=deleteNode(root->right,key);
   }
   return root;
}

int main()
{
struct node *root=NULL;
root=insert(root,30);
insert(root,20);
insert(root,40);
insert(root,50);
cout<<"Inorder Traversal"<<endl;
inorder(root);
cout<<endl;
cout<<"Preorder Traversal"<<endl;
preorder(root);
cout<<endl;
cout<<"Postorder Traversal"<<endl;
postorder(root);
cout<<endl;
cout<<"Levelorder Traversal"<<endl;
levelorder(root);
cout<<endl;
cout<<"Deletion"<<endl;
root=deleteNode(root,30);
levelorder(root);
}