#pragma once
#include <string>
#include <iostream>
#include <fstream>
#include <vector>

using namespace std; 

class Website
{
private:
	string name="";
	double old_score=-1;
	double new_score=-1;
	vector <string> losing_websites;
	vector <string> winning_websites;

public:
	Website();
	Website(string s_num_name);
	~Website();
	void add_win_to_record(string opponent);
	void add_loss_to_record(string opponent);
	void add_points_to_new_score();
	double get_new_score();
	void printWins();
	void printLosses();
	void printName();
	string getName();
};