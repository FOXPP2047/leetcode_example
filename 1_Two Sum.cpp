class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::vector<int> result;
        std::unordered_map<int, int> map;
        
        for(int i = 0; i < nums.size(); ++i) {
            map[nums[i]] = i;
        }
        
        for(int i = 0; i < nums.size(); ++i) {
            int rest = target - nums[i];
            
            if(map.find(rest) != map.end()) {
                if(i != map[rest]) {
                    result.push_back(i);
                    result.push_back(map[rest]);
                    return result;    
                }
            }
        }
        
        return result;
    }
};