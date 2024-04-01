//Queue implementation

#include<bits/stdc++.h>
using namespace std;
int main(){
    queue<int>qt;
    cout<<"Enter integer numbers and -1 to stop."<<endl;
    int num;
    while(1){
        cin>>num;
        if(num!=-1)
        qt.push(num);
        else
        break;
    }
    cout<<"Last element: "<<qt.back()<<endl;
    while(!qt.empty()){
        cout<<qt.front()<<" ";
        qt.pop();
    }
}