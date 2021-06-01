class Solution {
public:
    string sortSentence(string s) {
        std::stringstream words(s); 
        std::string word;
        std::pair<int, string> m;
        std::vector<pair<int, string> > sent;
        
        //SECTION 1
        while(words >> word)
        {
            int len = word.size();
            int i = int(word[len-1]) - 48;
            sent.push_back(std::make_pair(i, word.substr(0, len-1)));
        }
        
        //SECTION 2
        std::sort(sent.begin(), sent.end());
        
        //SECTION 3
        std::string result = "";
        int size = sent.size();
        for(int i=0; i < size; ++i)
        {
            result += sent[i].second;
            if(i != size - 1)
                result += " ";
        }
        
        return result;
    }
};