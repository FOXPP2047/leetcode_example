#include <iostream>

void printArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
        std::cout << arr[i] << " ";
    std::cout << std::endl;
}

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    std::cout << "pivot : " << pivot << std::endl;
    int index = (low - 1);

    for (int i = low; i < high; ++i) {
        if (arr[i] < pivot) {
            ++index;
            std::cout << low << ", " << high << std::endl;
            std::cout << "index : " << index << ", arr[index] : " << arr[index] << ", i : " << i << ", arr[i] : " << arr[i] << std::endl;
            swap(arr[index], arr[i]);
            printArray(arr, 7);
        }
    }
    std::cout << "----Out of Loop1----" << std::endl;
    swap(arr[index + 1], arr[high]);
    printArray(arr, 7);
    std::cout << "----Out of Loop2----" << std::endl;
    std::cout << "return " << (index + 1) << std::endl;
    return (index + 1);
}

void quick_sort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
}

int main(void) {
    int arr[] = { 1, 2, 5, 4, -1, -2, 3 };
    int n = sizeof(arr) / sizeof(arr[0]);
    std::cout << n << std::endl;
    printArray(arr, n);
    std::cout << "----Start----" << std::endl;
    quick_sort(arr, 0, n - 1);
    printArray(arr, n);
    std::cout << "----End----" << std::endl;
    return 0;
}