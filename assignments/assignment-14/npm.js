const fs = require("fs");

class Data {
    read(fileUrl) {
        return fs.readFileSync(fileUrl, "utf-8");
    }

    parse(content) {
        return content.split("\n");
    }

    parseRow(row) {
        return row.split(",");
    }

    format(fileUrl) {
        const content = this.read(fileUrl);
        const all = this.parse(content);
        const header = this.parseRow(all[0]);
        const rows = all.slice(1);

        const formattedData = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObj = {};

            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];
                personObj[label] = value;
            }

            return personObj;
        });

        return formattedData;
    }

    countByProfession(fileUrl) {
        const formattedDate = this.format(fileUrl);
        const countProfession = {};

        for (const personObj of formattedDate) {
            const prof = personObj.Profession;
            if (!countProfession[prof]) {
                countProfession[prof] = 0;
            }
            countProfession[prof]++;
        }

        return countProfession;
    }

    countByAgeRange(fileUrl) {
        const formattedData = this.format(fileUrl);
        const ageRangeCount = {
            "10-20": 0,
            "21-30": 0,
            "31-40": 0,
            "41-50": 0,
            "51-60": 0
        };

        for (const personObj of formattedData) {
            const age = personObj.Age;

            if (age >= 10 && age <= 20) {
                ageRangeCount["10-20"]++;
            }

            if (age >= 21 && age <= 30) {
                ageRangeCount["21-30"]++;
            }

            if (age >= 31 && age <= 40) {
                ageRangeCount["31-40"]++;
            }

            if (age >= 41 && age <= 50) {
                ageRangeCount["41-50"]++;
            }

            if (age >= 51 && age <= 60) {
                ageRangeCount["51-60"]++;
            }
        }

        return ageRangeCount;
    }
}

const data = new Data();
console.log(data.format("data.csv"));

console.log(data.countByProfession("data.csv"));
console.log(data.countByAgeRange("data.csv"));
