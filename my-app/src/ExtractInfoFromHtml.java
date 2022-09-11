import java.util.*;
import java.io.*;


class ExtractInfoFromHtml {
    static String s = "";
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        PrintWriter pw = new PrintWriter(System.out);
        s = sc.nextLine();
        String findStr = "section--section-title--8blTh";
        String findStrLast = "udlite-text-sm section--hidden-on-mobile--171Q9 section--section-content--9kwnY";
        int [] start = new int[getCount(findStr)];
        int [] last = new int[start.length];

        //Contains titles of each accordion element
        String [] accordion = new String[start.length];
        //contains the size of each accordion
        int [] accordionDetails = new int[start.length];
        fill(start, findStr);
        fill(last, findStrLast);
        getTitles(accordion, start, last);
        getLecturesCount(accordionDetails, last);

        int detailsCount = 0;
        for(int x : accordionDetails)
            detailsCount += x;
        String findDetailsStr = "section--item-title--2k1DQ";
        String[] Details = new String[detailsCount];
        fillDetails(Details, findDetailsStr);


        String[][][] ans = new String[start.length][2][];
        getResult(ans, accordionDetails, accordion, Details);
        pw.println(Arrays.toString(accordion));
        pw.println(Arrays.toString(Details));
        pw.println(Arrays.deepToString(ans));
        pw.flush();
    }

    private static void fillDetails(String[] details, String findDetailsStr) {
        int lastIndex = 0;
        for(int i = 0; lastIndex != -1; i++){
            lastIndex = s.indexOf(findDetailsStr, lastIndex);
            if (lastIndex != -1) {
                lastIndex += findDetailsStr.length();
                details[i] = "\"" + (extractDetail(s.substring(lastIndex+2, lastIndex + 200))) + "\"";
            }
        }
    }

    //accordionDetails[i] contains the number of lecture of accordion[i]
    //accordion[i] contain the title of accordion[i]
    //details contain all the lectures of all accordions
    private static void getResult(String[][][] ans, int[] accordionDetails, String[] accordion, String[] details) {
        int j = 0;
        int i = 0;
        for(String[][] x : ans){
            x[0] = new String[1];
            x[0][0] = accordion[i];
            x[1] = new String[accordionDetails[i]];
            i++;
            for(int k = 0; k < x[1].length; k++){
                x[1][k] = details[j++];
            }
        }
    }


    static void fill(int [] start, String findStr){
        int lastIndex = 0;
        for(int i = 0; lastIndex != -1; i++){
            lastIndex = s.indexOf(findStr, lastIndex);
            if (lastIndex != -1) {
                lastIndex += findStr.length();
                start[i] = lastIndex;
            }
        }
    }
    static void getTitles(String[] titles, int[] start, int[] last){
        for(int i = 0; i < start.length; i++){
            titles[i] = "\"" +s.substring(start[i] + 2, last[i] - 99)+"\"";
        }
    }
    static void getLecturesCount(int [] Details, int[] last){
        for(int i = 0; i < last.length; i++){
            Details[i] = Integer.parseInt((s.substring(last[i]+25 , last[i] + 40)).replaceAll("[^0-9]", ""));
        }
    }
    static int getCount(String findStr){
        int lastIndex = 0;
        int i = 0;
        while (lastIndex != -1) {
            lastIndex = s.indexOf(findStr, lastIndex);

            if (lastIndex != -1) {
                i++;
                lastIndex += findStr.length();
            }
        }
        return i;
    }
    static String extractDetail(String str){
        StringBuilder sb = new StringBuilder();
        int i = 0;
        if(str.substring(0, 6).equals("<span>"))
            i = 6;
        for(; i < str.length(); i++){
            sb.append(str.charAt(i));
            if(str.substring(i + 1, i + 6).equals("</spa")){
                break;
            }
        }
        return sb.toString();
    }
}