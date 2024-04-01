//Stack 

#include<bits/stdc++.h>
using namespace std;
int main(){
    stack<int> st;
    int stsize;
    cin>>stsize;
    while(stsize--){
        int val;
        cin>>val;
        st.push(val);
    }
    while(!st.empty()){
        cout<<st.top()<<" ";
        st.pop();
    }
}