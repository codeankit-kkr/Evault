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
	ll n;
	cin>>n;
	ll k =0;
	map<ll,ll> mp;
	for(ll i=1;i<=n;i++){
		mp[i]=0;
	}
	vector<vector<ll>> vv(n);
	while(k<n){
		ll j;
		cin>>j;
		while(j--){
			ll z;
			cin>>z;
			vv[k].push_back(z);
		}
		k++;
	}
	for(ll i =0;i<n;i++){
		ll flag = 0;
		for(ll j =0;j<vv[i].size();j++){
			if(mp[vv[i][j]]==0){
				mp[vv[i][j]]++;
				flag = 1;
				break;
			}
		}
		if(flag==0){
			cout<<"IMPROVE"<<endl;
			for(auto it:mp){
				if(it.second==0){
					cout<<i+1<<" "<<it.first<<endl;
					return ;
				}
			}
			
		}
		
	}
	
	
	
	
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
