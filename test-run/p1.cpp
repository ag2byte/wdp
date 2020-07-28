#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int ar[n];
    for (int i = 0; i < n; i++)
        cin >> ar[i];
    n--;
    while (n != -1)
    {
        cout << ar[n--] << " ";
    }
}
