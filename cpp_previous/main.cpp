#include <iostream>
#include <string>
#include <string>
#include <fstream>
#include <vector>
//#include "Website.h"
#include "Contestants.h"

using namespace std; 

int main(int argc, char ** argv)
{
	string read_this = argv[1]; 
	//cout << read_this << endl;
	Contestants all_contestants = Contestants(read_this);
	all_contestants.calculate_old_number();


}