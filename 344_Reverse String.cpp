class Solution {
public:
    void reverseString(vector<char>& s) {
        const int size = s.size();
        const int half_size = size >> 1;
        
        for(int i = 0; i < half_size; ++i) {
            char temp = s[i];
            s[i] = s[size - 1 - i];
            s[size - 1 - i] = temp;
        }
    }
};

class Solution {
public:
    void reverseString(vector<char>& s) {
        int start = 0, end = s.size() - 1;
        char ch = 0;
        
        while(start < end) {
            ch = s[start];
            s[start] = s[end];
            s[end] = ch;
            
            ++start;
            --end;
        }
    }
};