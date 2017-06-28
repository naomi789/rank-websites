#include "Website.h"

Website::Website(string s_num_name)
{
	name = s_num_name;
}
Website::Website()
{

}
Website::~Website()
{
	
}
void Website::add_win_to_record(string opponent)
{
	winning_websites.push_back(opponent);
}
void Website::add_loss_to_record(string opponent)
{
	//losing_websites.push_back(opponent);
}
void Website::add_points_to_new_score()
{

}
double Website::get_new_score()
{
	return new_score; 
}
void Website::printWins()
{
	for(unsigned int i = 0; i < winning_websites.size(); i++)
	{
		cout << winning_websites[i] << endl;
	}
}
void Website::printLosses()
{
	for(unsigned int i = 0; i < losing_websites.size(); i++)
	{
		cout << losing_websites[i] << endl;
	}
}
void Website::printName()
{
	cout << "Name " << name << endl;
}

string Website::getName()
{
	return this->name; 
}