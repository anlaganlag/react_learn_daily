

#include <iostream>
using namespace std;

void foo()
{
  cout << "运行:" << endl;
  for (int row = 1; row <= 5; row++) {
    for (int col = 0; col <= 5-row; col++) {
      cout << "$";
    }
    cout << "\n";
  }
}

int main()
{
  foo();
  // cout << "#";
  // cout << "\n";
  // cout << "DONE";
  return 0;
}
