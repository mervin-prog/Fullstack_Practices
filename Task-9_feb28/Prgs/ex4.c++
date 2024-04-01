//vector

#include <bits/stdc++.h>
using namespace std;
int main(){
    int arrsize;
    cin>>arrsize;

    vector<int> arr;
    for(int i=0; i<arrsize; i++){
        int val;
        cin>>val;
        arr.push_back(val);
    }

    cout<<"Before Sorting"<<endl;
    for(int i:arr){
        cout<<i<<" ";
    }
    cout<<endl;

    sort(arr.begin(),arr.end());

    cout<<"After Sorting"<<endl;
    for(int i:arr){
        cout<<i<<" ";
    }
    cout<<endl;

    sort(arr.rbegin(),arr.rend()); //reverse

    cout<<"Reverse Order"<<endl;
    for(int i:arr){
        cout<<i<<" ";
    }

}