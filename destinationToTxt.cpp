#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

void writeToFile(string filename) {
    ofstream ofs(filename);
    ofs.open(filename);
    ofs << "asf";
    bool continueWriting = true;
    while(continueWriting) {
        string name;
        string tags;
        float latitude;
        float longitude;
        
        cout << "Name of Destination:\n";
        cin >> name;
        if(name == "stop")
            break;
        cout << "Write tags for destination:\n";
        cin >> tags;
        cout << "Write latitude and longitude for destination:\n";
        cin >> latitude >> longitude;
        
        string toInsert = name + "\n" + tags + "\n" + to_string(latitude) + "\n" + to_string(longitude) + "\n";

        ofs << toInsert;
    }
    ofs.close();
}

int main() {
    string filename = "destinations.txt";
    writeToFile(filename);
    return 0;
}