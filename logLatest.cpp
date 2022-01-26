#include <iostream>
#include <string>
#include <filesystem>
#include <algorithm>
#include <vector>
#include <fstream>
#include <unistd.h>

using std::filesystem::current_path;
namespace fs = std::filesystem;

using namespace std;

void SplitString(string s, vector<string> &v){
	
	string temp = "";
	for(int i=0;i<s.length();++i){
		
		if(s[i]=='-'){
			v.push_back(temp);
			temp = "";
		}
		else{
			temp.push_back(s[i]);
		}
		
	}
	v.push_back(temp);
	
}

void print(std::vector <string> const &a) {
   std::cout << "The vector elements are : ";

   for(int i=0; i < a.size(); i++)
   std::cout << a.at(i) << ' ';
}


bool isNumber(const string& str)
{
    for (char const &c : str) {
        if (std::isdigit(c) == 0) return false;
    }
    return true;
}

bool printFile(string name) {
	
	std::ifstream f(name);

    if (f.is_open())
        std::cout << f.rdbuf();
	
	return true;
}


int main(int argc, char *argv[]) {
	
	string CurrPath = current_path();
	CurrPath.append("/log/House-Nuvelle/admins/");
	
	if (argc == 1 or isNumber(string(argv[1]))) { //No arguments means we get the 5 latest logs
		vector<string> files;
		int files_to_print = 5;
		
		if (argc != 1) files_to_print = stoi(string(argv[1]));
		for (const auto & entry : fs::directory_iterator(CurrPath)) {
			string epath = entry.path().u8string().substr(CurrPath.length());
			files.push_back(epath.substr(0, epath.length()-4));
		}
		
		
		sort( files.begin( ), files.end( ), [ ]( const string& lhs, const string& rhs )
		{
			vector<string> lhsVec = {};
			vector<string> rhsVec = {};
			
			SplitString(lhs, lhsVec);
			SplitString(rhs, rhsVec);
			
			if (lhsVec.at(2) != rhsVec.at(2)) return lhsVec.at(2) > rhsVec.at(2);
			if (lhsVec.at(0) != rhsVec.at(0)) return lhsVec.at(0) > rhsVec.at(0);
			if (lhsVec.at(1) != rhsVec.at(1)) return lhsVec.at(1) > rhsVec.at(1);

			
			
			return true;
		});
		
		if (files.size() < files_to_print) {
			files_to_print = files.size();
			if (argc != 1){
				cout << "There are only " << files.size() << " log files currently availible";
			}
		}
		
		
		//Print the 5 latest files
		for (int i = files_to_print-1; i >= 0; --i){
			
			string filename = "";
			filename.append(CurrPath);
			filename.append(files.at(i));
			filename.append(".log");
			
			cout << endl << files.at(i) << ":" << endl << endl;
			printFile(filename);
		}
		
		cout << "Successfully printed "<< files_to_print << " log files" << endl;
	} else { 
		string file = string(argv[1]);
		
		string filename = "";
		filename.append(CurrPath);
		filename.append(file);
		filename.append(".log");
		
		cout << endl << file << ":" << endl << endl;
		printFile(filename);
		
	}
	
	
	return 0;
}
