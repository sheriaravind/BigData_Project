import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import twitter4j.FilterQuery;
import twitter4j.StallWarning;
import twitter4j.Status;
import twitter4j.StatusDeletionNotice;
import twitter4j.StatusListener;
import twitter4j.Twitter;
import twitter4j.TwitterFactory;
import twitter4j.TwitterStream;
import twitter4j.TwitterStreamFactory;
import twitter4j.User;
import twitter4j.conf.ConfigurationBuilder;

public class TwitterStreamingAPI  {
	
    public static void main(String[] args) throws IOException   {
        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true);
        cb.setOAuthConsumerKey("dRxv1PHBJzG6tBdD9MREz6GKV");
        cb.setOAuthConsumerSecret("2vCtE6OFkdK5BJaej3m1qcRXKmyhgZsCqEmTHdVGBDbu3lKyKv");
        cb.setOAuthAccessToken("264135295-FQHWAUMHDN0ge3m9FvgMwIZHeVoJB7D5q3RSCplZ");
        cb.setOAuthAccessTokenSecret("2Hu7yZj2aN75khIVBRDXdKrdTv9v7yrCpBnlx8YkaVX64");

        
        TwitterStream twitterStream = new TwitterStreamFactory(cb.build()).getInstance();
        List tweets = new ArrayList();
        List<String> statuses = new ArrayList<>();
        String output="C:\\Users\\shara\\Documents\\final_extraction.txt";
        FileWriter file = new FileWriter(output);
        File name = new File (output);
        Pattern hashpat = Pattern.compile("#(\\S+)");
        Pattern urlpat = Pattern.compile("(?:<\\w+.*?>|[^=!:'\"/]|^)((?:https?://|www\\.)[-\\w]+(?:\\.[-\\w]+)*(?::\\d+)?(?:/(?:(?:[~\\w\\+%-]|(?:[,.;@:][^\\s$]))+)?)*(?:\\?[\\w\\+%&=.;:-]+)?(?:\\#[\\w\\-\\.]*)?)(?:\\p{P}|\\s|<|$)");
        
        StatusListener listener = new StatusListener() {
        		
            @Override
            public void onException(Exception arg0) {
                // TODO Auto-generated method stub

            }

            @Override
            public void onDeletionNotice(StatusDeletionNotice arg0) {
                // TODO Auto-generated method stub

            }

            @Override
            public void onScrubGeo(long arg0, long arg1) {
                // TODO Auto-generated method stub

            }
            
            
            @Override
            public void onStatus(Status status) {
                //User user = status.getUser();
                //String content = status.getText();
                //System.out.println(content +"\n");
                tweets.add(status.getText() + "\n");
                System.out.println("Fetching "+tweets.size()+" tweets");
                
                Matcher hashmat = hashpat.matcher(status.getText());
            	Matcher urlmat = urlpat.matcher(status.getText());
            	
                	while (hashmat.find())
                	{
	            		 
    	            statuses.add(hashmat.group() + "\n");
    	            	
    	            }
                	
                	while(urlmat.find())
                	{
    	            statuses.add(urlmat.group()+"\n");
    	            }
                	
                if(tweets.size() == 2000) {
                	 try {
     String collecttweets = statuses.stream().collect(Collectors.joining(" "));
						file.write(collecttweets);
						file.flush();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
                	System.out.println("Fetched"+" "+tweets.size()+" "+"tweets");
                	System.out.println("Extracted Hashtags and URL's of "+tweets.size()+ " tweets are exported to: " + name.getAbsolutePath()); 
                	twitterStream.shutdown();
                	twitterStream.cleanUp();
                                          } 
                   
            }
            
           
            @Override
            public void onTrackLimitationNotice(int arg0) {
                // TODO Auto-generated method stub

            }

			@Override
			public void onStallWarning(StallWarning arg0) {
				// TODO Auto-generated method stub
				
			}

        };
        FilterQuery fq = new FilterQuery();
    
        String keywords[] = {"ChelseaBarca"};

        fq.track(keywords);

        twitterStream.addListener(listener);
        twitterStream.filter(fq);  

    }
}