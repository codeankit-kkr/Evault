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
	vector<ll> v(n);
	// map<ll,ll> mp;
	
	for(ll i =0;i<n;i++){
		cin>>v[i];
	}
	sort(v.begin(),v.end());
	ll ans = 0;
	int count = 1;
	for(int i =0;i<n;i++){
		if(v[i]==count){
			ans++;
			count = 1;
		}
		else{
			count++;
		}
	}
	cout<<ans<<endl;
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