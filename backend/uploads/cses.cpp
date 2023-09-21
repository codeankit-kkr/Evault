#include<bits/stdc++.h>

using namespace std;

typedef long long ll;
typedef unsigned long long ull; // comments that are mixed in with code
typedef pair<int, int> pai; // are aligned to the right like this
typedef vector<pai> vii;
typedef vector<ll> vl;


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
#define mod 1000000007
#define pie 3.141592653589793238462643383279
// int n, a[15];

ll gcd(ll a,ll b){
    if(a==0){
        return b;
    }
    return gcd(b%a,a);
}



int nc2(int n){
    return n*(n-1)/2;
}

ll dilog(ll n){
    ll x = log10(n)+1;
    return x;
}

void multiply(int *a,int &n,int num){
    int carry =0;
    for(int i=0;i<n;i++){
         int pro = a[i]*num+carry;
         a[i]=pro%10;
         carry = pro/10;
    }
    while(carry){
        a[n]=carry%10;
        carry = carry/10;
        n++;
    }
}

void big_factorial(int num){
    int *a = new int[1000];
    for(int i=0;i<1000;i++){
        a[i]=0;
    }
    
    a[0]=1;
    int n =1;
    for(int i=2;i<=num;i++){
        multiply(a,n,i);
    }
    
    for(int j=n-1;j>=0;j--){
        cout<<a[j];
    }cout<<endl;
}


ll getSum(ll n)
    {
        ll sum = 0;
        while (n != 0) {
            sum = sum + n % 10;
            n = n / 10;
        }
        return sum;
    }


 int getClosest(int val1, int val2,
               int target)
{
    if (target - val1 >= val2 - target)
        return val2;
    else
        return val1;
}
// Returns element closest to target in arr[]
int findClosest(vector<int>& arr,int s, int n, int target)
{
    // Corner cases
  //left-side case
    if (target <= arr[s])
        return arr[s];
  //right-side case
    if (target >= arr[n - 1])
        return arr[n - 1];
 
    // Doing binary search
    int i = s, j = n, mid = 0;
    while (i < j) {
        mid = (i + j) / 2;
 
        if (arr[mid] == target)
            return arr[mid];
 
        /* If target is less than array element,
            then search in left */
        if (target < arr[mid]) {
 
            // If target is greater than previous
            // to mid, return closest of two
            if (mid > 0 && target > arr[mid - 1])
                return getClosest(arr[mid - 1],
                                  arr[mid], target);  
            j = mid;
        }
      /* Repeat for left half */
 
        // If target is greater than mid
        else {
            if (mid < n - 1 && target < arr[mid + 1])
                return getClosest(arr[mid],
                                  arr[mid + 1], target);
            // update i
            i = mid + 1;
        }
    }
 
    // Only single element left after search
    return arr[mid];
}

