class Solution {
public:
    bool isValid(string s) {
        std::unordered_map<char, char> map = {
            {')', '('}, {'}', '{'}, {']', '['}  
        };
        
        std::stack<char> st;
        
        for(const auto& str : s) {
            if(map.find(str) != map.end()) {
                if(st.size() > 0) {
                    auto top = st.top();
                    st.pop();
                
                    if(top != map[str]) {
                        return false;
                    }    
                } else {
                    return false;
                }
                
            } else {
                st.push(str);    
            }
        }
        
        return st.empty();
    }
};