#include<bits/stdc++.h>

using namespace std;

typedef long long ll; // comments that are mixed in with code
typedef pair<int, int> ii; // are aligned to the right like this
typedef vector<ii> vii;
typedef vector<ll> vi;


#define ff first
#define ss second
// #define ll long long
#define pb push_back
#define mps make_pair
// #define pii pair<int,int>
// #define vi vector<int>
#define mii map<int,int>
#define pqb priority_queue<int>
#define rep(i,n) for(ll i =0;i<n;i++)
#define fr(i,a,b) for(ll i=a;i<b;i++)
#define all(x) (x).begin(),(x).end()
#define no cout<<"NO"<<endl
#define yes cout<<"YES"<<endl
#define mems(a, x) memset((a), (x), sizeof(a))
#define mod 998244353
#define pie 3.141592653589793238462643383279
// int n, a[15];

void multiply(vector<vector<int>>& a,vector<vector<int>> b){
	int fv = a[0][0]*b[0][0]+a[0][1]*b[1][0];
	int sv = a[0][0]*b[0][1]+a[0][1]*b[1][1];
	int tv = a[1][0]*b[0][0]+a[1][1]*b[1][0];
	int lv = a[1][0]*b[0][1]+a[1][1]*b[1][1];
	a[0][0]=fv;
	a[0][1]=sv;
	a[1][0]=tv;
	a[1][1]=lv;
}

void power(vector<vector<int>>& a,int n){
	if(n==0 || n==1){
		return ;
	}
	power(a,n/2);
	multiply(a,a);
	if(n%2==1){
		vector<vector<int>> temp = {{1,1},{1,0}};
		multiply(a,temp);
	}
} 

int fib(int n){
	vector<vector<int>> a = {{1,1},{1,0}};
	if(n==0){
		return 0;
	}
	power(a,n-1);
	return a[0][0];
	
}


void solve(){
	cout<<fib(5)<<endl;
}
	
int main(){
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
#ifndef ONLINE_JUDGE
freopen("input.txt","r",stdin);
freopen("output.txt","w",stdout);
#endif
	
	ll t=1;
	// cin>>t;
	
	while(t--){
		solve();
	}
	
	
	return 0;
}