
//List
#include <bits/stdc++.h>
using namespace std;
int main(){
   list<int> li;
   int listsize;
   cin>>listsize;

   for(int i=0; i<listsize; i++){
    int val;
    cin>>val;
    li.push_back(val);
   }
   cout<<"Before Sorting"<<endl;
   for(int i:li){
    cout<<i<<" ";
   }
   cout<<endl;
   cout<<"After Sorting"<<endl;
   li.sort();

   li.pop_back(); //remove last element

   for(int i:li){
    cout<<i<<" ";
   }
   cout<<endl;

   li.reverse(); //reverse the list
   //using iterator for list traversal
   cout<<"After Reverse"<<endl;
   for(auto it=li.begin(); it!=li.end(); it++){
    cout<<*it<<" ";
   }
}