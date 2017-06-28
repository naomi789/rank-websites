#include "Contestants.h"

Contestants::Contestants()
{
}
Contestants::Contestants(string read_this)
{
	ifstream readStream;
	readStream.open(read_this);
	string input=""; 
	string desired_expertise="novice";
	string desired_mode="tradeN";

	int counter=0; 
	int website_location = -1;
	string expertise="";
	string mode="";
	string s_winner="";
	string s_loser="";

	getline(readStream, input, '\n');//this should be names of columns
	//cout << input << endl;

	while(readStream.good())
	{
		counter++;//now it equals one
		getline(readStream, input, '\n');//real data
		istringstream is(input);
		getline(is,expertise,',');
		getline(is,mode,',');
		getline(is,s_winner,',');
		getline(is,s_loser,',');

		/*cout << "Row of Data: " << counter << " Experience: " << expertise << " Mode: " << mode //continues
		 << " Winner: " << s_winner << " Loser: " << s_loser << endl;
*/
		/*if(expertise!=desired_expertise || mode!=desired_mode) continue;
		else*/
		if(expertise==desired_expertise && mode==desired_mode)
		{
			//cout << " Exper: " << expertise << " Mode: " << mode << " Winner: " << s_winner << " Loser: " << s_loser << endl;
			//cout << counter << endl;
			Website winner_website = Website(s_winner);
			Website loser_website = Website(s_loser);
			//if(find(all_contestants.begin(),all_contestants.end(),winner_website) != all_contestants.end())
			for(
				unsigned int i = 0, website_location = -1;
				i < all_contestants.size(), website_location == -1; 
				i++)
			{
				if(all_contestants[i].getName()==winner_website.getName())
				{
					website_location = i;
				}
			} 
			if(website_location  == -1) {
				all_contestants.push_back(winner_website);
				website_location = all_contestants.size() - 1;
			}


			//then put down a win on their record
			//cout << "website_location is: " << website_location << endl;
			//all_contestants[website_location].add_win_to_record(s_loser);

			for(
				unsigned int i = 0, website_location = -1; 
				i < all_contestants.size(), website_location == -1; 
				i++
				)
			{
				if(all_contestants[i].getName()==(loser_website.getName()))
				{
					website_location = i;
				}
			}
			if(website_location == -1)
			{
				all_contestants.push_back(loser_website);
				website_location = all_contestants.size()-1;
			}
			//put a loss on their record
			//all_contestants[website_location].add_loss_to_record(s_winner);
			website_location = -1;
		}
	}
	readStream.close();
	
}

void Contestants::calculate_old_number()
{
	//cout << "Contestants' all_contestants.size() is " << all_contestants.size() << endl;

	//loop through and figure out win and loss records for each item in the map

		
	//then Winner=name of the winner and Loser=...
	//tally up their wins and losses

	//make a website obj [ONLY "tradeN" comparisons] (int (name) and double (old score) and double (new score))
	//store each website's name, num of wins/(wins+losses)
	//put the websites into a map to facilitate finding it quickly 

	//for loop to see each of it's rivals
	//take difference of rival's score and their score 
	//add to their new score
		
	//then Winner=name of the winner and Loser=...
	//tally up their wins and losses

	//make a website obj [ONLY "tradeN" comparisons] (int (name) and double (old score) and double (new score))
	//store each website's name, num of wins/(wins+losses)
	//put the websites into a map to facilitate finding it quickly 
	//bonus questions: 1. what happens if we iterate through a second time to see the adjusted score??
	//2. can we somehow correct for the fact that novices are wrong 20% of the time?
	//3. I forgot.. 
}


Contestants::~Contestants()
{
	
}
