class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int result = INT_MIN;
        
        const int size = accounts.size();
        const int inner_size = accounts[0].size();
        
        for(int i = 0; i < size; ++i) {
            
            int sum = 0;
            
            for(int j = 0; j < inner_size; ++j) {
                sum += accounts[i][j];
            }
            
            if(sum > result) {
                result = sum;
            }
        }
        return result;
    }
};