ll maxSubArraySum(vector<ll>& a, ll size)
{
    ll max_so_far = INT_MIN, max_ending_here = 0;
  
    for (ll i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;
  
        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}

bool comp(pair<int,int>& p1,pair<int,int>&p2){
    return p1.first>p2.first;
}



int maxPrimeFactors(long long n)
{
    
    int largest_prime = -1;
    int i = 2;
    while (i * i <= n) {
        while (n % i == 0) {
            largest_prime = i;
            n = n / i;
        }
        i = i + 1;
    }
    if (n > 1) {
        largest_prime = n;
    }
    return largest_prime;
}


// This function sorts the
// input array and returns the
// number of inversions in the array
long long merge(vector<long long>& v,int i,int m,int j){
    vector<long > left(m-i+1);
    vector<long > right(j-m);
    long long count =0;
    for(int k=0;k<m-i+1;k++){
        left[k]=v[k+i];
    }
    for(int k=0;k<j-m;k++){
        right[k]=v[k+m+1];
    }
    left.push_back(INT_MAX);
    right.push_back(INT_MAX);
    int f=0,fk=0;
    for(int k =i;k<=j;k++){
        if(left[f]<=right[fk]){
            v[k]=left[f++];
        }
        else{
            if(f<m-i+1){
                count+=m-i-f+1;
            }
            v[k]=right[fk++];
        }
    }
    return count;
}

long long mergesort(vector<long long>& v,int i,int j){
    long long count=0;
    if(i<j){
        int mid = i+(j-i)/2;
        long c1 = mergesort(v,i,mid);
        long c2 = mergesort(v,mid+1,j);
        long c3 = merge(v,i,mid,j);
        return c1+c2+c3;
    }
    return count;
}

// #define c cout<<"CHEF"<<endl;
// #define cf cout<<"CHEFINA"<<endl;

// ll power(ll x, ll y) {
//     ll res = 1;
//     while (y > 0) {
//         if (y & 1) {
//             res = (res * x) % mod;
//         }
//         y = y >> 1;
//         x = (x * x) % mod;
//     }
//     return res;
// }


class DSU{
    public:
        vector<int> rank;
        vector<int> parent;
        DSU(int n){
            rank.resize(n+1);
            parent.resize(n+1);
            for(int i=0;i<=n;i++){
                rank[i]=1;
                parent[i]=i;
            }
        }
        
        int findparent(int x){
            if(x==parent[x]){
                return x;
            }
            else{
                return parent[x]=findparent(parent[x]);
            }
        }
        
        void makeUnion(int x,int y){
            int p1 = findparent(x);
            int p2 = findparent(y);
            
            if(p1!=p2){
                if(rank[p1]>rank[p2]){
                    parent[p2]=p1;
                    rank[p1]+=rank[p2];
                }
                else{
                    parent[p1]=p2;
                    rank[p2]+=rank[p1];
                }
            }

        }
};

// void seive(int n){
//  ll n = 100;
//  vector<ll> primes(n,1);
//  for(ll i=2;i*i<n;i++){
//      if(primes[i]==1){
//          for(ll j=i*i;j<n;j+=i){
//              primes[j]=0;
//          }
//      }
//  }
//  for(ll k =2;k<n;k++){
//      if(primes[k]==1){
//          cout<<k<<endl;
//      }
//  }
// }

// vector<ll> lnum;
// void generate(ll n,ll four,ll sev){
//  if(n> 10000000000LL){
//      return ;
//  }
//  if(four==sev){
//      lnum.push_back(n);
//  }
//  generate(n*10 +4,four+1,sev);
//  generate(n*10 + 7,four,sev+1);
// }
int power(int a,int b,int c){
    if(a==0){
        return 0;
    }
    if(b==0){
        return 1;
    }
    long ans ;
    if(b%2==0){
        long long val = power(a,b/2,c);
        ans = (val*val)%c;
        // ans = ans%c;
    }
    else{
        long long val = power(a,b-1,c);
        ans = a%c;
        ans = (val*ans)%c;
    }
    return (int)(ans+c)%c;
}


// void divisors(ll n)
// {
//     map<ll,ll>prim;
//     while(n%2==0)
//         n/=2;
//     for(ll i=3 ; i <= n /i ; i += 2 )
//     {
//         while(n%i==0)prim[i]++,n/=i;
//         if ( prim[i] ) st.insert(i);
//     }
//     if(n>2)
//         st.insert(n);
// }


int Lcm(int a,int b){
    int ans = (a*b)/__gcd(a,b);
    return ans;
}

int unioncalc(vector<int>&v,int n,int range){
    int ans = 0;
    for(int i=1;i<pow(2,n);i++){
        int x = i;
        int lcm = 1;
        int cnt=1;
        int set =0;
        while(x){
            if(x%2==1){
                set++;
                lcm = Lcm(lcm,v[n-cnt]);
            }
            cnt++;
            x = x>>1;
        }
        if(set%2==0){
            ans-=(range/lcm);
        }
        else{
            ans+=(range/lcm);
        }
        // cout<<range/lcm<<endl;
        
    }
    return ans;
}




// class comp{
//  public :
    // bool compare(const pair<ll,ll>& p1,const pair<ll,ll>& p2){
        
    // }
// };
    
    bool comparator(pair<ll,ll>&p1, pair<ll,ll>&p2){
    if(p1.first>p2.first){
        return true;
    }
    else if(p1.first==p2.first){
        return p1.second<p2.second;
    }   
    return false;
}
    

ll maxremove(ll i,ll n,map<ll,vector<ll>>& mp,vector<ll>& v,vector<ll>& dp){
    if(i>=n){
        return 0;
    }
    if(dp[i]!=-1){
        return dp[i];
    }
    ll chod =1+ maxremove(i+1,n,mp,v,dp);
    ll take = INT_MAX;
    ll x = upper_bound(mp[v[i]].begin(),mp[v[i]].end(),i)-mp[v[i]].begin();
    // for(ll xx=x;xx<mp[v[i]].size();xx++){
        
    if(x<mp[v[i]].size()){
        take =maxremove(mp[v[i]][x]+1,n,mp,v,dp);
    }
// }
    return dp[i]=min(take,chod);
}
bool compa(pair<ll,ll>&p1,pair<ll,ll>&p2){
    return p1.second>p2.second;
}

bool cp(vector<ll>& v1,vector<ll>&v2){
    if(v1[0]==v2[0] && v1[1]==v2[1]){
        return v1[2]<v2[2];
    }
    if(v1[0]==v2[0]){
        return v1[1]<v2[1];
    }
    return v1[0]>v2[0];
}

// #define second cout<<"Second"<<endl;
// #define first cout<<"First"<<endl;



ll dfs(vector<vector<ll>>& gr,ll i,vector<ll>& vis,vector<ll>& cc,map<ll,ll>& mp){
    vis[i]=1;
    ll tot =0;
    for(auto x:gr[i]){
        if(vis[x]==0){
            mp[x]=dfs(gr,x,vis,cc,mp);
            tot+=mp[x];
        }
        else{
            tot+=mp[x];
        }
    }
    if(gr[i].size()==0){
        return mp[i]=cc[i];
    }
    ll mini  = min(tot,cc[i]);
    return mp[i]=mini;
}

void buildsegtree(int v[],int tree[],int i,int j,int ind){
    if(i==j){
        tree[ind]=v[i];
        return;
    }
    int mid = i+(j-i)/2;
    buildsegtree(v,tree,i,mid,2*ind);
    buildsegtree(v,tree,mid+1,j,2*ind+1);
    
    tree[ind]=min(tree[2*ind],tree[2*ind+1]);
}

void updatetree(int arr[],int tree[],int i,int j,int treenode,int idx,int value){
    if(i==j){
        arr[idx]=value;
        tree[treenode]=value;
        return;
    }
    int mid = i+(j-i)/2;
    if(idx>mid){
        updatetree(arr,tree,mid+1,j,treenode*2+1,idx,value);
    }
    else{
        updatetree(arr,tree,i,mid,treenode*2,idx,value);
    }
    tree[treenode]=tree[treenode*2]+tree[treenode*2+1];
}

int query(int tree[],int i,int j,int treenode,int l,int r){
    if(r<i || l>j){
        return INT_MAX;
    }
    if(i>=l && j<=r){
        return tree[treenode];
    }
    int mid = i+(j-i)/2;
    int q1 = query(tree,i,mid,2*treenode,l,r);
    int q2 = query(tree,mid+1,j,2*treenode+1,l,r);
    return min(q1,q2);
}

void updatelazytree(int tree[],int lazy[],int i,int j,int treenode,int start,int end,int inc){
    if(i>j){
        return;
    }
    if(lazy[treenode]!=0){
        tree[treenode]+=lazy[treenode];
        if(i!=j){
            lazy[treenode*2]+=lazy[treenode];
            lazy[treenode*2+1]+=lazy[treenode];
        }
        
        lazy[treenode]=0;
    }
    // no overlap
    if(end<i || j<start){
        return;
    }
    //complete overlap
    if(start<=i && end>=j){
        tree[treenode]+=inc;
        if(i!=j){
            lazy[treenode*2]+=inc;
            lazy[treenode*2+1]+=inc;
        }
        return;
    }
    //partial
    int mid = i+(j-i)/2;
    updatelazytree(tree,lazy,i,mid,treenode*2,start,end,inc);
    updatelazytree(tree,lazy,mid+1,j,treenode*2+1,start,end,inc);
    tree[treenode]=min(tree[treenode*2],tree[treenode*2+1]);
}

int querylazy(int tree[],int lazy[],int i,int j,int treenode,int l,int r){
    if(r<i || l>j){
        return INT_MAX;
    }
    if(lazy[treenode]!=0){
        tree[treenode]+=lazy[treenode];
        if(i!=j){
            lazy[treenode*2]+=lazy[treenode];
            lazy[treenode*2+1]+=lazy[treenode];
        }
        
        lazy[treenode]=0;
    }
    if(i>=l && j<=r){
        return tree[treenode];
    }
    int mid = i+(j-i)/2;
    int q1 = querylazy(tree,lazy,i,mid,2*treenode,l,r);
    int q2 = querylazy(tree,lazy,mid+1,j,2*treenode+1,l,r);
    return min(q1,q2);
}

// always take the size of segment tree as 4n;

ll dffs(vector<vector<ll>>& gr,ll i,vector<ll>& vis,vector<ll>& lefs){
    vis[i]=1;
    ll ans =0;
    for(auto it:gr[i]){
        if(vis[it]==0){
            ans+=dffs(gr,it,vis,lefs);
        }
    }
    if(ans==0)return lefs[i]=1;
    return lefs[i]=ans;
}

void solve(){   
   ll l,r;
   cin>>l>>r;
   ll num = l;
   for(int i=0;i<65;i++){
        if((num & (1LL<<i)) == 0){
            if((num | (1LL<<i))>r ){
                break;
            }
            else{
                num = num | (1LL<<i);
            }
        }
   }
   cout<<num<<endl;
   
}




    
int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
#ifndef ONLINE_JUDGE
freopen("input.txt","r",stdin);
freopen("output.txt","w",stdout);
#endif
    // precompute();
    ll t=1;
    cin>>t;
    
    while(t--){
        solve();
    }
    
    
    return 0;
}