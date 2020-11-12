#include <iostream>
#include <vector>

using namespace std;

vector<int> v;

int main(){
	for(int i = 0; i < 10; i++)
	    v.push_back(i);
	
	for(auto s : v){
	    cout << s << endl;
	}
	
	return 0;
}