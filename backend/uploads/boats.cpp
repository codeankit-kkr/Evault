#include<bits/stdc++.h>

using namespace std;


#define ff first
#define ss second
#define ll long long
#define pb push_back
#define mp make_pair
#define pii pair<int,int>
#define vi vector<int>
#define mii map<int,int>
#define pqb priority_queue<int>

void solve(){
	int n;
	cin>>n;
	vector<int> v(n);
	map<int,int> mp;
	for(int i =0;i<n;i++){
		cin>>v[i];
		mp[v[i]]++;
	}
	int maxy=INT_MIN;
	for(int i =2;i<=2*n;i++){
		int total=0;
		for(auto ik:mp){
			int other = i-ik.first;
			if(other>=1 && mp[other]>=1){
				total+=min(ik.second,mp[other]);
			}
		}
		total /=2;
		maxy = max(total,maxy);
		
	}
	
	cout<<maxy<<endl;
	
	
}

int main(){
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
#ifndef ONLINE_JUDGE
freopen("input.txt","r",stdin);
freopen("output.txt","w",stdout);
#endif

	
	ll t;
	cin>>t;
	while(t--){
		solve();
	}
	
	
	return 0;
}