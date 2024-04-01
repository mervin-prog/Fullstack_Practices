//Deque--> stands for "double-ended queue." 
//It's a versatile data structure that allows insertion and deletion of elements 
//from both ends efficiently

#include <bits/stdc++.h>
using namespace std;
int main(){
    deque<int>dq;
    cout<<"Enter integer numbers and -1 to stop."<<endl;
    int num;
    while(1){
        cin>>num;
        if(num!=-1)
        dq.push_back(num);
        else
        break;
    }
    dq.push_front(10);
    cout<<"Element 10 is pushed front."<<endl;
    cout<<"Before Poping"<<endl;
    for(int ele:dq){
        cout<<ele<<" ";
    }
    cout<<endl;
    dq.pop_back();
    dq.pop_front();
    cout<<"After Poping"<<endl;
    for(int ele:dq){
        cout<<ele<<" ";
    }
}