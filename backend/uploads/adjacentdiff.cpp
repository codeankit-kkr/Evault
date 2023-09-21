#include<bits/stdc++.h>

using namespace std;


#define ff first
#define ss second
#define ll long long
#define pb push_back
#define mp make_pairṇ
#define pii pair<int,int>
#define vi vector<int>
#define mii map<int,int>
#define pqb priority_queue<int>

void solve(){
	int n;
	cin>>n;
	vector<int> v(n);
	for(int i =0;i<n;i++){
		cin>>v[i];
	}
	int sol = INT_MIN;
	for(int i=0;i<n;i++){
		sol = max(sol,v[(n-1+i)%n]-v[i]);
	}
	for(int i =0;i<n;i++){
		sol = max(sol,v[n-1]-v[i]);
	}
	for(int i =0;i<n;i++){
		sol = max(sol,v[i]-v[0]);
	}
	cout<<sol<<endl;
}

int main(){
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	
	ll t;
	cin>>t;
	while(t--){
		solve();
	}
	
	
	return 0;
}