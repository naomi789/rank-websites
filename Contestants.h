#pragma once
#include <string>
#include <iostream>
#include <fstream>
#include <sstream>
#include <map>
#include "Website.h"

using namespace std; 

class Contestants
{
private:
	//map <int, Website> all_contestants;
	vector<Website> all_contestants;
public:
	Contestants();
	Contestants(string read_this);
	~Contestants();
	void calculate_old_number();
};