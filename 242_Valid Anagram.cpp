class Solution {
public:
    bool isAnagram(string s, string t) {
        std::unordered_map<char, int> map;
        
        for(auto& str : s) {
            if(map.find(str) != map.end()) {
                ++map[str];
            } else {
                map[str] = 1;
            }
        }
        
        for(auto& str : t) {
            if(map.find(str) != map.end()) {
                --map[str];
                
                if(map[str] == 0) {
                    map.erase(str);
                }
            } else {
                return false;
            }
        }
        return map.size() == 0 ? true : false;
    }
};